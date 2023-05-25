import { useContext } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";

const TabCards = ({ myToy }) => {
  const { user } = useContext(AuthContext);
  const { _id, category, rating, photoURL, price, toyname } = myToy || {};

  const handleDetailsClick = () => {
    if (!user) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Login First",
      });
      return;
    }
  };

  return (
    <div>
      <div className="p-2 card card-side bg-base-100 shadow-xl">
        <figure>
          <img className="h-42 w-40 rounded" src={photoURL} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{toyname}</h2>
          <p>
            Rating: {rating}.0
            <span className="flex">
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaRegStar></FaRegStar>
            </span>
          </p>
          <p>Price: ${price} </p>
          <p>Category:{category}</p>
          <div className="card-actions justify-end">
            <Link to={`/toyDetails/${_id}`}>
              <button onClick={handleDetailsClick} className="btn btn-success">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabCards;
