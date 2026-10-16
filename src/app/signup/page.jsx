"use client";

import React, { useState } from "react";
import Link from "next/link";
import { signUp } from "@/lib/auth-client";
import { Eye, EyeSlash, Envelope, Lock, Person } from "@gravity-ui/icons";

export default function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const toggleVisibility = () => setIsVisible(!isVisible);
  // Handle Email & Password Registration via Better Auth
  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    
    console.log(name, email, password);
    try {
      await signUp.email({
        email,
        password,
        name,
        callbackURL: "/dashboard",
      });
    } catch (err) {
      setErrorMsg(
        err?.message || "Failed to create account. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  // Handle Social Authentication (Google / GitHub) via Better Auth
  const handleSocialSignUp = async (provider) => {
    try {
      await signUp.social({
        provider,
        callbackURL: "/dashboard",
      });
    } catch (err) {
      setErrorMsg(`Failed to authenticate with ${provider}.`);
    }
  };

  return (
    <div className="min-h-screen bg-[#1b1c1e] text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#242528] border border-white/10 shadow-2xl p-6 sm:p-8 rounded-2xl flex flex-col gap-6">
        {/* Header Section */}
        <div className="flex flex-col gap-1 items-center text-center">
          <Link
            href="/"
            className="flex items-center text-3xl font-bold tracking-tight mb-2 select-none"
          >
            <span className="text-[#0088ff]">hire</span>
            <span className="text-[#ff6b00]">loop</span>
          </Link>
          <h1 className="text-xl font-semibold text-white">
            Create an account
          </h1>
          <p className="text-sm text-gray-400">
            Join Hireloop to kickstart your career
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-5">
          {/* Social Auth Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => handleSocialSignUp("google")}
              className="w-full bg-[#111214] text-gray-200 hover:bg-white/10 border border-white/10 font-medium py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-sm transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.29v3.15C3.26 21.3 7.31 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.61H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.39l3.99-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.61l3.99 3.15c.95-2.85 3.6-4.96 6.72-4.96z"
                />
              </svg>
              Google
            </button>
            <button
              type="button"
              onClick={() => handleSocialSignUp("github")}
              className="w-full bg-[#111214] text-gray-200 hover:bg-white/10 border border-white/10 font-medium py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-sm transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </button>
          </div>

          {/* HTML5 + Tailwind Divider */}
          <div className="flex items-center gap-3 my-1">
            <div className="flex-1 h-[1px] bg-gray-700/60" />
            <span className="text-xs text-gray-400 uppercase tracking-wider">
              Or continue with
            </span>
            <div className="flex-1 h-[1px] bg-gray-700/60" />
          </div>

          {/* Error Alert */}
          {errorMsg && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-xs p-3 rounded-lg text-center">
              {errorMsg}
            </div>
          )}

          {/* Registration Form */}
          <form onSubmit={handleSignUp} className="flex flex-col gap-4">
            {/* Name Input */}
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-300 text-xs font-medium">
                Full Name
              </label>
              <div className="relative flex items-center">
                <Person
                  className="absolute left-3 text-gray-400 pointer-events-none"
                  width={18}
                  height={18}
                />
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-[#111214] border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-[#5a50fe] transition-colors"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-300 text-xs font-medium">
                Email Address
              </label>
              <div className="relative flex items-center">
                <Envelope
                  className="absolute left-3 text-gray-400 pointer-events-none"
                  width={18}
                  height={18}
                />
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-[#111214] border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-[#5a50fe] transition-colors"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="flex flex-col gap-1.5">
              <label className="text-gray-300 text-xs font-medium">
                Password
              </label>
              <div className="relative flex items-center">
                <Lock
                  className="absolute left-3 text-gray-400 pointer-events-none"
                  width={18}
                  height={18}
                />
                <input
                  type={isVisible ? "text" : "password"}
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-[#111214] border border-white/10 rounded-xl py-2.5 pl-10 pr-10 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-[#5a50fe] transition-colors"
                />
                <button
                  type="button"
                  onClick={toggleVisibility}
                  className="absolute right-3 focus:outline-none text-gray-400 hover:text-white"
                >
                  {isVisible ? (
                    <EyeSlash width={18} height={18} />
                  ) : (
                    <Eye width={18} height={18} />
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#5a50fe] to-[#6b62ff] text-white font-medium py-2.5 rounded-xl text-sm shadow-md hover:opacity-90 transition-opacity mt-2 disabled:opacity-50"
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </button>
          </form>

          {/* Footer Link */}
          <p className="text-center text-xs text-gray-400 mt-1">
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="text-[#8f92ff] hover:text-[#a8abff] font-medium transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
