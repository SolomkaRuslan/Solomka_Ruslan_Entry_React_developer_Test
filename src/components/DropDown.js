import React, { Component } from "react";
import styled from "styled-components";
import { ReactComponent as ArrowDownSvg } from "../data/svg/ArrowDown.svg";

class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.wrapperRef = React.createRef();
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  handleDropDownClick() {
    if (!this.state.open) {
      this.setState({ open: true });
      document.addEventListener("mousedown", this.handleOutsideClick);
      return;
    }

    this.setState({ open: false });
    document.removeEventListener("mousedown", this.handleOutsideClick);
  }

  handleOutsideClick(event) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      document.removeEventListener("mousedown", this.handleOutsideClick);
      this.setState({ open: false });
    }
  }

  render() {
    return (
      <DropDownBox
        ref={this.wrapperRef}
        onClick={() => this.handleDropDownClick()}
      >
        <Title>
          <span>
            {this.props.title}
            <ArrowWrapper upSideDown={this.state.open}>
              <ArrowDownSvg />
            </ArrowWrapper>
          </span>
        </Title>

        <Options opened={this.state.open}>
          <ul>{this.props.children}</ul>
        </Options>
      </DropDownBox>
    );
  }
}

export default DropDown;

const DropDownBox = styled.div`
  user-select: none;
  position: relative;
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 29px;
  color: #1d1f22;
`;

const Title = styled.div`
  display: flex;
  align-items: flex-end;
  cursor: pointer;

  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const ArrowWrapper = styled.div`
  position: relative;
  margin-left: 10px;

  svg {
    transform: ${(props) => (props.upSideDown ? "rotateZ(180deg)" : "")};
  }
`;

const Options = styled.div`
  width: 114px;
  padding: 10px 0;
  position: absolute;
  left: -20px;
  top: 140%;
  display: ${(props) => (props.opened ? "block" : "none")};
  overflow: visible;
  background: #ffffff;
  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);

  ul {
    list-style: none;
    filter: drop-shadow(0px 4px 35px rgba(168, 172, 176, 0.19));
  }

  ul li {
    cursor: pointer;
    padding: 10px 20px;
  }
`;
