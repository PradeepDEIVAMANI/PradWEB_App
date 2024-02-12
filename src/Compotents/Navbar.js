import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-500">
      
      <ul className="flex justify-end space-x-4 py-4 px-6">
      <ul className="text-white">@PradWEB</ul>
        <li><a href="#" className="text-white">Home</a></li>
        <li><a href="#" className="text-white">Contact</a></li>
        <li><a href="#" className="text-white">Projects</a></li>
        <li><a href="#" className="text-white">Prices</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
