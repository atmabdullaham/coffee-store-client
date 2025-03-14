import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavLink to="/">
              <a>Home</a>
            </NavLink>
            <NavLink to="/addCoffee">
              <a>Add</a>
            </NavLink>
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-rancho">Espresso Emporium</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-8 font-rancho text-lg">
          <NavLink to="/">
            <a>Home</a>
          </NavLink>
          <NavLink to="/addCoffee">
            <a>Add</a>
          </NavLink>
          <NavLink to="/users-list">
            <a>Users</a>
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end font-rancho text-xl font-medium">
        <NavLink to="/login">
          <a className="btn">SignIn</a>
        </NavLink>
        <NavLink to="/register">
          <a className="btn">SignUp</a>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
