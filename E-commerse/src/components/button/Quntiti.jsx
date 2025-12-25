import React from 'react'

const Quntiti = (props) => {
  return (
   <div className="d-flex align-items-center gap-3 mt-3">
  <label style={{ fontWeight: "600" }}>Quantity:</label>

  <div className="d-flex align-items-center gap-2">
    <button
      className="btn btn-outline-secondary"
      style={{ width: "35px", height: "35px" }}
      onClick={props.decreaseQty}
    >
      -
    </button>

    <span style={{ minWidth: "30px", textAlign: "center", fontWeight: "600" }}>
      {props.quantity}
    </span>

    <button
      className="btn btn-outline-secondary"
      style={{ width: "35px", height: "35px" }}
      onClick={props.increaseQty}
    >
      +
    </button>
  </div>
</div>

  )
}

export default Quntiti