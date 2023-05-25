import { useForm } from "react-hook-form";

const UpdateToy = (props) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const { handleUpdateToy, closeModal } = props;

  return (
    <div className="container mx-auto mb-5">
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <h2 className="text-3xl font-extrabold text-center mb-10">
        Update a Toy
      </h2>
      <form className="" onSubmit={handleSubmit(handleUpdateToy)}>
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
              readOnly
              placeholder="Toy Name"
              defaultValue={props?.myToy?.toyname}
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
              readOnly
              defaultValue={props?.myToy?.sellername}
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
              defaultValue={props?.myToy?.email}
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
              defaultValue={props?.myToy?.category}
              className=" select select-bordered"
              {...register("category")}
            >
              <option value="sports">Sports car</option>
              <option value="police">Police car</option>
              <option value="truck">truck</option>
            </select>
          </div>
        </div>
        <input
          className="hidden"
          defaultValue={props?.myToy?._id}
          {...register("_id")}
        />
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
              defaultValue={props?.myToy?.price}
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
              readOnly
              placeholder="Rating"
              defaultValue={props?.myToy?.rating}
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
              defaultValue={props?.myToy?.quantity}
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
              defaultValue={props?.myToy?.description}
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
              readOnly
              placeholder="Photo URL"
              defaultValue={props?.myToy?.photoURL}
              className="input input-bordered w-full "
              {...register("photoURL", { required: true })}
            />
          </div>
        </div>

        {/* errors will return when field validation fails  */}

        <button
          type="button"
          onClick={closeModal}
          className="btn btn-secondary mr-2"
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
};

export default UpdateToy;
