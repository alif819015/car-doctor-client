import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
    const {createUser} = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email,password)
        .then(result =>{
            const loged = result.user;
            console.log(loged);
        })
        .catch(error =>{
            console.log(error);
        })
      };
    
      return (
        <div>
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col gap-16 lg:flex-row">
              <div className="text-center lg:text-left w-1/2">
                <img src={img} alt="" />
              </div>
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                  <h1 className="text-4xl font-bold text-center">Register now!</h1>
                  <form onSubmit={handleRegister}>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="name"
                        className="input input-bordered"
                        required
                      />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        type="text"
                        name="email"
                        placeholder="email"
                        className="input input-bordered"
                        required
                      />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input
                        type="text"
                        name="password"
                        placeholder="password"
                        className="input input-bordered"
                        required
                      />
                      <label className="label">
                        <a href="#" className="label-text-alt link link-hover">
                          Forgot password?
                        </a>
                      </label>
                    </div>
                    <div className="form-control mt-6">
                      <input
                        className="btn btn-primary"
                        type="submit"
                        value="Register"
                      />
                    </div>
                  </form>
                  <p className="text-center">Or Sign In with</p>
    
                  <p className="font-bold text-center">
                    Already Have an Account{" "}
                    <Link className="text-orange-400" to="/login">
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
export default Register;