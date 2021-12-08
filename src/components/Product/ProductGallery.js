import React, { Component } from "react";
import styled from "styled-components";

import { SquareImgHolder, FlexBox } from "../../data/commonStyles";

class ProductGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImg: this.props.gallery[0],
    };
  }

  render() {
    return (
      <FlexBox width="60%" gap="40px">
        <FlexBox column width="80px" gap="40px">
          {this.props.gallery.map((img) => (
            <SquareImgHolder key={img}>
              <PointerImg
                src={img}
                alt="Secondary"
                onClick={() => {
                  if (img !== this.state.mainImg)
                    this.setState({ mainImg: img });
                }}
                onError={(e) => e.target.remove()}
              />
            </SquareImgHolder>
          ))}
        </FlexBox>

        <MainImgContainer>
          <img src={this.state.mainImg} alt="Main img" />
        </MainImgContainer>
      </FlexBox>
    );
  }
}

export default ProductGallery;

const MainImgContainer = styled.div`
  max-width: 80%;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const PointerImg = styled.img`
  cursor: pointer;
`;
