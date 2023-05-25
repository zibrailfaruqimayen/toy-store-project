import { useEffect, useState } from "react";
import Toy from "./Toy";
import { useLoaderData } from "react-router-dom";
import DynamicTitle from "../hooks/DynamicTitle";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [toysPerPage, setToysPerPage] = useState(20);
  const { totalToys } = useLoaderData();
  DynamicTitle("All Toys");

  const totalPages = Math.ceil(totalToys / toysPerPage);
  const pageNumber = [...Array(totalPages).keys()];

  const options = [5, 10, 20, 30];
  function handleSelectChange(event) {
    setToysPerPage(parseInt(event.target.value));
    setCurrentPage(0);
  }

  useEffect(() => {
    fetch(
      `https://toy-store-server-theta.vercel.app/allToys?page=${currentPage}&limit=${toysPerPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [currentPage, toysPerPage]);
  return (
    <>
      <div>
        <h1>all toys here : {toys.length}</h1>

        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th>Name</th>
                <th>Seller Name</th>
                <th>Price </th>
                <th>Quantity</th>
                <th>Category</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {toys.map((toy) => (
                <Toy key={toy._id} toy={toy}></Toy>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="btn-group flex justify-center mb-3">
        {pageNumber.map((number) => (
          <button
            onClick={() => setCurrentPage(number)}
            className={`btn btn-xs ${
              currentPage === number ? "btn-active" : ""
            }`}
            key={number}
          >
            {number + 1}
          </button>
        ))}
        <select
          className="ml-4 select select-bordered select-xs"
          value={toysPerPage}
          onChange={handleSelectChange}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default AllToys;
