import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import sliderImg1 from "./../../../Images/Review/pic1.png";
import sliderImg2 from "./../../../Images/Review/pic2.png";
import sliderImg3 from "./../../../Images/Review/pic3.png";
import sliderImg4 from "./../../../Images/Review/pic4.png";
import "./Review.css";

const Review = () => {
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
      <div className="title">
        {/* <h4 className="sub-heading">Our Customers Review</h4> */}
        <h3 class="heading">
          <span>OUR CUSTOMERS REVIEWY</span>
        </h3>
      </div>
      <div className="review_slider">
        <div className="container">
          <div className="row">
            <Carousel responsive={responsive}>
              <div className="review">
                <div class="box">
                  <img src={sliderImg1} alt="" />
                  <h3 className="color-pink">Dely fly</h3>
                  <p>
                  Most people’s experience of the Norwegian fjords is from the deck of a cruise ship, but it’s more rewarding to set out on foot and explore. Of course, the geography dictates that the walks involve big ups and downs, starting and finishing at the fjord edge.
                  </p>
                  <div class="stars">
                    <i class="fas fa-star color-pink"></i>
                    <i class="fas fa-star color-pink"></i>
                    <i class="fas fa-star color-pink"></i>
                    <i class="fas fa-star color-pink"></i>
                    <i class="far fa-star color-pink"></i>
                  </div>
                </div>
              </div>
              <div className="review">
                <div class="box">
                  <img src={sliderImg2} alt="" />
                  <h3 className="color-pink">Jsmi rok</h3>
                  <p>
                  Amirsoy only opened to the public in winter 2019/20, so this is the first ski season that most international skiers will be able to pay a visit. The brand new facilities include a gondola and chair lift, a luxurious chalet village with hammam and spa.
                  </p>
                  <div class="stars">
                    <i class="fas fa-star color-pink"></i>
                    <i class="fas fa-star color-pink"></i>
                    <i class="fas fa-star color-pink"></i>
                    <i class="fas fa-star color-pink"></i>
                    <i class="far fa-star color-pink"></i>
                  </div>
                </div>
              </div>
              <div className="review">
                <div class="box">
                  <img src={sliderImg3} alt="" />
                  <h3 className="color-pink">Lora sem</h3>
                  <p>
                  It’s a four-and-a-half hour drive to Traverse City, a farming area in Michigan with plenty of cherry trees and, unexpectedly, rows of vineyards. The scenic 65-acre Chateau Chantal Winery is located on top of a ridge on the Old Mission Peninsula.
                  </p>
                  <div class="stars">
                    <i class="fas fa-star color-pink"></i>
                    <i class="fas fa-star color-pink"></i>
                    <i class="fas fa-star color-pink"></i>
                    <i class="fas fa-star color-pink"></i>
                    <i class="far fa-star color-pink"></i>
                  </div>
                </div>
              </div>
              <div className="review">
                <div class="box">
                  <img src={sliderImg4} alt="" />
                  <h3 className="color-pink">Ju hunry</h3>
                  <p>
                  The combo was pretty heady stuff but the day hadn’t ended. We end up having dinner at a brewery in Traverse City and ‘heady’ soon morphed into ‘hazey’. The North Peak Brewing Company located in handsome imposing brick edifice of three floors.
                  </p>
                  <div class="stars">
                    <i class="fas fa-star color-pink"></i>
                    <i class="fas fa-star color-pink"></i>
                    <i class="fas fa-star color-pink"></i>
                    <i class="fas fa-star color-pink"></i>
                    <i class="far fa-star color-pink"></i>
                  </div>
                </div>
              </div>
              <div className="review">
                <div class="box">
                  <img src={sliderImg2} alt="" />
                  <h3 className="color-pink">Nence Ru</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                    asperiores architecto sint delectus reiciendis voluptatibus
                    omnis consequatur obcaecati! Vero blanditiis modi aliquid
                    sit ducimus a temporibus, amet culpa possimus neque.
                  </p>
                  <div class="stars">
                    <i class="fas fa-star color-pink"></i>
                    <i class="fas fa-star color-pink"></i>
                    <i class="fas fa-star color-pink"></i>
                    <i class="fas fa-star color-pink"></i>
                    <i class="far fa-star color-pink"></i>
                  </div>
                </div>
              </div>
              <div className="review">
                <div class="box">
                  <img src={sliderImg4} alt="" />
                  <h3 className="color-pink">Banna franky</h3>
                  <p>
                  We passed through the town of Christmas and then Marquette a hilly town by Lake Superior. We take route 31 for a 64-mile straight road to Munising in the Upper Peninsula. Maple trees and pine trees straddle the roadside offering a mix of green and shades of burnt red.
                  </p>
                  <div class="stars">
                    <i class="fas fa-star color-pink"></i>
                    <i class="fas fa-star color-pink"></i>
                    <i class="fas fa-star color-pink"></i>
                    <i class="fas fa-star color-pink"></i>
                    <i class="far fa-star color-pink"></i>
                  </div>
                </div>
              </div>
              <div className="review">
                <div class="box">
                  <img src={sliderImg4} alt="" />
                  <h3 className="color-pink">Lospi nein</h3>
                  <p>
                  In Charlevoix the cherry is king and cherry pies are everywhere. The high street is strewn with sweet shops and in The Cherry Republic shop I pick up some cherry soap and cherry chocolate covered malt balls.
                  </p>
                  <div class="stars">
                    <i class="fas fa-star color-pink"></i>
                    <i class="fas fa-star color-pink"></i>
                    <i class="fas fa-star color-pink"></i>
                    <i class="fas fa-star color-pink"></i>
                    <i class="far fa-star color-pink"></i>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
