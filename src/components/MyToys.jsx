import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import MyToyRow from "./MyToyRow";
import Swal from "sweetalert2";
import DynamicTitle from "../hooks/DynamicTitle";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [control, setControl] = useState(false);
  DynamicTitle("My Toys");
  const [sortOption, setSortOption] = useState("");

  const url = `https://toy-store-server-theta.vercel.app/addToy?email=${user?.email}&sort=${sortOption}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [url, control]);

  const handleDelete = (id) => {
    const proceed = Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        if (proceed) {
          fetch(`https://toy-store-server-theta.vercel.app/addToy/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                const remaining = myToys.filter((myToy) => myToy._id !== id);
                setMyToys(remaining);
              }
            });
        }
        Swal.fire("Deleted!", "Your Toy has been deleted.", "success");
      }
    });
  };
  const handleSortOptionChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div>
      <div className=" flex justify-center items-center mb-8">
        <h1 className="text-3xl text-center font-bold ">
          My Toys {myToys.length}
        </h1>
        <select
          className="ml-8 select select-primary w-full max-w-xs"
          value={sortOption}
          onChange={handleSortOptionChange}
        >
          <option disabled value="">
            Sort by Price
          </option>
          <option value="highToLow">High to Low</option>
          <option value="lowToHigh">Low to High</option>
        </select>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Delete</th>
              <th></th>
              <th>Name</th>
              <th>Seller Name</th>
              <th>Email</th>
              <th>Price </th>
              <th>Description </th>
              <th>Quantity</th>
              <th>Category</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((myToy) => (
              <MyToyRow
                key={myToy._id}
                myToy={myToy}
                handleDelete={handleDelete}
                setControl={setControl}
                control={control}
              ></MyToyRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
