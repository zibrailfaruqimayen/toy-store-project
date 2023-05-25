import { Link } from "react-router-dom";
import logo from "../../../src/assets/font-design-word-toy-shop-with-many-toys_1308-42318.png";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Tooltip } from "react-tooltip";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  const navItems = (
    <>
      <li>
        <Link className=" hover:btn-info" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link to="/alltoys" className=" hover:btn-success">
          All Toys
        </Link>
      </li>
      <li>
        <Link to="/blog" className=" hover:btn-secondary">
          Blog
        </Link>
      </li>
      <li>
        {user && (
          <Link to="/mytoys" className=" hover:btn-warning">
            My Toys
          </Link>
        )}
      </li>
      <li>
        {user && (
          <Link to="/addtoy" className=" hover:btn-primary">
            Add a Toys
          </Link>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow mb-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img
            style={{ height: "50px", width: "120px" }}
            className=""
            src={logo}
            alt=""
          />
          <h3 className="text-3xl font-bold">Toy Shop</h3>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex font-bold">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <div className="w-10 mr-3 rounded-full">
          {user && (
            <img
              data-tooltip-id="my-tooltip"
              data-tooltip-content={user?.displayName}
              style={{ height: "40px", borderRadius: "10px" }}
              src={user?.photoURL}
            />
          )}
          <Tooltip id="my-tooltip" />
        </div>

        {user ? (
          <Link onClick={handleLogOut} to="/" className="btn btn-success">
            Logout
          </Link>
        ) : (
          <>
            <Link to="/login" className="btn btn-info">
              Login
            </Link>
            <Link to="/register" className="btn btn-info ml-4">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
