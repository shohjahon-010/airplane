import React from 'react'
import LuxuryCard from './LuxuryCard'

function Luxury() {
  return (
    <div class="luxury">
  <div class="container">
    <div class="row">
      <LuxuryCard img="./img/avanti.png" text="Piaggio P.180 Avanti"/>
      <LuxuryCard img="./img/pila.png"   text="Pilatus PC-12"/>
      <LuxuryCard img="./img/piper.png"  text="piper pa27 aztec"/>
      <LuxuryCard img="./img/bech.png"   text="Beech BE100 King Air"/>
    </div>
  </div>
 </div>
  )
}

export default Luxury
