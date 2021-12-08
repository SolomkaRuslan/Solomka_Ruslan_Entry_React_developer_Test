import React, { Component } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import DOMPurify from "dompurify";
import CURRENCY_SYMBOLS from "../../data/CurrencyDispayNames";
import ProductAttribute from "./ProductAttribute";
import { getInitialProductAttributes } from "../../data/getInitialProductAttributes";

import { BtnPrimary } from "../../data/commonStyles";

class ProductDescription extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedAttributes: getInitialProductAttributes(
        this.props.product.attributes
      ),
    };
  }

  handleChangeAttribute(key, value) {
    this.setState({
      selectedAttributes: { ...this.state.selectedAttributes, [key]: value },
    });
  }

  render() {
    const { amount } = this.props.product.prices.find(
      (element) => element.currency === this.props.activeCurrency
    );

    return (
      <ProductDescriptionBox>
        <div>
          <p className="desc-title">{this.props.product.name}</p>
          <p className="desc-brand">{this.props.product.brand}</p>
        </div>

        {this.props.product.attributes.length > 0 && (
          <div>
            {this.props.product.attributes.map((attr) => (
              <ProductAttribute
                key={attr.id}
                attribute={attr}
                selected={this.state.selectedAttributes[attr.name]}
                changeAttribute={this.handleChangeAttribute.bind(this)}
              />
            ))}
          </div>
        )}

        <div>
          <h4 className="desc-price">Price:</h4>
          <p className="desc-price-value">{`${
            CURRENCY_SYMBOLS[this.props.activeCurrency]
          }${amount}`}</p>
        </div>

        <BtnPrimary
          disabled={!this.props.product.inStock}
          onClick={() => {
            if (this.props.product.inStock) {
              this.props.addToCart({
                ...this.props.product,
                id: uuidv4(),
                quantity: 1,
                selectedAttributes: this.state.selectedAttributes,
              });
            }
          }}
        >
          {this.props.product.inStock ? "Add to Cart" : "Out of Stock"}
        </BtnPrimary>

        <p
          className="desc-description"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(this.props.product.description, {
              USE_PROFILES: { html: true },
            }),
          }}
        ></p>
      </ProductDescriptionBox>
    );
  }
}

export default ProductDescription;

const ProductDescriptionBox = styled.div`
  width: 30%;
  min-height: 410px;

  display: flex;
  flex-direction: column;
  gap: 40px;

  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-size: 30px;
  line-height: 27px;
  color: #1d1f22;

  .desc-title {
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .desc-brand {
    font-weight: normal;
  }

  .desc-price {
    font-family: "Roboto Condensed", sans-serif;
    font-weight: bold;
    font-size: 18px;
    line-height: 18px;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  .desc-price-value {
    margin-top: 20px;
    font-weight: bold;
    font-size: 24px;
    line-height: 18px;
  }

  .desc-description {
    font-family: "Roboto", sans-serif;
    font-weight: normal;
    font-size: 16px;
    line-height: 25.59px;
  }
`;
