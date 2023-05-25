import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpeg";
import img6 from "../assets/images/img6.webp";
import img7 from "../assets/images/img7.webp";
import img8 from "../assets/images/img8.webp";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ToyGallery = () => {
  useEffect(() => {
    AOS.init({
      // AOS configuration options
      duration: 800, // Duration of animation (in milliseconds)
      offset: 400, // Offset (in pixels) from the original trigger point
    });
  }, []);

  return (
    <div className="container mx-auto mb-8">
      <h1 className="text-4xl text-center mt-8 mb-8 font-bold">Toys Gallery</h1>
      <div className="grid md:grid-cols-3 gap-4">
        <img
          className="h-[300px] rounded-lg shadow-lg"
          src={img1}
          alt=""
          data-aos="fade-up"
        />
        <img
          className="h-[300px] rounded-lg shadow-lg"
          src={img2}
          alt=""
          data-aos="fade-up"
          data-aos-delay="100"
        />
        <img
          className="h-[300px] w-[400px] rounded-lg shadow-lg"
          src={img3}
          alt=""
          data-aos="fade-up"
          data-aos-delay="200"
        />
        <img
          className="h-[300px] rounded-lg shadow-lg"
          src={img4}
          alt=""
          data-aos="fade-up"
          data-aos-delay="300"
        />
        <img
          className="h-[300px] rounded-lg shadow-lg"
          src={img5}
          alt=""
          data-aos="fade-up"
          data-aos-delay="400"
        />
        <img
          className="h-[300px] w-[400px] rounded-lg shadow-lg"
          src={img6}
          alt=""
          data-aos="fade-up"
          data-aos-delay="500"
        />
        <img
          className="h-[300px] rounded-lg shadow-lg"
          src={img7}
          alt=""
          data-aos="fade-up"
          data-aos-delay="600"
        />
        <img
          className="h-[300px] rounded-lg shadow-lg"
          src={img8}
          alt=""
          data-aos="fade-up"
          data-aos-delay="700"
        />
      </div>
    </div>
  );
};

export default ToyGallery;
