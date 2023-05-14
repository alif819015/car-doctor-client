import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://car-doctor-seven.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  });
  return (
    <div className="mt-28">
      <div className="text-center">
        <p className="text-orange-400 font-semibold">Service</p>
        <h3 className="text-3xl font-bold">Our Service Area</h3>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="flex justify-center mt-12 mb-28">
      <button className="btn btn-outline btn-error font-bold">More Services</button>
      </div>
    </div>
  );
};

export default Service;
