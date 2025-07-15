import React from "react";
import SamalyotA from "./SamalyotA";

function Samalyot() {
  return (
    <div className="samalyot">
      <div className="container">
        <h3 className="text-center fw-bold mb-5">
          Private Jet for Business & Leisure Purposes
        </h3>
        <SamalyotA
          imgName="./img/samalyot.png"
          text="Private Jet Charter"
          nom="flex-row"
          par="   It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors"
        />
        <div className="col-12 flex-reverse">
          <SamalyotA
            text="Business Jet Charter"
            par="   It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors"
            imgName="./img/busines.png"
            nom="flex-row-reverse"
          />
        </div>
      </div>
    </div>
  );
}

export default Samalyot;
