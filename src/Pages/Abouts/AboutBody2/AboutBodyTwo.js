import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./../About.css";

const AboutBodyTwo = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="my-5">
      <div className="text-center pt-5 my-5">
        <div className="title">
        </div>
      </div>
      <div className="container">
        <div className="row">
          <Carousel responsive={responsive}>
            <div className="AboutSlider">
              
            </div>
            <div className="AboutSlider">
              
            </div>
            <div className="AboutSlider">
              
            </div>
            <div className="AboutSlider">
              
            </div>
            <div className="AboutSlider">
              
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default AboutBodyTwo;
