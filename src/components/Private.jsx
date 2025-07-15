import React from "react";
import PrivateCard from "./PrivateCard";

function Private() {
  return (
    <div class="private">
      <div class="container">
        <div className="row align-items-center">
          <div className="col-xl-4">
            <PrivateCard
              text="Luxury And Comfort"
              para="It is a long established fact that a reader will be distracted by the readable"
              img="./img/kreslo.png"
            />
            <PrivateCard
              text="SAFETY AND SECURITY"
              para="It is a long established fact that a reader will be distracted by the readable"
              img="./img/safe.png"
            />
          </div>
          <div className="col-xl-4 d-flex justify-content-center">
            <img src="./img/plane-1.png" alt="" />
          </div>
          <div className="col-xl-4">
            <PrivateCard
              text="Personal schedule & booking"
              para="It is a long established fact that a reader will be distracted by the readable"
              img="./img/calendar.png"
            />
            <PrivateCard
              text="EXPERIENCED CREW"
              para="It is a long established fact that a reader will be distracted by the readable"
              img="./img/crew.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Private;
