import React from "react";

function MembershipCard({ text, price, nom }) {
  return (
    <div class="col-xl-4 col-12 text-center mt-5">
      <div className={'div fw-bold   ${nom} '}>
        <h3>{text}</h3>
        <h6 className="text-secondary mt-3 mb-4">What You’ll Get</h6>
        <p> <img src="./img/Vector.png" alt="" />One-time initiation fee $0</p>
        <p><img src="./img/Vector.png" alt="" />Deposit $50k</p>
        <p><img src="./img/Vector.png" alt="" />Pricing / rates  Dynamic</p>
        <p><img src="./img/Vector.png" alt="" />Priority fleet access Yes</p>
        <p><img src="./img/Vector.png" alt="" />Guaranteed fleet access No</p>
        <div className="div1"></div>
        <h5>
          {" "}
          <span className="fw-bold">${price}</span>/month
        </h5>
        <button className="btn py-2 px-5 btn-success buton">Choose</button>
      </div>
    </div>
  );
}

export default MembershipCard;
