import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UsersList = () => {
  const loadedUser = useLoaderData();
  console.log(loadedUser);
  const [users, setUsers] = useState([loadedUser]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            const remaining = users.filter((user) => user._id !== id);
            setUsers(remaining);
          });
      }
    });
  };

  useEffect(() => {
    try {
      const response = loadedUser;
      console.log(response);
      setUsers(response);
    } catch (err) {
      setError("Failed to fetch users.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [loadedUser]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-screen text-red-500 text-lg">
        {error}
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-primary">
        👥 User List
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <div
            key={user._id}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition"
          >
            <div className="card-body flex flex-row items-center gap-4 ">
              <div className="avatar">
                <div className="w-14 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
                  {user.name.charAt(0)}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold">{user.name}</h3>
                <p className="text-gray-500">{user.email}</p>
              </div>
            </div>
            <div className="flex gap-4 items-center justify-center">
              <button onClick={() => handleDelete(user._id)} className="btn">
                Delete
              </button>
              <button className="btn">Update</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
