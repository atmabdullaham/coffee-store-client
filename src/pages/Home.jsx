import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../components/CoffeeCard";

const Home = () => {
  const coffeeData = useLoaderData();
  console.log(coffeeData);
  return (
    <div className="min-h-screen bg-base-200 p-10">
      <h1 className="text-3xl font-bold text-center mb-6">Coffee Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {coffeeData.map((coffee, index) => (
          <CoffeeCard
            key={index}
            coffee={coffee}
            onDelete={() => alert(`Delete ${coffee.name}`)}
            onUpdate={() => alert(`Update ${coffee.name}`)}
            onDetails={() => alert(`Details of ${coffee.name}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
