import React from 'react';
import banImg from './banner.jpg';
import ban2Img from './bann2.jpg';
import ban3Img from './sf.jpg';

const Banner = () => {
  return (
    <div className="text-center py-8">
      <h1 className="text-3xl font-bold bg-yellow-300 inline-block px-4 py-2 rounded-lg mb-8">Highlighted Heading</h1>
      <div className="flex justify-center">
      <div className="max-w-xs mx-2 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
          <img src={banImg} alt="Banner" className="w-full mb-4" />
          <div className="px-6 py-4">
            <h2 className="text-xl font-bold mb-2">Banner Heading</h2>
            <p className="text-gray-700 text-base mb-4">Banner Description</p>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">Explore</button>
          </div>
        </div>
        
        <div className="max-w-xs mx-2 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
          <img src={ban2Img} alt="Banner" className="w-full mb-4" />
          <div className="px-6 py-4">
            <h2 className="text-xl font-bold mb-2">Banner Heading</h2>
            <p className="text-gray-700 text-base mb-4">Banner Description</p>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">Explore</button>
          </div>
        </div>
        <div className="max-w-xs mx-2 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
          <img src={ban3Img} alt="Banner" className="w-full mb-4" />
          <div className="px-6 py-4">
            <h2 className="text-xl font-bold mb-2">Banner Heading</h2>
            <p className="text-gray-700 text-base mb-4">Banner Description</p>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">Explore</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
