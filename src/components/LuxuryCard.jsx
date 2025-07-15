import React from 'react'

function LuxuryCard({img,text}) {
  return (
    <div class="col-xl-3 col-sm-6 col-12 mt-5">
    <div class="avanti">
      <img class="img-fluid" src={img} alt=""/>
      <h5 className='text-center'>{text}</h5>
    </div>
  </div>
  )
}

export default LuxuryCard
