import React, { Component } from "react";
import { CartContext } from "../../App";
import CartProduct from "../Cart/CartProduct";
import styled from "styled-components";

import { MainH3, MainH4, FlexBox } from "../../data/commonStyles";

class CartPage extends Component {
  render() {
    return (
      <CartContext.Consumer>
        {(cart) => (
          <PageContent>
            <MainH3>Cart</MainH3>
            <FlexBox column>
              {cart.length > 0 ? (
                cart.map((cartItem) => (
                  <CartProduct
                    key={cartItem.id}
                    product={cartItem}
                    activeCurrency={this.props.activeCurrency}
                    dispatch={this.props.dispatch}
                  />
                ))
              ) : (
                <MainH4>Your cart is Empty</MainH4>
              )}
            </FlexBox>
          </PageContent>
        )}
      </CartContext.Consumer>
    );
  }
}

export default CartPage;

const PageContent = styled.div`
  margin-bottom: 3rem;
`;
