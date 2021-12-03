import React, { Component } from "react";
import styled from "styled-components";
import { ReactComponent as ArrowRightSvg } from "../../data/svg/ArrowRight.svg";

class ProductSilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  handleChangeActiveIndex(changeValue) {
    this.setState({
      activeIndex:
        changeValue < 0 && this.state.activeIndex === 0
          ? this.props.imgs.length - 1
          : changeValue > 0 &&
            this.state.activeIndex === this.props.imgs.length - 1
          ? 0
          : this.state.activeIndex + changeValue,
    });
  }

  render() {
    return (
      <ProductSliderBox hoverCart={this.props.hoverCart}>
        <img src={this.props.imgs[this.state.activeIndex]} alt="Product Img" />

        {this.props.imgs.length > 1 && (
          <React.Fragment>
            <HorizontalArrow
              dir="left"
              onClick={() => this.handleChangeActiveIndex(-1)}
            >
              <ArrowRightSvg />
            </HorizontalArrow>

            <HorizontalArrow
              dir="right"
              onClick={() => this.handleChangeActiveIndex(1)}
            >
              <ArrowRightSvg />
            </HorizontalArrow>
          </React.Fragment>
        )}
      </ProductSliderBox>
    );
  }
}

export default ProductSilder;

const ProductSliderBox = styled.div`
  width: ${(props) => (props.hoverCart ? "105px" : "141px")};
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;

  img {
    width: 100%;
    max-height: ${(props) => (props.hoverCart ? "137px" : "185px")};
    object-fit: cover;
    margin: 0 auto;
  }
`;

const HorizontalArrow = styled.div`
  width: 25px;
  height: 25px;
  cursor: pointer;
  position: absolute;
  left: ${(props) => (props.dir === "left" ? "0" : "100%")};
  top: 50%;
  transform: ${(props) =>
    props.dir === "left" ? "translateY(-50%);" : "translate(-100%, -50%);"};
  border-radius: 50px;
  background-color: rgba(205, 205, 205, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  svg {
    transform: ${(props) => (props.dir === "left" ? "rotateZ(180deg)" : "")};
  }
`;
