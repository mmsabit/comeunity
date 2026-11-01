"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { toast, Bounce } from "react-toastify";

const SignInPage = () => {
  const [showPassword, setShowpassword] = useState(false);

  const handleShow = () => {
    setShowpassword(!showPassword);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries()) as Record<
      string,
      string
    >;

    const { data, error } = await authClient.signIn.email({
      email: user.user_email,
      password: user.user_password,
      callbackURL: "/",
      rememberMe: true,
    });

    if (data) {
      toast.success("Successfully signed in", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }

    if (error) {
      toast.error(error.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  }

  return (
    <div className="max-w-7xl mx-auto my-20">
      <div className="flex flex-col h-[90vh] items-center justify-center">
        <div className="border-base-300 rounded-box w-120 border p-6 bg-white shadow-sm">
          <h2 className="text-center text-2xl font-semibold mb-2">
            Sign in to your account
          </h2>
          <p className="text-center  text-[12px] mb-4">
            Manage your Social Event, coordinate projects, and Geather People.
          </p>
          <button className="btn bg-white text-black border-[#e5e5e5] w-full">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Sign in with Google
          </button>
          <div className="text-xs flex gap-2 items-center justify-center my-4">
            <hr className=" border border-base-300 w-3/10" />
            <span className="w-4/10 text-center">OR SIGN IN WITH EMAIL</span>
            <hr className=" border border-base-300 w-3/10" />
          </div>
          <form onSubmit={handleSubmit}>
            <fieldset className="fieldset ">
              <label className="text-sm">Email</label>
              <input
                type="email"
                className="input  mb-2 w-full"
                name="user_email"
                placeholder="Email"
              />
              <div className="relative">
                <label className="text-sm">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  className="input  w-full"
                  name="user_password"
                  placeholder="Password"
                />
                <button
                  className="absolute right-3 top-8 cursor-pointer"
                  onClick={handleShow}
                  type="button"
                >
                  {showPassword ? (
                    <FaEyeSlash size={17} />
                  ) : (
                    <FaEye size={17} />
                  )}
                </button>
              </div>
              <button className="btn btn-primary mt-4">Sign in</button>
            </fieldset>
          </form>
          <div className="my-5 text-center">
            <p className="text-sm">
              Don&apos;t have a Account yet?
              <Link
                href={"/signup"}
                className="font-semibold text-primary ms-1 hover:underline"
              >
                Create an Account
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
