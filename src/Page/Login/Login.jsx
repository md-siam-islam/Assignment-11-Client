import { useContext, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";

import animation from "../../../src/assets/Animation_image/Animation - 1734200574345.json";
import Lottie from "lottie-react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Authcontext } from "../../Components/Home/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { Login, setUser, googleLogin } = useContext(Authcontext);
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;


    Login(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        event.target.reset();
        navigate(location.state || "/");
        return toast.success("Login Successfull");
      })

      .catch((error) => {
        const errorMessage =
          error.message || "Something went wrong. Please try again.";
        return toast.error(errorMessage);
      });
  };

  const handlesignin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        setUser(user);
        if (user?.email) {
          navigate("/");
        }
        return toast.success("Login with Google Successfull");
      })
      .catch((error) => {
        const errorMessage = error.message;
        return toast.error(errorMessage);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="">
      <Helmet>
        <title>Login Page</title>
      </Helmet>
      <Navbar></Navbar>

      <div className="w-11/12 mx-auto flex justify-center items-center lg:flex-row flex-col my-14">
        <div className="min-h-screen w-full">
          <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
            <h1 className="font-semibold text-2xl text-center">
              Login Your Account
            </h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter Your Email"
                    className="input input-bordered w-full"
                    required
                  />

                  <span
                    className="absolute right-3 top-3 text-gray-500 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <AiOutlineEyeInvisible className="w-6 h-6" />
                    ) : (
                      <AiOutlineEye className="w-6 h-6" />
                    )}
                  </span>
                </div>
              </div>

              <div className="form-control mt-6">
                <button className="btn bg-blue-500 text-white font-semibold">Login</button>
              </div>

              <div className="divider">OR</div>

              <div className="form-control mt-6 mb-4">
                <button onClick={handlesignin} className="btn btn-neutral">
                  {" "}
                  <img
                    className="h-8"
                    src="https://img.icons8.com/?size=48&id=V5cGWnc9R4xj&format=png"
                    alt=""
                  />
                  Login With Google
                </button>
              </div>

              <h1 className="font-semibold text-center">
                Don’t Have An Account?
                <Link to={"/signup"} className="text-blue-500">
                  {" "}
                  Register
                </Link>
              </h1>
            </form>
          </div>
        </div>

        <div className="">
          <Lottie className="" animationData={animation}></Lottie>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Login;
