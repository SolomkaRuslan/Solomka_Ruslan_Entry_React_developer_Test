import React, { Component } from "react";
import CURRENCY_SYMBOLS from "../../data/CurrencyDispayNames";
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
              id={item.id}
              key={item.id}
              name={item.name}
              inStock={item.inStock}
              price={`${CURRENCY_SYMBOLS[this.props.activeCurrency]}${amount}`}
              img={item.gallery[0]}
            />
          );
        })}
      </FlexBetween>
    );
  }
}

export default ProductCardsList;
