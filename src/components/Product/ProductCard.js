import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as EmptyCartSvg } from "../../data/svg/EmptyCart.svg";

import { SquareImgHolder, BoldText, FlexBox } from "../../data/commonStyles";

class ProductCard extends Component {
  render() {
    return (
      <ProductCardBox>
        <ProductCartBoxContent inStock={this.props.inStock}>
          <SquareImgHolder>
            <img src={this.props.img} alt="img" />

            {!this.props.inStock && (
              <OutOfStockBox>
                <span>Out of stock</span>
              </OutOfStockBox>
            )}

            <Link to={`/product/${this.props.id}`}>
              <GoToProductDescBtn>
                <EmptyCartSvg fill="white" />
              </GoToProductDescBtn>
            </Link>
          </SquareImgHolder>

          <FlexBox column m_top="1.5rem">
            <span>{this.props.name}</span>
            <BoldText>{this.props.price}</BoldText>
          </FlexBox>
        </ProductCartBoxContent>
      </ProductCardBox>
    );
  }
}

const ProductCardBox = styled.div`
  margin-bottom: 6.5rem;
  width: 386px;

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

const GoToProductDescBtn = styled.button`
  display: none;
  cursor: pointer;
  position: absolute;
  top: 100%;
  left: 100%;
  transform: translate(-125%, -50%);
  width: 52px;
  height: 52px;
  border-radius: 50px;
  background: #5ece7b;
  color: white;
  border: none;
  z-index: 4;
`;

export default ProductCard;
