import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Query } from "@apollo/client/react/components";
import { ReactComponent as LogoSvg } from "../data/svg/Group.svg";
import { CATEGORIES_QUERY, CURRENCIES_QUERY } from "../data/GraphqlQueries";
import CURRENCY_SYMBOLS from "../data/CurrencyDispayNames";
import HeaderCart from "./Cart/HeaderCart";
import DropDown from "./DropDown";

import { MainContainer } from "../data/commonStyles";

class MainHeader extends Component {
  shouldComponentUpdate(nextProps) {
    if (
      nextProps.activeCategory === this.props.activeCategory &&
      nextProps.activeCurrency === this.props.activeCurrency
    ) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <Header>
        <MainContainer>
          <Row>
            <nav>
              <ul>
                <Query
                  query={CATEGORIES_QUERY}
                  onCompleted={(data) => {
                    this.props.changeCategory(data.categories[0].name);
                  }}
                >
                  {({ loading, data }) => {
                    if (loading) return "";

                    return data.categories.map((cat) => (
                      <Link to="/" key={cat.name}>
                        <NavItem
                          onClick={() => this.props.changeCategory(cat.name)}
                          active={cat.name === this.props.activeCategory}
                        >
                          {cat.name}
                        </NavItem>
                      </Link>
                    ));
                  }}
                </Query>
              </ul>
            </nav>

            <Link to="/">
              <LogoSvg />
            </Link>

            <FlexCenter>
              <DropDown title={CURRENCY_SYMBOLS[this.props.activeCurrency]}>
                <Query query={CURRENCIES_QUERY}>
                  {({ loading, data }) => {
                    if (loading) return "";

                    return data.currencies.map((item) => (
                      <li
                        key={item}
                        onClick={() => this.props.changeCurrency(item)}
                      >
                        {CURRENCY_SYMBOLS[item]} {item}
                      </li>
                    ));
                  }}
                </Query>
              </DropDown>

              <HeaderCart
                activeCurrency={this.props.activeCurrency}
                dispatch={this.props.dispatch}
              />
            </FlexCenter>
          </Row>
        </MainContainer>
      </Header>
    );
  }
}
export default MainHeader;

const Header = styled.div`
  z-index: 99;
  position: relative;
  width: 100%;
  height: 80px;
  margin-bottom: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;

  nav {
    height: 100%;
  }

  nav ul {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    list-style: none;
  }

  nav a {
    height: 100%;
    text-decoration: none;
  }
`;

const NavItem = styled.li`
  height: 100%;
  padding: 0 16px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;

  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;

  color: ${(props) => (props.active ? "#5ece7b" : "#1D1F22")};
  border-bottom: ${(props) =>
    props.active ? "2px solid #5ece7b" : "2px solid transparent"};

  &:hover {
    color: #5ece7b;
    border-bottom: 2px solid #5ece7b;
  }
`;

const Row = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  height: 100%;
`;
