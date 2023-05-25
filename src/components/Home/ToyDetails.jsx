import { Link, useLoaderData } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa";
import DynamicTitle from "../../hooks/DynamicTitle";

const ToyDetails = () => {
  const toyData = useLoaderData();
  DynamicTitle("Details");
  const {
    toyname,
    photoURL,
    description,
    rating,
    price,
    quantity,
    sellername,
    email,
  } = toyData;
  console.log(toyData);
  return (
    <div className="container mx-auto">
      <h2 className="text-4xl text-center font-bold mb-5 mt-8">Toy Details</h2>
      <div className="hero  bg-base-100 rounded-lg shadow-lg mb-10">
        <div className="hero-content flex-col lg:flex-row">
          <img src={photoURL} className=" rounded-lg " />
          <div>
            <h1 className="text-5xl font-bold">{toyname}</h1>
            <p className="py-6">Description: {description}</p>
            <p className="">Seller Name: {sellername}</p>
            <p className="">Price: ${price}</p>
            <p className="">Quantity: {quantity}</p>
            <p className="">Seller Email: {email}</p>
            <p className="">Quantity: {quantity}</p>
            <p className="">
              Rating: {rating}.0{" "}
              <span className="flex">
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaRegStar></FaRegStar>
              </span>
            </p>
            <Link to="/">
              <button className="btn btn-info mt-8">Back to Home</button>
            </Link>
          </div>
        </div>
      </div>
      {/* min-h-screen */}
    </div>
  );
};

export default ToyDetails;
