import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useServiceWorker } from "./hooks/useServiceWorker";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CarList from "./components/CarList";

function App() {
  const { waitingWorker, showReload, reloadPage } = useServiceWorker();

  // decide when to show the toast
  useEffect(() => {
    if (showReload && waitingWorker) {
      toast(
        <div>
          A new version of this page is available
          <button onClick={() => reloadPage()}>REFRESH</button>
        </div>
      );
    }
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>Testing the service worker stuff</p>
        <p>Using github pages but this aint working</p>
      </header>
      <CarList />
      <ToastContainer autoClose={8000} />
    </div>
  );
}

export default App;
