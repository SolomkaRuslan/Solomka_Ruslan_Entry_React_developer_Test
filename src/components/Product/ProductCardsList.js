import React, { Component } from "react";
import CURRENCY_SYMBOLS from "../../data/CurrencyDispayNames";
import styled from "styled-components";
import ProductCard from "./ProductCard";

import { FlexBetween } from "../../data/commonStyles";

class ProductCardsList extends Component {
  render() {
    return (
      <FlexBetween wrapping>
        {this.props.items.map((item) => {
          const { amount } = item.prices.find(
            (element) => element.currency === this.props.activeCurrency
          );

          return (
            <ProductCard
              key={item.id}
              product={item}
              price={`${CURRENCY_SYMBOLS[this.props.activeCurrency]}${amount}`}
              img={item.gallery[0]}
              addToCart={this.props.addToCart}
            />
          );
        })}

        <ProductPlaceHolder />
        <ProductPlaceHolder />
        <ProductPlaceHolder />
        <ProductPlaceHolder />
        <ProductPlaceHolder />
      </FlexBetween>
    );
  }
}

export default ProductCardsList;

const ProductPlaceHolder = styled.div`
  width: 386px;
  display: block;
`;
