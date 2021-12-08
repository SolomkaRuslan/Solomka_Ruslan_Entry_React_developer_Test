import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { getInitialProductAttributes } from "../../data/getInitialProductAttributes";
import { ReactComponent as EmptyCartSvg } from "../../data/svg/EmptyCart.svg";

import { SquareImgHolder, BoldText, FlexBox } from "../../data/commonStyles";

class ProductCard extends Component {
  render() {
    return (
      <ProductCardBox>
        <Link to={`/product/${this.props.product.id}`}>
          <ProductCartBoxContent inStock={this.props.product.inStock}>
            <SquareImgHolder>
              <img src={this.props.img} alt="img" />

              {!this.props.product.inStock && (
                <OutOfStockBox>
                  <span>Out of stock</span>
                </OutOfStockBox>
              )}

              {this.props.product.inStock && (
                <AddToCartBtn
                  onClick={(e) => {
                    e.preventDefault();
                    if (this.props.product.inStock) {
                      this.props.addToCart({
                        ...this.props.product,
                        id: uuidv4(),
                        quantity: 1,
                        selectedAttributes: getInitialProductAttributes(
                          this.props.product.attributes
                        ),
                      });
                    }
                  }}
                >
                  <EmptyCartSvg fill="white" />
                </AddToCartBtn>
              )}
            </SquareImgHolder>

            <FlexBox column m_top="1.5rem">
              <span>
                {this.props.product.name} {this.props.product.brand}
              </span>
              <BoldText>{this.props.price}</BoldText>
            </FlexBox>
          </ProductCartBoxContent>
        </Link>
      </ProductCardBox>
    );
  }
}

const ProductCardBox = styled.div`
  position: relative;
  margin-bottom: 6.5rem;
  width: 386px;
  cursor: pointer;

  a {
    text-decoration: none;
  }

  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }
`;

const ProductCartBoxContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;
  background: #ffffff;

  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-size: 18px;
  font-weight: 300;
  line-height: 28.8px;
  color: #1d1f22;

  opacity: ${(props) => (props.inStock ? 1 : 0.5)};

  &:hover button {
    display: block;
  }
`;

const OutOfStockBox = styled.div`
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-weight: normal;
    font-size: 24px;
    line-height: 38.4px;
    text-transform: uppercase;
    color: #8d8f9a;
  }
`;

const AddToCartBtn = styled.button`
  display: none;
  cursor: pointer;
  position: absolute;
  left: 100%;
  top: 100%;
  transform: translate(-125%, -50%);
  width: 52px;
  height: 52px;
  border-radius: 50px;
  background: #5ece7b;
  color: white;
  border: none;
  z-index: 444;

  &:hover {
    background: #7de398;
  }
`;

export default ProductCard;
