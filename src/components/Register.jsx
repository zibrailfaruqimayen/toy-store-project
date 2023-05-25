import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import DynamicTitle from "../hooks/DynamicTitle";
const Register = () => {
  const { createUser, updateUser, googleUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  DynamicTitle("Sign Up");

  const handleSignUp = (event) => {
    setSuccess("");
    setError("");
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateUser(name, photo).then();
        setSuccess("User has been created successfully");
        setError("");
        event.target.reset();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleSignIn = (event) => {
    event.preventDefault();
    googleUser()
      .then((result) => {
        const googleLoggedUser = result.user;
        console.log(googleLoggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className=" hero  ">
      <div className="hero-content  flex-col lg:flex-row">
        <div className="card flex-shrink-0 w-full max-w-sm  bg-base-100">
          <h1 className="text-5xl font-bold text-center">Sign Up</h1>
          <div className="card-body ">
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Name"
                  className="input input-bordered w-96 "
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  required
                  placeholder="Photo URL"
                  className="input input-bordered w-96"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="email"
                  className="input input-bordered w-96"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="password"
                  className="input input-bordered w-96"
                />
              </div>
              <p className="text-red-700">{error}</p>
              <p className="text-green-700">{success}</p>
              <div className="divider w-96">OR</div>
              <div className="text-center ms-14">
                <button
                  onClick={handleGoogleSignIn}
                  className="btn btn-circle btn-outline border-0 bg-base-200"
                >
                  <FcGoogle className="w-7 h-7"></FcGoogle>
                </button>
              </div>
              <div className="form-control mt-6 w-96">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <div>
              <p>
                Already Have An Account ?
                <Link className="text-sky-500 pl-2" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
