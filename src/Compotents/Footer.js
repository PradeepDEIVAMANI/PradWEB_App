
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-500 text-white p-4 text-center">
      <div className="flex justify-center mb-4">
        <a href="https://instagram.com/pradweb" className="mx-2">
          <i className="fab fa-instagram text-xl"></i>
        </a>
        <a href="https://github.com/pradweb" className="mx-2">
          <i className="fab fa-github text-xl"></i>
        </a>
        <a href="https://youtube.com/pradweb" className="mx-2">
          <i className="fab fa-youtube text-xl"></i>
        </a>
      </div>
      <p>@pradweb</p>
      <p>&copy; {new Date().getFullYear()} Your Website</p>
    </footer>
  );
};

export default Footer;
