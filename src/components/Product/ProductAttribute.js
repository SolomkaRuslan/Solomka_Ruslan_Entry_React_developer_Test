import React, { Component } from "react";
import styled from "styled-components";

class ProductAttribute extends Component {
  render() {
    return (
      <React.Fragment>
        <MyTitle hoverCart={this.props.hoverCart}>
          {this.props.attribute.name}:
        </MyTitle>

        <AttributeOptionContainer hoverCart={this.props.hoverCart}>
          {this.props.attribute.items.map((item) => (
            <Option
              key={item.id}
              selected={this.props.selected === item.value}
              attr_type={this.props.attribute.type}
              attr_value={item.value}
              onClick={() =>
                this.props.changeAttribute(
                  this.props.attribute.name,
                  item.value
                )
              }
            >
              <div
                className={
                  this.props.hoverCart
                    ? "option small_option"
                    : "option big_option"
                }
              >
                {this.props.attribute.type === "swatch"
                  ? this.props.selected === item.value && <ColorIndicator />
                  : item.value}
              </div>
            </Option>
          ))}
        </AttributeOptionContainer>
      </React.Fragment>
    );
  }
}

export default ProductAttribute;

const AttributeOptionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => (props.hoverCart ? "8px" : "20px")};

  .option {
    font-family: "Source Sans Pro", sans-serif;
    font-style: normal;
    font-weight: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

const Option = styled.div`
  .big_option {
    min-width: 63px;
    height: 45px;
    border: 1px solid #1d1f22;
    font-size: 1rem;
    line-height: 18px;
    letter-spacing: 0.05em;
    color: ${(props) => (props.selected ? "#FFFFFF" : "#292929")};
    background-color: ${(props) =>
      props.attr_type === "swatch"
        ? props.attr_value
        : props.selected
        ? "#1D1F22"
        : "transparent"};
  }

  .small_option {
    min-width: 24px;
    height: 24px;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.05em;

    border: ${(props) =>
      props.selected ? "1px solid #1d1f22" : "1px solid #A6A6A6"};
    color: ${(props) => (props.selected ? "#1D1F22" : "#A6A6A6")};
    background-color: ${(props) =>
      props.attr_type === "swatch"
        ? props.attr_value
        : props.selected
        ? "transparent"
        : "rgba(166, 166, 166, 0.2)"};
  }
`;

const MyTitle = styled.h4`
  margin-bottom: ${(props) => (props.hoverCart ? "2px" : "8px")};
  margin-top: ${(props) => (props.hoverCart ? "8px" : "16px")};
  font-family: "Roboto Condensed", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: ${(props) => (props.hoverCart ? "16px" : "18px")};
  line-height: ${(props) => (props.hoverCart ? "26px" : "18px")};
  text-transform: uppercase;

  display: flex;
  align-items: center;
  text-align: center;

  color: #1d1f22;
`;

const ColorIndicator = styled.div`
  height: 50%;
  aspect-ratio: 1/1;
  border-radius: 50px;
  background: #292929;
  border: 2px solid #ffffff;
`;
