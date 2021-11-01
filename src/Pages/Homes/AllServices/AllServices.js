import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const AllServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://cryptic-ridge-44622.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-5">
      <div className="title">
        <h4 className="sub-heading">See Our All Packages</h4>
      </div>
      <div className="container ">
        <div class="row row-cols-1 row-cols-md-3 g-4 my-5">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllServices;
