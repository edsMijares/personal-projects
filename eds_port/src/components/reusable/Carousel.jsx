import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Carousel({
  dots = false,
  infinite = true,
  speed = 3000,
  slidesToShow = 6,
  slidesToScroll = 1,
  autoplay = true,
  autoplaySpeed = 0,
  children = [],
}) {
  const settings = {
    dots,
    infinite,
    speed,
    slidesToShow,
    slidesToScroll,
    autoplay,
    autoplaySpeed,
    rtl: true,
    cssEase: "linear",
  };

  return (
    <Slider {...settings}>
      {children.map((child, index) => (
        <div
          key={index}
          className="flex justify-center items-center"
        >
          {child}
        </div>
      ))}
    </Slider>
  );
}

export default Carousel;
