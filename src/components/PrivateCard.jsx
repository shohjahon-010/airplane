import React from 'react'

function PrivateCard({text,para,img}) {
  return (
      <div class="mt-5">
        <div class="text-center pdd">
          <img class="img-fluid" src={img} alt=""/>
          <h5>{text}</h5>
          <p>{para}</p>
        </div>
      </div>
  )
}

export default PrivateCard
