import React from "react";
import "./Gallery.css";
import g1 from "./../../../Images/Gallery/g-1.jpg";
import g2 from "./../../../Images/Gallery/g-2.jpg";
import g3 from "./../../../Images/Gallery/g-3.jpg";
import g4 from "./../../../Images/Gallery/g-4.jpg";
import g5 from "./../../../Images/Gallery/g-5.jpg";
import g6 from "./../../../Images/Gallery/g-6.jpg";
import g7 from "./../../../Images/Gallery/g-7.jpg";
import g8 from "./../../../Images/Gallery/g-8.jpg";


const Gallery = () => {
  return (
    <div className="gallery my-5">
      <div className="">
        <div className="title">
          <h4 className="sub-heading">Ours Gallery</h4>
        </div>
        <div class="box-container">
          <div class="box">
            <img src={g1} alt="" />
            <div class="content">
              <h3 className="color-pink text-uppercase">amazing places</h3>
              <p>
              The most amazing views of Nevada can’t be found on the Las Vegas Strip. According to Only In Your State!
              </p>
              <a href="/" class="btn btn-travel">
                {" "}
                see more
              </a>
            </div>
          </div>
          <div class="box">
            <img src={g2} alt="" />
            <div class="content">
              <h3 className="color-pink text-uppercase">amazing places</h3>
              <p>
              When you're traveling, a pair of comfortable yet stylish sneakers can take you just about anywhere!
              </p>
              <a href="/" class="btn btn-travel">
                {" "}
                see more
              </a>
            </div>
          </div>
          <div class="box">
            <img src={g3} alt="" />
            <div class="content">
              <h3 className="color-pink text-uppercase">amazing places</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente, soluta!
              </p>
              <a href="/" class="btn btn-travel">
                {" "}
                see more
              </a>
            </div>
          </div>
          <div class="box">
            <img src={g4} alt="" />
            <div class="content">
              <h3 className="color-pink text-uppercase">amazing places</h3>
              <p>
              Ladies and gentlemen, have we got an experience for you! The My Old Kentucky Dinner Train is a fine!
              </p>
              <a href="/" class="btn btn-travel">
                {" "}
                see more
              </a>
            </div>
          </div>
          <div class="box">
            <img src={g5} alt="" />
            <div class="content">
              <h3 className="color-pink text-uppercase">amazing places</h3>
              <p>
              Ladies, if you’ve been in the market for a new pair of comfortable boots, you’re in lucky!
              </p>
              <a href="/" class="btn btn-travel">
                {" "}
                see more
              </a>
            </div>
          </div>
          <div class="box">
            <img src={g6} alt="" />
            <div class="content">
              <h3 className="color-pink text-uppercase">amazing places</h3>
              <p>
              Want to live like you're royalty in the Bluegrass State? Set your sights—and vacation plans—on!
              </p>
              <a href="/" class="btn btn-travel">
                {" "}
                see more
              </a>
            </div>
          </div>
          <div class="box">
            <img src={g7} alt="" />
            <div class="content">
              <h3 className="color-pink text-uppercase">amazing places</h3>
              <p>
              This article was originally published on BusinessInsider.com. The CEO of the second-largest airline!
              </p>
              <a href="/" class="btn btn-travel">
                {" "}
                see more
              </a>
            </div>
          </div>
          <div class="box">
            <img src={g8} alt="" />
            <div class="content">
              <h3 className="color-pink text-uppercase">amazing places</h3>
              <p>
              should ask permission when they recline their seat. Delta CEO Ed Bastian said in an interview!
              </p>
              <a href="/" class="btn btn-travel">
                {" "}
                see more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
