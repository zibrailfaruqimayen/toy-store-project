import { Link } from "react-router-dom";

const Toy = ({ toy }) => {
  const { _id, category, sellername, photoURL, price, quantity, toyname } =
    toy || {};
  return (
    <tr>
      <th></th>
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

      <td>${price}</td>

      <td>{quantity}</td>
      <td>{category}</td>
      <th>
        <Link to={`/toyDetails/${_id}`}>
          <button className="btn btn-info ">Details</button>
        </Link>
      </th>
    </tr>
  );
};

export default Toy;
