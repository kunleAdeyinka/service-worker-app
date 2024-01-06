import { useState, useCallback, useEffect } from "react";
import * as serviceWorkerRegistration from "../serviceWorkerRegistration";

export const useServiceWorker = () => {
  const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>(
    null
  );

  const [showReload, setShowReload] = useState<boolean>(false);

  // called when a service worker updates.
  // this function is a callback to the actual service worker registration onUpdate.
  const onSWUpdate = useCallback((registration: ServiceWorkerRegistration) => {
    setShowReload(true);
    setWaitingWorker(registration.waiting);
  }, []);

  // this tells the service worker to skip the waiting phase and then reloads the page
  const reloadPage = useCallback(() => {
    waitingWorker?.postMessage({ type: "SKIP_WAITING" });
    setShowReload(false);
    window.location.reload();
  }, [waitingWorker]);

  // register the service worker
  useEffect(() => {
    serviceWorkerRegistration.register({
      onUpdate: onSWUpdate,
    });
  }, [onSWUpdate]);

  return { showReload, waitingWorker, reloadPage };
};
