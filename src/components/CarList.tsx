import { useState } from "react";

const Car = ({ brand }: { brand: string }) => {
  return <li>I am a {brand}</li>;
};

const CarList = () => {
  const [cars, setCars] = useState([
    { id: 1, brand: "Ford" },
    { id: 2, brand: "BMW" },
    { id: 3, brand: "Audi" },
  ]);

  return (
    <>
      <h1>What cars do we have in the garage?</h1>
      <ul>
        {cars.map((car) => (
          <Car key={car.id} brand={car.brand} />
        ))}
      </ul>
    </>
  );
};

export default CarList;
