import React from 'react';

const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="footerWrapper d-flex flex-column justify-center m-auto w-100">
          <p>&copy; Copyright 2018.</p>
          <p>All right reserved</p>
          <p>Powered by</p>

          <i className="fab fa-react"></i>

        </div>
      </div>
    </div>
  );
};

export default Footer;
