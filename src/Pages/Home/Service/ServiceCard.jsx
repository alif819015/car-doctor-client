import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, img, title, price } = service;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-orange-400 font-semibold">price: ${price}</p>
          <div className="card-actions flex justify-between">
            <Link to={`/book/${_id}`}>
            <button className="btn btn-primary ">Buy Now</button>
            </Link>
            <button className="btn btn-circle btn-outline text-red-600">
              <FaArrowRight></FaArrowRight>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
