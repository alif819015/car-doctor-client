import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2'

const BookService = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const {_id, title, price, img } = service;
  console.log(service);

  const handleBookService = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const booking = {
      customerName: name,
      date,
      email,
      img,
      service: title,
      service_id: _id,
      price: price
    };
    console.log(booking);

    fetch('https://car-doctor-seven.vercel.app/bookings',{
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.insertedId){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your Order has been Submitted',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  };

  return (
    <div>
      <h1>Checkout: {title}</h1>
      <form onSubmit={handleBookService}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              defaultValue={user?.displayName}
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              defaultValue={user?.email}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Deu Amount</span>
            </label>
            <input
              type="text"
              name="price"
              defaultValue={"$" + price}
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-primary btn-block"
            type="submit"
            value="Order Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default BookService;
