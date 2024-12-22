import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

import animation from '../../../src/assets/Animation_image/Animation - 1734201487473.json'
import Lottie from 'lottie-react';
import { Authcontext } from '../../Components/Home/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {

    const [showPassword,setShowPassword] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }
    const {signUp,setUser,userInfo,googleLogin} = useContext(Authcontext)

    const handlesignup = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const photo = event.target.photo.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const tram = event.target.tram.checked;

      

        if(password.length<6){
            return toast.error("Password must be at least 6 characters long");
        }

        if(!tram){
            return toast.error("plase accept our condition");
        }

        const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if(!passwordPattern.test(password)){
        return toast.warn("Password is not strong enough.");
    }

        signUp(email,password)
        .then((userCredential) => {
            const user = userCredential.user
            userInfo({ displayName: name, photoURL: photo })
            setUser(user)
            event.target.reset();
            navigate(location.state ||"/")
           return toast.success("Registration successful!");
        })

        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message || "Something went wrong. Please try again.";
            return toast.error(errorMessage);
          });

        
    }

    const googlelogin = () => {
        googleLogin()
        googleLogin()
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setUser(user);
        navigate("/");
        return toast.success("Login with Google Successfull");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.customData.email;

        const credential = GoogleAuthProvider.credentialFromError(error);
        return toast.error(errorMessage);
      });
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="flex justify-center items-center my-20 flex-col lg:flex-row">
        <div className="min-h-screen flex justify-center items-center my-14 w-full">
          <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
            <h1 className="font-semibold text-2xl text-center">
              Register your account
            </h1>
            <form onSubmit={handlesignup} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter Your Photo URL"
                  className="input input-bordered"
                />
              </div>

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
              type={showPassword ? "text": 'password'}
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

              <div className="form-control">
                <label className="cursor-pointer label justify-start gap-3">
                  <input
                    type="checkbox"
                    name="tram"
                    className="checkbox checkbox-accent"
                  />
                  <span className="label-text">Remember me</span>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-warning">Sign up</button>
              </div>
              <div className="divider">OR</div>
              <div className="form-control mt-6 mb-4">
                <button onClick={googlelogin} className="btn btn-neutral">
                  {" "}
                  <img
                    className="h-8"
                    src="https://img.icons8.com/?size=48&id=V5cGWnc9R4xj&format=png"
                    alt=""
                  />
                  Sign up With Google
                </button>
              </div>
              <div>
                <h1 className="font-semibold">
                  Already Have An Account?{" "}
                  <Link to={"/login"} className="text-red-500">
                    Login
                  </Link>
                </h1>
              </div>
            </form>
          </div>
        </div>

        <div className="">
          <Lottie animationData={animation}></Lottie>
        </div>
      </div>
      <Footer></Footer>
        </div>
    );
};

export default Signup;