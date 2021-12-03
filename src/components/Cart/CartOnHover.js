import React, { Component } from "react";
import styled from "styled-components";
import CartProduct from "./CartProduct";
import { Link } from "react-router-dom";
import CURRENCYDISPLAYNAMES from "../../data/CurrencyDispayNames";

import { BtnPrimary, BtnSecondary, FlexBetween } from "../../data/commonStyles";

class CartOnHover extends Component {
  countCartTotal(cart) {
    return cart.reduce((prev, curr) => {
      const { amount } = curr.prices.find(
        (element) => element.currency === this.props.activeCurrency
      );

      return prev + curr.quantity * amount;
    }, 0);
  }

  render() {
    return (
      <CartOnHoverBox>
        <p>
          <span className="bold">My Bag,</span> {this.props.cartItemsQuantity}{" "}
          item{this.props.cartItemsQuantity !== 1 && "s"}
        </p>

        {this.props.cart.length > 0
          ? this.props.cart.map((cartItem) => (
              <CartProduct
                hoverCart={true}
                key={cartItem.id}
                product={cartItem}
                activeCurrency={this.props.activeCurrency}
                dispatch={this.props.dispatch}
              />
            ))
          : ""}

        <BigMargin>
          <FlexBetween center gap="12px">
            <p className="cart-total">Total</p>
            <p className="bold">
              {this.countCartTotal(this.props.cart).toFixed(2)}
              {CURRENCYDISPLAYNAMES[this.props.activeCurrency]}
            </p>
          </FlexBetween>
        </BigMargin>

        <FlexBetween gap="12px">
          <LinkWrapper>
            <Link to="/cart">
              <BtnSecondary fontS="14px">view bag</BtnSecondary>
            </Link>
          </LinkWrapper>

          <LinkWrapper>
            <BtnPrimary fontS="14px">check out</BtnPrimary>
          </LinkWrapper>
        </FlexBetween>
      </CartOnHoverBox>
    );
  }
}

export default CartOnHover;

const CartOnHoverBox = styled.div`
  width: 340px;
  max-height: 550px;
  overflow-y: overlay;
  padding: 1rem;
  position: absolute;
  top: 98%;
  right: 0;
  background: white;
  z-index: 22;
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 25.6px;
  color: #1d1f22;

  .bold {
    font-weight: bold;
  }

  .cart-total {
    font-family: "Roboto", sans-serif;
    line-height: 18px;
  }

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
`;

const LinkWrapper = styled.div`
  width: 100%;
  a {
    width: 100%;
  }
`;

const BigMargin = styled.div`
  margin-block: 30px;
`;
