import React from "react";

function  PageNotFoundComponent(){
  return (
    <div>
        <div className="d-flex align-items-center justify-content-center vh-100 flex-column">
          <p style={{ color: "red", fontSize: "30px" }}>Oops page not Found</p>
          <h1 style={{ color: "red", fontSize: "100px" }}>404</h1>
      </div>
    </div>
  );
};

export default PageNotFoundComponent;
