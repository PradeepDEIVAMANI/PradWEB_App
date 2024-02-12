import React from 'react';
import frontImg from './fend.jpg';
import fullImg from './fs.jpg';
import codingImg from './cp.jpg';
import portImg from './pp.png';

const ContainerComponent = () => {
  return (
    <div className="text-center py-8">
      <h1 className="text-3xl font-bold bg-yellow-300 inline-block px-4 py-2 rounded-lg mb-8">Explore Projects</h1>
      <div className="flex justify-center">
        <div className="max-w-xs mx-2">
          <img src={frontImg} alt="Image 1" className="w-full" />
          <p className="text-center">Description 1</p>
          <button className="bg-yellow-300 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded-full block mx-auto mt-2">Button 1</button>
        </div>
        <div className="max-w-xs mx-2">
          <img src={fullImg} alt="Image 2" className="w-full" />
          <p className="text-center">Description 2</p>
          <button className="bg-yellow-300 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded-full block mx-auto mt-2">Button 2</button>
        </div>
        <div className="max-w-xs mx-2">
          <img src={codingImg} alt="Image 3" className="w-full" />
          <p className="text-center">Description 3</p>
          <button className="bg-yellow-300 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded-full block mx-auto mt-2">Button 3</button>
        </div>
        <div className="max-w-xs mx-2">
          <img src={portImg} alt="Image 4" className="w-full" />
          <p className="text-center">Description 4</p>
          <button className="bg-yellow-300 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded-full block mx-auto mt-2">Button 4</button>
        </div>
      </div>
    </div>
  );
};

export default ContainerComponent;
