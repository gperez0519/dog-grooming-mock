import React from "react";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main>
      <div className="main-image flex items-center justify-center object-fill">
        <div className="p-5 m-5 bg-red-400 rounded-xl main-text">
          <div className="text-white text-2xl md:text-4xl transition-all text-center">
            WE ARE WOOF DOG GROOMING!
          </div>
        </div>
      </div>
      <div className="p-5">
        <Services />
        <div className="mt-4">
          <Testimonials />
        </div>
      </div>
    </main>
  );
}
