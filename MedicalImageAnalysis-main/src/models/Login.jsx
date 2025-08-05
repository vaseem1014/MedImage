import React, { useState } from "react";
import {
  signInWithEmailLink,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
} from "firebase/auth";
import { auth } from "../firebaseConfig";

const Login = ({ closeForm }) => {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const sendOtp = async () => {
    try {
      const actionCodeSettings = {
        url: window.location.href,
        handleCodeInApp: true,
      };

      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem("emailForSignIn", email);
      setOtpSent(true);
      alert("OTP sent to your email. Please check your inbox.");
    } catch (error) {
      alert("Error sending OTP: " + error.message);
    }
  };

  const verifyOtp = async () => {
    try {
      const emailForSignIn = window.localStorage.getItem("emailForSignIn");
  
      if (isSignInWithEmailLink(auth, window.location.href)) {
        await signInWithEmailLink(auth, emailForSignIn, window.location.href);
        window.localStorage.removeItem("emailForSignIn");

        window.localStorage.setItem("isLoggedIn", "true");
  
        alert("Login successful!");
        closeForm();
      }
    } catch (error) {
      alert("Invalid OTP: " + error.message);
    }
  };
  

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="popup-form absolute mt-12 text-black">
        <form className="w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl">
          <h1 className="text-4xl font-semibold text-center text-backgroundColor">
            {otpSent ? "Check Email" : "Login"}
          </h1>

          {!otpSent ? (
            <div className="flex flex-col">
              <input
                className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="button"
                className="bg-backgroundColor text-white px-4 py-2 rounded-lg mt-3"
                onClick={sendOtp}
              >
                Send OTP
              </button>
            </div>
          ) : (
            <div className="flex flex-col">
              <p className="text-sm text-gray-600 text-center">
                Please check your email and click the link to log in.
              </p>
              <button
                type="button"
                className="bg-backgroundColor text-white px-4 py-2 rounded-lg mt-3"
                onClick={verifyOtp}
              >
                Verify Login
              </button>
            </div>
          )}

          <button
            className="bg-gray-500 text-white px-10 rounded-md active:bg-gray-700"
            onClick={closeForm}
          >
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
