import React from 'react';
import solarImg from '../assets/solarimg.jpeg';
import xyzAnimation from '../assets/xyz_animation.mp4';

const Welcome = ({ onStart }) => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[70vh] text-center p-6 bg-white rounded-lg shadow-md overflow-hidden">
      
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={xyzAnimation}
        autoPlay
        loop
        muted
        playsInline
      />
      
      <div className="absolute top-0 left-0 w-full h-full  bg-opacity-70 z-10" />
      <div className="relative z-20 flex flex-col items-center w-full">
        <h2 className="text-4xl font-bold mb-4 text-antiquewhite">Welcome to Solar Quotation</h2>
        <p className="text-lg mb-6 max-w-2xl text-antiquewhite">
          Discover the power of rooftop solar! Harness clean, renewable energy from the sun to reduce your electricity bills and carbon footprint. Our easy-to-use platform helps you generate a personalized quotation for your solar installation in just a few steps.
        </p>
  
        
        <button
          className="bg-cyan-700 hover:bg-cyan-900 text-white text-lg px-8 py-3 mt-2 rounded shadow transition-colors duration-200"
          onClick={onStart}
        >
          Get Your Solar Quotation
        </button>
      </div>
    </div>
  );
};

export default Welcome; 