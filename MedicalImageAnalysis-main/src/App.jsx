import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Doctors";
import FAQResources from "./components/Blogs";
import Footer from "./components/Footer";
import DiagnosePage from "./components/Diagnose";
import ChatFab from "./components/ChatFab";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <main>
              <div id="home">
                <Home />
              </div>
              <div id="about">
                <About />
              </div>
              <div id="services">
                <Services />
              </div>
              <div id="doctors">
                <Testimonials />
              </div>
              <div id="blog">
                <FAQResources />
              </div>
            </main>
          }
        />
        <Route path="/diagnose" element={<DiagnosePage />} />
      </Routes>
      <ChatFab />
      <Footer />
    </>
  );
};

export default App;
