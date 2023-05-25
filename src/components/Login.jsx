import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import DynamicTitle from "../hooks/DynamicTitle";

const Login = () => {
  const { signIn, googleUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  DynamicTitle("Login");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

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

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    setError("");

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
        setError("");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div className=" hero  ">
      <div className="hero-content  flex-col lg:flex-row">
        <div className="card flex-shrink-0 w-full max-w-sm  bg-base-100">
          <h1 className="text-5xl font-bold text-center">Login now!</h1>
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="email"
                  className="input input-bordered w-80"
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
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <p className="text-red-700">{error}</p>
              <div className="divider">OR</div>
              <div className="text-center space-x-4">
                <button
                  onClick={handleGoogleSignIn}
                  className="btn btn-circle btn-outline border-0 bg-base-200"
                >
                  <FcGoogle className="w-7 h-7"></FcGoogle>
                </button>
              </div>
              <div className="form-control mt-6 ">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div>
              <p>
                Dont Have An Account ?
                <Link className="text-sky-500" to="/register">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
