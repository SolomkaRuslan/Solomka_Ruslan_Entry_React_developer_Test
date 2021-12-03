import React, { Component } from "react";
import CartOnHover from "./CartOnHover";
import styled from "styled-components";
import { ReactComponent as EmptyCartSvg } from "../../data/svg/EmptyCart.svg";
import { CartContext } from "../../App";

class HeaderCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  hanldeMouseIn() {
    this.setState({ isOpen: true });
    document.body.style.overflow = "hidden";
  }

  hanldeMouseOut() {
    this.setState({ isOpen: false });
    document.body.style.overflow = "overlay";
  }

  countCartItemsQuantity(cart) {
    return cart.reduce((prev, curr) => prev + curr.quantity, 0);
  }

  render() {
    return (
      <HeaderCartBox
        onMouseEnter={() => this.hanldeMouseIn()}
        onMouseLeave={() => this.hanldeMouseOut()}
      >
        <EmptyCartSvg fill="#43464E" />

        <CartContext.Consumer>
          {(cart) => (
            <React.Fragment>
              {cart.length > 0 && (
                <CartCountIndicator>
                  {this.countCartItemsQuantity(cart)}
                </CartCountIndicator>
              )}

              {this.state.isOpen && (
                <React.Fragment>
                  <CartOnHover
                    cartItemsQuantity={this.countCartItemsQuantity(cart)}
                    cart={cart}
                    activeCurrency={this.props.activeCurrency}
                    dispatch={this.props.dispatch}
                  />

                  <GrayOverlay onMouseOver={() => this.hanldeMouseOut()} />
                </React.Fragment>
              )}
            </React.Fragment>
          )}
        </CartContext.Consumer>
      </HeaderCartBox>
    );
  }
}

export default HeaderCart;

const HeaderCartBox = styled.div`
  position: relative;
  overflow: visible;
  display: flex;
  align-items: center;
  z-index: 11;
  height: 100%;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  background: transparent;
`;

const GrayOverlay = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(57, 55, 72, 0.22);
  z-index: 9;
`;

const CartCountIndicator = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: #000000;
  color: #ffffff;
  user-select: none;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
`;
