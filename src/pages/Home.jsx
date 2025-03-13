import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../components/CoffeeCard";
import { useState } from "react";

const Home = () => {
  const coffeeData = useLoaderData();
  const [coffees, setCoffees] = useState(coffeeData);

  return (
    <div className="min-h-screen bg-base-200 p-10">
      <h1 className="text-3xl font-bold text-center mb-6">Coffee Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {coffees.map((coffee, index) => (
          <CoffeeCard
            key={index}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
