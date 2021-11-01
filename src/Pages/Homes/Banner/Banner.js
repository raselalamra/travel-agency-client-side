import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div class="banner">
      <div class="clouds">
        <div className="container">
          <div className="row py-5">
            <div className="col-lg-12">
              <div class="input-group mb-3 my-5 py-5 w-50 mx-auto">
                <input
                  type="text"
                  class="form-control fs-3"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <span
                  class="input-group-text btn btn-travel fw-bold"
                  id="basic-addon2"
                >
                  Search Tour
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
