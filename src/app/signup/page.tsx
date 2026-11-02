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
      return;
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
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-card p-8 sm:p-10">
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Create your account
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-500">
              Choose how you would like to participate and get fully registered in under two minutes.
            </p>
          </div>

          <button
            className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-slate-200 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm transition-all shadow-xs cursor-pointer"
            onClick={GoogleSignIn}
            type="button"
          >
            <svg
              aria-label="Google logo"
              width="18"
              height="18"
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
            <span>Sign Up with Google</span>
          </button>

          <div className="text-xs flex gap-2 items-center justify-center my-6 text-slate-400 font-medium">
            <hr className="border-slate-200 flex-1" />
            <span className="px-2">OR SIGN IN WITH EMAIL</span>
            <hr className="border-slate-200 flex-1" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2.5 text-sm text-slate-800 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 transition-all"
                placeholder="Full name"
                name="user_name"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2.5 text-sm text-slate-800 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 transition-all"
                placeholder="Email"
                name="user_email"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                Profile Photo
              </label>
              <input
                type="url"
                className="w-full px-4 py-2.5 text-sm text-slate-800 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 transition-all"
                placeholder="Your Image URL"
                name="user_photo"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className={`w-full px-4 py-2.5 text-sm text-slate-800 bg-white border rounded-xl focus:outline-none transition-all ${
                    password.length === 0
                      ? "border-slate-200 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20"
                      : allValid
                        ? "border-emerald-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                        : "border-rose-400 focus:border-rose-400 focus:ring-2 focus:ring-rose-400/20"
                  }`}
                  placeholder="Password"
                  value={password}
                  name="user_password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                  onClick={handleShow}
                  type="button"
                >
                  {showPassword ? (
                    <FaEyeSlash size={16} />
                  ) : (
                    <FaEye size={16} />
                  )}
                </button>
              </div>
            </div>

            {/* Live Password Validation Rules */}
            <ul className="space-y-1.5 rounded-xl bg-slate-50 border border-slate-200/80 p-3.5">
              {rules.map((rule) => (
                <li
                  key={rule.label}
                  className="flex items-center gap-2 text-xs"
                >
                  {rule.met ? (
                    <MdCheckCircle className="text-emerald-500 text-sm shrink-0" />
                  ) : (
                    <MdCancel className="text-rose-400 text-sm shrink-0" />
                  )}
                  <span
                    className={
                      rule.met ? "text-emerald-700 font-medium" : "text-slate-500"
                    }
                  >
                    {rule.label}
                  </span>
                </li>
              ))}
            </ul>

            <button
              className="w-full mt-2 py-3.5 px-6 rounded-xl bg-linear-to-r from-brand-600 to-indigo-600 hover:from-brand-700 hover:to-indigo-700 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
              type="submit"
            >
              Sign up
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-slate-600">
            <p>
              Already have an Account?{" "}
              <Link
                href="/signin"
                className="font-semibold text-brand-600 hover:text-brand-700 hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
