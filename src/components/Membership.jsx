import React from "react";
import MembershipCard from "./MembershipCard";

function Membership() {
  return (
    <div class="membership">
      <div class="container">
        <div class="row">
          <MembershipCard text="Popular" price="250" />

          <MembershipCard text="Business" price="480" nom="mb-4" />

          <MembershipCard text="Elite" price="680" />
        </div>
      </div>
    </div>
  );
}

export default Membership;
