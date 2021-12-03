import React, { Component } from "react";
import styled from "styled-components";
import CURRENCY_SYMBOLS from "../../data/CurrencyDispayNames";
import ProductSilder from "../Product/ProductSilder";
import ProductAttribute from "../Product/ProductAttribute";
import CartProductQuantityManager from "./CartProductQuantityManager";

class CartProduct extends Component {
  submitChangeToAttribute(key, value) {
    this.props.dispatch({
      type: "CHANGE_ATTRIBUTE",
      payload: { key, value, id: this.props.product.id },
    });
  }

  render() {
    const { amount } = this.props.product.prices.find(
      (element) => element.currency === this.props.activeCurrency
    );

    return (
      <CartProductBox hoverCart={this.props.hoverCart}>
        <CartProductDetails hoverCart={this.props.hoverCart}>
          <span className="product-title-cart">{this.props.product.name}</span>
          <span>{this.props.product.brand}</span>
          <p className="product-price-value-cart">{`${
            CURRENCY_SYMBOLS[this.props.activeCurrency]
          }${(amount * this.props.product.quantity).toFixed(2)}`}</p>

          <div>
            {this.props.product.attributes.map((attr) => (
              <Spacer key={attr.id}>
                <ProductAttribute
                  hoverCart={this.props.hoverCart}
                  attribute={attr}
                  withTitle={false}
                  selected={this.props.product.selectedAttributes[attr.name]}
                  changeAttribute={this.submitChangeToAttribute.bind(this)}
                />
              </Spacer>
            ))}
          </div>
        </CartProductDetails>

        <FlexGap>
          <CartProductQuantityManager
            hoverCart={this.props.hoverCart}
            dispatch={this.props.dispatch}
            quantity={this.props.product.quantity}
            id={this.props.product.id}
          />

          <ProductSilder
            imgs={this.props.product.gallery}
            hoverCart={this.props.hoverCart}
          />
        </FlexGap>
      </CartProductBox>
    );
  }
}

export default CartProduct;

const CartProductBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-top: ${(props) => (props.hoverCart ? "none" : "1px solid #e5e5e5")};
  padding-block: 20px;
`;

const CartProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: ${(props) => (props.hoverCart ? "16px" : "30px")};
  line-height: ${(props) => (props.hoverCart ? "25,6px" : "27px")};
  color: #1d1f22;

  .product-title-cart {
    font-weight: ${(props) => (props.hoverCart ? "300" : "600")};
  }

  .product-price-value-cart {
    font-weight: bold;
    font-size: ${(props) => (props.hoverCart ? "16px" : "24px")};
    line-height: ${(props) => (props.hoverCart ? "25,6px" : "18px")};
    margin-block: ${(props) => (props.hoverCart ? "5px" : "10px")};
  }
`;

const Spacer = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

const FlexGap = styled.div`
  display: flex;
  gap: 12px;
`;
