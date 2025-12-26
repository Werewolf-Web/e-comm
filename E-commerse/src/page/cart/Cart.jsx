import React from 'react'
import Track from '../../components/collect/Track'
import Buttonback from '../../components/button/Buttonback'

const Cart = () => {
  
  return (
    <>
    <div style={{marginBottom:"25px"}}>
      <Track title="Cart" name="cart" />
    </div>
        <Buttonback url="/products"/>
    <div>
      <div>

      </div>

    </div>
    </>
  )
}

export default Cart