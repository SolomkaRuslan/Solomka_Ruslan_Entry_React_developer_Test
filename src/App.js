import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import ProductDescriptionPage from "./components/Pages/ProductDescriptionPage";
import ProductListingPage from "./components/Pages/ProductListingPage";
import CartPage from "./components/Pages/CartPage";
import cartReducer from "./data/cartReducer";

import { MainContainer } from "./data/commonStyles";

export const CartContext = React.createContext([]);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCategory: null,
      activeCurrency: "USD",
      cart: [],
    };
  }

  _dispatch(action) {
    this.setState(cartReducer(this.state, action));
  }

  handleChangeCategory(categoryName) {
    this.setState({ activeCategory: categoryName });
  }

  handleChangeCurrency(currencyName) {
    this.setState({ activeCurrency: currencyName });
  }

  areExactlySameProducts(first, second) {
    if (first.name !== second.name) return false;

    for (const key of Object.keys(first.selectedAttributes)) {
      if (first.selectedAttributes[key] !== second.selectedAttributes[key])
        return false;
    }

    return true;
  }

  handleAddToCart(product) {
    let alreadyExist = false;
    for (const item of this.state.cart) {
      if (this.areExactlySameProducts(item, product)) alreadyExist = true;
    }

    if (alreadyExist) {
      this.setState({
        cart: this.state.cart.map((item) =>
          !this.areExactlySameProducts(item, product)
            ? item
            : { ...item, quantity: item.quantity + 1 }
        ),
      });
      return;
    }
    this.setState({ cart: [...this.state.cart, product] });
  }

  render() {
    return (
      <Router>
        <CartContext.Provider value={this.state.cart}>
          <MainHeader
            activeCategory={this.state.activeCategory}
            activeCurrency={this.state.activeCurrency}
            changeCategory={this.handleChangeCategory.bind(this)}
            changeCurrency={this.handleChangeCurrency.bind(this)}
            dispatch={this._dispatch.bind(this)}
          />

          <MainContainer>
            <Switch>
              <Route exact path="/">
                <ProductListingPage
                  activeCategory={this.state.activeCategory}
                  activeCurrency={this.state.activeCurrency}
                  addToCart={this.handleAddToCart.bind(this)}
                />
              </Route>

              <Route
                path="/product/:id"
                render={(matchParams) => (
                  <ProductDescriptionPage
                    id={matchParams.match.params.id}
                    activeCurrency={this.state.activeCurrency}
                    addToCart={this.handleAddToCart.bind(this)}
                  />
                )}
              />

              <Route path="/cart">
                <CartPage
                  activeCurrency={this.state.activeCurrency}
                  dispatch={this._dispatch.bind(this)}
                />
              </Route>
            </Switch>
          </MainContainer>
        </CartContext.Provider>
      </Router>
    );
  }
}

export default App;
