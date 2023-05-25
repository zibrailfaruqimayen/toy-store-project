import img1 from "../../assets/images/shops-img/img-1.webp";
import img2 from "../../assets/images/shops-img/img-2.jpeg";
import img3 from "../../assets/images/shops-img/img-3.png";
import img4 from "../../assets/images/shops-img/img-4.webp";
const ToyShop = () => {
  return (
    <div className="container mx-auto mb-5">
      <h2 className="text-4xl text-center font-bold mb-5 mt-8">
        Places to Visit{" "}
      </h2>
      <div className="grid md:grid-cols-4 gap-8">
        <div className="card card-compact w-96 bg-base-100 shadow-xl p-4">
          <figure>
            <img src={img1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Bangla Toys</h2>
            <p>Address: 85 New Circular Road, Dhaka 1217</p>
            <p>Phone: 01789-880011</p>
            <p>Rating: 4.2</p>
            <div className="card-actions justify-end">
              <button className="btn btn-info">View Shop</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl p-4">
          <figure>
            <img className="h-[265px]" src={img2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Toys Plus</h2>
            <p>Address: 28, Orchid plaza, Mirpur Road House-2</p>
            <p>Phone: 01720-267332</p>
            <p>Rating: 4.5</p>
            <div className="card-actions justify-end">
              <button className="btn btn-info">View Shop</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl p-4">
          <figure>
            <img className="h-[265px] w-[400px]" src={img3} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">BD Teddy & Accessories Shop</h2>
            <p>Address: 129/6, Hatirjheel, Bright Star Ln, Dhaka 1212</p>
            <p>Phone: 01904-324643</p>
            <p>Rating: 5.0</p>
            <div className="card-actions justify-end">
              <button className="btn btn-info">View Shop</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl p-4">
          <figure>
            <img className="h-[265px]" src={img4} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Raiyan toy shop</h2>
            <p>
              Address: Shop-2,mirpur new market(3rd floor),mirpur-1,dhaka-1216
            </p>
            <p>Phone: 01735-726814</p>
            <p>Rating: 5.0</p>
            <div className="card-actions justify-end">
              <button className="btn btn-info">View Shop</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyShop;
