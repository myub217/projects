import React from "react";
import viteLogo from "../assets/vite.svg";

const Hero: React.FC = () => {
  return (
    <section
      className="hero min-h-screen bg-base-200 flex items-center"
      aria-label="Hero Section"
    >
      <div className="hero-content flex flex-col-reverse lg:flex-row-reverse container mx-auto px-4 py-12 gap-8">
        <img
          src={viteLogo}
          className="w-40 sm:w-60 lg:max-w-sm rounded-lg shadow-neon animate-pulse"
          alt="Vite Logo"
          loading="lazy"
        />
        <div className="text-center lg:text-left max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-primary animate-fade-in leading-tight">
            Welcome to <br className="hidden sm:block" />
            Applicationlubmobile
          </h1>
          <p className="mb-6 text-base sm:text-lg text-base-content/80 leading-relaxed">
            We provide modern mobile app solutions for your business
            using cutting-edge technology and synthwave design.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="btn btn-primary btn-lg" type="button">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;