import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { auth } from "../firebaseConfig";
import { signOut, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import Login from "../models/Login"; // Ensure this file is updated for Firebase

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [user, setUser] = useState(null);

  const handleMenuToggle = () => setMenu(!menu);
  const closeMenu = () => setMenu(false);

  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };

  const closeForm = () => setShowForm(false);

  // Function to logout the user
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      alert("Logged out successfully!");
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };

  return (
    <div className="fixed w-full z-10 text-white">
      <div className="flex justify-between p-5 md:px-32 px-5 bg-backgroundColor shadow-md">
        {/* Logo */}
        <div className="cursor-pointer">
          <Link to="home" spy={true} smooth={true} duration={500}>
            <h1 className="text-2xl font-semibold">MedImage🫁</h1>
          </Link>
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden lg:flex items-center text-lg font-medium gap-8">
          <Link to="home" spy smooth duration={500} className="hover:text-hoverColor cursor-pointer">Home</Link>
          <Link to="about" spy smooth duration={500} className="hover:text-hoverColor cursor-pointer">About Us</Link>
          <Link to="services" spy smooth duration={500} className="hover:text-hoverColor cursor-pointer">Services</Link>
          <Link to="doctors" spy smooth duration={500} className="hover:text-hoverColor cursor-pointer">Testimonials</Link>
          <Link to="blog" spy smooth duration={500} className="hover:text-hoverColor cursor-pointer">FAQ's</Link>
        </nav>

        {/* Login/Logout Button */}
        <div className="hidden lg:flex">
          {user ? (
            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <button className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor" onClick={openForm}>
              Login
            </button>
          )}
        </div>

        {/* Show Login Form if open */}
        {showForm && <Login closeForm={closeForm} setUser={setUser} />}

        {/* Mobile Menu Icon */}
        <div className="lg:hidden flex items-center">
          {menu ? <AiOutlineClose size={28} onClick={handleMenuToggle} /> : <AiOutlineMenu size={28} onClick={handleMenuToggle} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden flex flex-col absolute bg-backgroundColor text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full transition-transform ${menu ? "translate-x-0" : "-translate-x-full"}`}>
        <Link to="home" spy smooth duration={500} className="hover:text-hoverColor cursor-pointer" onClick={closeMenu}>Home</Link>
        <Link to="about" spy smooth duration={500} className="hover:text-hoverColor cursor-pointer" onClick={closeMenu}>About Us</Link>
        <Link to="services" spy smooth duration={500} className="hover:text-hoverColor cursor-pointer" onClick={closeMenu}>Services</Link>
        <Link to="doctors" spy smooth duration={500} className="hover:text-hoverColor cursor-pointer" onClick={closeMenu}>Doctors</Link>
        <Link to="blog" spy smooth duration={500} className="hover:text-hoverColor cursor-pointer" onClick={closeMenu}>Blog</Link>

        {/* Mobile Login Button */}
        <div className="lg:hidden">
          {user ? (
            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <button className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor" onClick={openForm}>
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
