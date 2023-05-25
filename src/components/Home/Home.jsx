import banner from "../../assets/image.png";
import DynamicTitle from "../../hooks/DynamicTitle";
import ToyGallery from "../ToyGallery";
import SubCategoys from "./SubCategoys";
import ToyShop from "./ToyShop";
import UpcomingToys from "./UpcomingToys";
const Home = () => {
  DynamicTitle("Home");
  return (
    <div>
      <div className="w-full ">
        <img className="w-full " src={banner} alt="" />
      </div>
      <ToyGallery></ToyGallery>
      <SubCategoys></SubCategoys>
      <ToyShop></ToyShop>
      <UpcomingToys></UpcomingToys>
    </div>
  );
};

export default Home;
