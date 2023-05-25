import Uimg1 from "../../assets/images/upcoming toys/uimg-1.jpeg";
import uimg2 from "../../assets/images/upcoming toys/uimg-6.jpeg";
import uimg3 from "../../assets/images/upcoming toys/uimg-3.jpeg";
import uimg4 from "../../assets/images/upcoming toys/uimg-4.jpeg";
import uimg5 from "../../assets/images/upcoming toys/uimg-5.jpeg";

const UpcomingToys = () => {
  return (
    <div className="container mx-auto mb-8">
      <h2 className="text-4xl text-center font-bold mb-5">Upcoming Toys</h2>
      <div>
        <div className="carousel w-full h-[700px] shadow-lg">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={Uimg1} className="w-full " />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide5" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={uimg2} className="w-full " />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={uimg3} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src={uimg4} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide5" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide5" className="carousel-item relative w-full">
            <img src={uimg5} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingToys;
