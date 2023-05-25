import { useState } from "react";
import { Link } from "react-router-dom";
import UpdateToy from "./UpdateToy";
import Swal from "sweetalert2";

const MyToyRow = ({ myToy, handleDelete, setControl, control }) => {
  const [showEditModal, setShowEditModal] = useState(false);

  const {
    _id,
    toyname,
    sellername,
    email,
    category,
    price,
    description,
    quantity,
    photoURL,
  } = myToy;

  const closeModal = () => {
    setShowEditModal(false);
  };
  const handleEditClick = () => {
    setShowEditModal(true);
  };

  const handleUpdateToy = (data) => {
    fetch(`https://toy-store-server-theta.vercel.app/updateToy/${data?._id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Toy Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          setControl(!control);
        }
      });
    closeModal();
    console.log(data);
  };

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-error btn-sm btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={photoURL} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold"></div>
          </div>
        </div>
      </td>
      <td>{toyname}</td>
      <td>{sellername}</td>
      <td>{email}</td>
      <td>${price}</td>
      <td>${description}</td>
      <td>{quantity}</td>
      <td>{category}</td>
      <th>
        <Link>
          <button onClick={handleEditClick} className="btn btn-info btn-xs">
            Edit
          </button>
        </Link>

        {showEditModal && (
          <div className="fixed inset-0 z-10 flex items-center justify-center">
            <div className=" inset-0 opacity-60 "></div>
            <div className="bg-white w-1/2 p-4">
              <h2 className="text-xl font-bold mb-4">Edit Toy</h2>
              {/* Add your edit form here */}
              <UpdateToy
                myToy={myToy}
                handleUpdateToy={handleUpdateToy}
                closeModal={closeModal}
              />
            </div>
          </div>
        )}
      </th>
    </tr>
  );
};

export default MyToyRow;
