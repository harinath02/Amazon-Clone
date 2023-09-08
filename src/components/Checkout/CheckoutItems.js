import React from 'react'
import './Checkout.css'

function CheckoutItems(props) {
  return (
    <div>
      <div
        style={{
          border: "1px solid #E7E7E7",
          width: "95%",
          display: "flex",
          height: "250px",
          margin: "25px",
        }}
      >
        <div style={{ margin: "25px" }}>
          <img
            src={props.definition.image}
            alt=""
            height="200px"
          />
        </div>
        <div style={{ marginTop: "20px" }}>
          <div className="textgap" style={{ fontSize: "20px" }}>
            {props.definition.name}
          </div>
          <div className="textgap" style={{ fontWeight: "bold" }}>
            {props.definition.price}
          </div>
          <div className="textgap">{props.definition.status}</div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutItems;