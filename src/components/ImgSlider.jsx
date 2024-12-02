import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/slider-badag.jpg";
import img2 from "../assets/slider-badging.jpg";
import img3 from "../assets/slider-scales.jpg";
import '../components/slider.css'


export default function ImgSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="w-full h-[60%]   flex justify-center items-center pt-1">
      <Slider {...settings} className=" w-full h-full  " >
      <Slide img={img1}/>
      <Slide img={img2} />
      <Slide img={img3} />
      </Slider>
    </div>
  );
}


// image component for slider
export function Slide({img}) { 
return(
  <div className="">
  <img src={img} alt="Slide 1" className="w-full h-[20%]rounded-lg border-4 border-transparent
  hover:border-white " />
</div>
)
  
}
