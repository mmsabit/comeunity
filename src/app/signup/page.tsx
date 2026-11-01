"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { MdCheckCircle, MdCancel } from "react-icons/md";
import { toast, Bounce } from "react-toastify";

const SignUpPage = () => {
  const [password, setPassword] = useState("");

  const rules = [
    { label: "Minimum 8 characters", met: password.length >= 8 },
    { label: "One uppercase letter (A–Z)", met: /[A-Z]/.test(password) },
    { label: "One number (0–9)", met: /[0-9]/.test(password) },
    {
      label: "One special character (!@#$…)",
      met: /[^A-Za-z0-9]/.test(password),
    },
  ];

  const allValid = rules.every((r) => r.met);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (allValid) {
      const formData = new FormData(e.currentTarget);
      const user = Object.fromEntries(formData.entries()) as Record<
        string,
        string
      >;
      const { data, error } = await authClient.signUp.email({
        name: user.user_name,
        email: user.user_email,
        password: user.user_password,
        image: user.user_photo,
        callbackURL: "/",
      });

      if (data) {
        toast.success("Successfully signed up!", {
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
        redirect("/");
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
    toast.error("Please enter valid information", {
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
  };

  const [showPassword, setShowpassword] = useState(false);

  const handleShow = () => {
    setShowpassword(!showPassword);
  };

  const GoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });

    if (data) {
      toast.success("Successfully signed up with Google", {
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
  };

  return (
    <div className="max-w-7xl mx-auto my-20">
      <div className="flex flex-col h-[90vh] items-center justify-center">
        <div className="border-base-300 rounded-box w-120 border p-6 bg-white shadow-sm">
          <h2 className="text-center text-2xl font-semibold mb-2">
            Create your account
          </h2>
          <p className="text-center text-[12px] mb-4">
            Choose how you would like to participate and get fully registered in
            under two minutes.
          </p>
          <button className="btn bg-white text-black border-[#e5e5e5] w-full" onClick={GoogleSignIn}>
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff" />
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                />
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                />
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                />
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                />
              </g>
            </svg>
            Sign Up with Google
          </button>
          <div className="text-xs flex gap-2 items-center justify-center my-4">
            <hr className="border border-base-300 w-3/10" />
            <span className="w-4/10 text-center">OR SIGN IN WITH EMAIL</span>
            <hr className="border border-base-300 w-3/10" />
          </div>
          <form onSubmit={handleSubmit}>
            <fieldset className="fieldset">
              <label className="text-sm">Name</label>
              <input
                type="text"
                className="input mb-2 w-full"
                placeholder="Full name"
                name="user_name"
                required
              />

              <label className="text-sm">Email</label>
              <input
                type="email"
                className="input mb-2 w-full"
                placeholder="Email"
                name="user_email"
                required
              />

              <label className="text-sm">Profile Photo</label>
              <input
                type="url"
                className="input mb-2 w-full"
                placeholder="Your Image URL"
                name="user_photo"
                required
              />
              <div className="relative">
                <label className="text-sm">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  className={`input mb-1 w-full transition-colors  ${
                    password.length === 0
                      ? ""
                      : allValid
                        ? "border-green-500 focus:border-green-500"
                        : "border-rose-400 focus:border-rose-400"
                  }`}
                  placeholder="Password"
                  value={password}
                  name="user_password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
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

              {/* Live Password Validation Rules */}
              {
                <ul className="mb-3 mt-1 space-y-1 rounded-lg bg-slate-50 border border-slate-200 p-3">
                  {rules.map((rule) => (
                    <li
                      key={rule.label}
                      className="flex items-center gap-2 text-xs"
                    >
                      {rule.met ? (
                        <MdCheckCircle className="text-green-500 text-[15px] shrink-0" />
                      ) : (
                        <MdCancel className="text-rose-400 text-[15px] shrink-0" />
                      )}
                      <span
                        className={
                          rule.met ? "text-green-700" : "text-slate-500"
                        }
                      >
                        {rule.label}
                      </span>
                    </li>
                  ))}
                </ul>
              }

              <button className="btn btn-primary mt-4" type="submit">
                Sign up
              </button>
            </fieldset>
          </form>
          <div className="my-5 text-center">
            <p className="text-sm">
              Already have an Account?
              <Link
                href={"/signin"}
                className="font-semibold text-primary ms-1 hover:underline"
              >
                Sign in
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
