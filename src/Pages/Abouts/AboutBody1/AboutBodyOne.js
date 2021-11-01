import React from "react";
import aboutImg from "./../../../Images/About/about-3.jpg";
const AboutBodyOne = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12 my-5">
            <div className="title">
              <h4 className="sub-heading text-start">ABOUT TRAVIO</h4>
              <h1 className="heading ts-1 fw-bold w-75 text-start">
                 Best Travel Agency Company 1999.
              </h1>
              <p className="ts-4 text-gray">
              Travel, while rewarding, can also be stressful. With so many options for flights, hotels, and rental cars, and so many variables that can quickly go wrong, it’s all too easy for a relaxing vacation or a productive business trip to quickly become harrowing and unnecessarily expensive!!
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div>
              <img
                src={aboutImg}
                className="img-fluid my-5 p-4 shadow rounded "
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBodyOne;
