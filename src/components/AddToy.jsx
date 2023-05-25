import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProviders";
import DynamicTitle from "../hooks/DynamicTitle";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  DynamicTitle("Add Toy");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://toy-store-server-theta.vercel.app/addToy", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Your Toy Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
    console.log(data);
  };
  return (
    <div className="container mx-auto mb-5">
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <h2 className="text-3xl font-extrabold text-center mb-10">Add a Toy</h2>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        {errors.exampleRequired && <span>Please complite this form</span>}
        {/* seller name and toy name */}
        <div className="flex mb-5">
          <div className="w-1/2 mr-4">
            <label className="label">
              <span className="label-text">Toy name</span>
            </label>
            <input
              type="text"
              required
              placeholder="Toy Name"
              className="input input-bordered w-full "
              {...register("toyname", { required: true })}
            />
          </div>
          <div className="w-1/2">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <input
              type="text"
              required
              defaultValue={user?.displayName}
              placeholder="Seller Name"
              className="input input-bordered w-full "
              {...register("sellername", { required: true })}
            />
          </div>
        </div>
        {/*  email  and sub-category */}
        <div className="flex mb-5">
          <div className="w-1/2 mr-4">
            <label className="label">
              <span className="label-text">Seller Email</span>
            </label>
            <input
              type="email"
              defaultValue={user?.email}
              readOnly
              required
              placeholder="Seller Email"
              className="input input-bordered w-full "
              {...register("email", { required: true })}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Sub-Category</span>
            </label>
            <select
              className=" select select-bordered"
              {...register("category")}
            >
              <option value="sports">Sports car</option>
              <option value="police">Police car</option>
              <option value="truck">truck</option>
            </select>
          </div>
        </div>
        {/*  Price  and rating */}
        <div className="flex mb-5">
          <div className="w-1/2 mr-4">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              required
              placeholder="Price"
              className="input input-bordered w-full "
              {...register("price", { required: true })}
            />
          </div>
          <div className="w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="number"
              required
              placeholder="Rating"
              className="input input-bordered w-full "
              {...register("rating", { required: true })}
            />
          </div>
        </div>
        {/*  quantity  and description */}
        <div className="flex mb-5">
          <div className="w-1/2 mr-4">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              type="text"
              required
              placeholder="Quantity"
              className="input input-bordered w-full "
              {...register("quantity", { required: true })}
            />
          </div>
          <div className="w-1/2">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              required
              placeholder="Description"
              className="input input-bordered w-full "
              {...register("description", { required: true })}
            />
          </div>
        </div>
        {/* photo */}
        <div className="flex mb-5">
          <div className="w-full mr-4">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              required
              placeholder="Photo URL"
              className="input input-bordered w-full "
              {...register("photoURL", { required: true })}
            />
          </div>
        </div>

        {/* errors will return when field validation fails  */}

        <input
          className="btn btn-block btn-info"
          value="Add Toy"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddToy;
