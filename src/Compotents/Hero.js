import React from 'react';
import heroImage from './logo.png'; // Import your hero image

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between bg-white-600 py-16 px-8">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img src={heroImage} alt="Hero" className=" md:w-medium h-auto rounded-lg shadow-lg"/>
      </div>
      <div className="md:w-1/2 md:pl-8 text-black">
        <h1 className="text-4xl font-bold mb-4">Welcome to our website</h1>
        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget fermentum nisl. Donec id lectus sit amet justo volutpat eleifend at in nisi.</p>
      </div>
    </div>
  );
}

export default Hero;
