import React from "react";

const Quntiti = ({ quantity, increaseQty, decreaseQty, stock }) => {
  return (
    <div className="d-flex align-items-center gap-3 mt-3">
      <label style={{ fontWeight: "600" }}>Quantity:</label>

      <div className="d-flex align-items-center gap-2">
        <button
          className="btn btn-outline-secondary"
          style={{ width: "35px", height: "35px" }}
          onClick={decreaseQty}
          disabled={quantity <= 1}
        >
          -
        </button>

        <span style={{ minWidth: "30px", textAlign: "center", fontWeight: "600" }}>
          {quantity}
        </span>

        <button
          className="btn btn-outline-secondary"
          style={{ width: "35px", height: "35px" }}
          onClick={increaseQty}
          disabled={quantity >= stock}
        >
          +
        </button>
      </div>

      <small style={{ color: "#666" }}>
        (Available: {stock})
      </small>
    </div>
  );
};

export default Quntiti;
