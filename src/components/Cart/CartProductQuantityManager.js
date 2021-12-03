import React, { Component } from "react";
import styled from "styled-components";

class CartProductQuantityManager extends Component {
  render() {
    return (
      <QuantityManager hoverCart={this.props.hoverCart}>
        <QuantityBtn
          hoverCart={this.props.hoverCart}
          onClick={() =>
            this.props.dispatch({
              type: "ADD_QUANTITY",
              payload: this.props.id,
            })
          }
        >
          +
        </QuantityBtn>

        <span>{this.props.quantity}</span>

        <QuantityBtn
          hoverCart={this.props.hoverCart}
          onClick={() =>
            this.props.dispatch({
              type: "SUBTRACT_QUANTITY",
              payload: this.props.id,
            })
          }
        >
          -
        </QuantityBtn>
      </QuantityManager>
    );
  }
}

export default CartProductQuantityManager;

const QuantityManager = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  span {
    font-family: "Raleway", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: ${(props) => (props.hoverCart ? "16px" : "24px")};
    line-height: ${(props) => (props.hoverCart ? "25,6px" : "38,4px")};

    display: flex;
    align-items: center;
    text-align: center;
    color: #1d1f22;
  }
`;

const QuantityBtn = styled.button`
  display: grid;
  place-content: center;
  width: ${(props) => (props.hoverCart ? "24px" : "45px")};
  height: ${(props) => (props.hoverCart ? "24px" : "45px")};
  border: 1px solid #1d1f22;
  color: #1d1f22;
  background: transparent;
  cursor: pointer;
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-size: 2rem;
  font-weight: normal;
`;
