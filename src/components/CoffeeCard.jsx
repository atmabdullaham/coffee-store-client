import React from "react";

const CoffeeCard = ({ coffee, onDelete, onUpdate, onDetails }) => {
  const { name, quantity, supplier, taste, category, details, photo } = coffee;

  return (
    <div className="card w-80 bg-base-100 shadow-xl rounded-2xl border border-gray-200">
      <figure className="rounded-t-2xl">
        <img src={photo} alt={name} className="h-70 w-1/2 object-cover" />
      </figure>
      <div className="card-body p-5">
        <h2 className="card-title text-xl font-bold text-gray-800">{name}</h2>
        <p className="text-gray-600 text-sm">
          Category: <span className="font-semibold">{category}</span>
        </p>
        <p className="text-gray-600 text-sm">
          Supplier: <span className="font-semibold">{supplier}</span>
        </p>
        <p className="text-gray-600 text-sm">
          Taste: <span className="font-semibold">{taste}</span>
        </p>
        <p className="text-gray-600 text-sm">
          Quantity: <span className="font-semibold">{quantity}</span>
        </p>
        <p className="text-gray-600 text-sm">
          Details: <span className="font-light">{details}</span>
        </p>

        <div className="mt-4 flex justify-between">
          <button
            onClick={onDelete}
            className="btn btn-error btn-sm text-white"
          >
            Delete
          </button>
          <button
            onClick={onUpdate}
            className="btn btn-warning btn-sm text-white"
          >
            Update
          </button>
          <button
            onClick={onDetails}
            className="btn btn-info btn-sm text-white"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
