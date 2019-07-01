import React from 'react';

const currentYear = () => {
  const data = new Date();
  return data.getFullYear();
};
const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="footerWrapper d-flex flex-column justify-center m-auto w-100">
          <p>&copy; Copyright {currentYear()}</p>
          <p>All right reserved</p>
          <p>Powered by</p>

          <i className="fab fa-react" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
