import React from "react";


const Error = () => {
  return(
    <div className="alert alert-warning mb-0 py-5 " role="alert" style={{textAlign:"center" }}>
      <h4 className="alert-heading">Error! Path does not exist :-( </h4>
      <hr />
      <p className="mb-0 mt-0">Please use menu above to navigate back to Application :) </p>
    </div>
  );
};

export default Error;
