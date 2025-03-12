import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);

    // post request
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "Coffee Added Successfully",
            icon: "success",
          });
          form.reset();
        }
      });
  };
  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center">
      <div className="w-full max-w-3xl p-8 bg-amber-50 rounded-lg shadow-lg">
        <a href="/" className="text-primary font-semibold text-lg">
          &larr; Back to home
        </a>
        <h2 className="text-3xl font-bold text-center mt-4 mb-2 text-gray-800 font-rancho">
          Add New Coffee
        </h2>
        <p className="text-center text-gray-600 mb-6">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={handleAddCoffee}
        >
          <div>
            <label className="label">Name</label>
            <input
              type="text"
              placeholder="Enter coffee name"
              className="input input-bordered w-full"
              name="name"
            />
          </div>
          <div>
            <label className="label">Quantity</label>
            <input
              type="number"
              placeholder="Enter coffee chef"
              className="input input-bordered w-full"
              name="quantity"
            />
          </div>
          <div>
            <label className="label">Supplier</label>
            <input
              type="text"
              placeholder="Enter coffee supplier"
              className="input input-bordered w-full"
              name="supplier"
            />
          </div>
          <div>
            <label className="label">Taste</label>
            <input
              type="text"
              placeholder="Enter coffee taste level out of 10"
              className="input input-bordered w-full"
              name="taste"
            />
          </div>
          <div>
            <label className="label">Category</label>
            <input
              type="text"
              placeholder="Enter coffee category"
              className="input input-bordered w-full"
              name="category"
            />
          </div>
          <div>
            <label className="label">Details</label>
            <input
              type="text"
              placeholder="Enter coffee details"
              className="input input-bordered w-full"
              name="details"
            />
          </div>
          <div className="col-span-2">
            <label className="label">Photo</label>
            <input
              type="text"
              placeholder="Enter photo URL"
              className="input input-bordered w-full"
              name="photo"
            />
          </div>
          <div className="col-span-2 flex justify-center mt-4">
            <input
              type="submit"
              className="btn bg-amber-300 font-rancho w-full"
              value="Add Coffee"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
