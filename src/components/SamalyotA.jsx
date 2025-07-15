import React from "react";

function SamalyotA({ text, par, imgName, nom }) {
  return (
    <div className={`row align-items-center justify-content-between ${nom}`}>
      <div className="col-lg-6 col-12">
        <img className="img-fluid mt-5" src={imgName} alt="" />
      </div>
      <div className="col-lg-5 col-12 ">
        <div class="private">
          <h3>{text}</h3>
          <p className="coll">{par}</p>
        </div>
      </div>
    </div>
  );
}

export default SamalyotA;
