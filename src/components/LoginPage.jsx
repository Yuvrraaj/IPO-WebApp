import { GoogleLogin } from "@react-oauth/google";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/Logo.png";

const LoginPage = () => {
  const [recaptchaVerified, setRecaptchaVerified] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  // Validation functions remain the same
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return "Email is required";
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    return "";
  };

  const validatePassword = (password) => {
    if (!password) return "Password is required";
    if (password.length < 6) return "Password must be at least 6 characters long";
    return "";
  };

  // Event handlers remain the same
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (touched[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: name === "email" ? validateEmail(value) : validatePassword(value),
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: name === "email" ? validateEmail(value) : validatePassword(value),
    }));
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaVerified(!!value);
  };

  const handleGoogleSuccess = (credentialResponse) => {
    alert("Google Sign-In Successful!");
  };

  const handleGoogleError = () => {
    alert("Google Sign-In Failed. Please try again.");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);
    
    setErrors({
      email: emailError,
      password: passwordError,
    });

    setTouched({
      email: true,
      password: true,
    });

    if (emailError || passwordError) {
      return;
    }

    if (!recaptchaVerified) {
      alert("Please complete the reCAPTCHA first.");
      return;
    }

    alert("Login Successful!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="w-full max-w-md bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md">
        <div className="text-center mb-4 sm:mb-6">
          <img 
            src={logo} 
            alt="Bluestock Logo" 
            className="mx-auto h-8 sm:h-10 md:h-12"
          />
        </div>

        <form onSubmit={handleLogin} noValidate className="space-y-4 sm:space-y-6">
          <div>
            <label className="block mb-1 sm:mb-2 text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder="Enter your email"
              className={`w-full px-3 sm:px-4 py-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email && touched.email ? 'border-red-500' : ''
              }`}
            />
            {errors.email && touched.email && (
              <p className="mt-1 text-red-500 text-xs sm:text-sm">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 sm:mb-2 text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                onBlur={handleBlur}
                placeholder="Enter your password"
                className={`w-full px-3 sm:px-4 py-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.password && touched.password ? 'border-red-500' : ''
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 text-gray-500 focus:outline-none hover:text-gray-700"
              >
                <FontAwesomeIcon 
                  icon={showPassword ? faEyeSlash : faEye} 
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
              </button>
            </div>
            {errors.password && touched.password && (
              <p className="mt-1 text-red-500 text-xs sm:text-sm">{errors.password}</p>
            )}
            <div className="text-right mt-1 sm:mt-2">
              <a href="/forgot-password" className="text-xs sm:text-sm text-blue-500 hover:underline">
                Forgot Password?
              </a>
            </div>
          </div>

          <div className="transform scale-90 sm:scale-100 origin-left">
            <ReCAPTCHA
              sitekey="6LfI8LQqAAAAAA17-QJ-HjIrrjYBUo46Kc7bztIN"
              onChange={handleRecaptchaChange}
            />
          </div>

          <div className="flex items-center">
            <input type="checkbox" id="keepSignedIn" className="mr-2 h-4 w-4" />
            <label htmlFor="keepSignedIn" className="text-xs sm:text-sm text-gray-700">
              Keep me signed in
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-2 sm:py-2.5 text-sm sm:text-base text-white bg-blue-500 rounded-md hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors duration-200"
            disabled={!formData.email || !formData.password || !recaptchaVerified}
          >
            Login
          </button>
        </form>

        <div className="my-4 sm:my-6 text-center text-xs sm:text-sm text-gray-500">
          or sign in with
        </div>

        <div className="flex justify-center transform scale-90 sm:scale-100 origin-center">
          <GoogleLogin 
            onSuccess={handleGoogleSuccess} 
            onError={handleGoogleError}
          />
        </div>

        <p className="mt-4 text-center text-xs sm:text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;