import React, { Component } from "react";
import { Query } from "@apollo/client/react/components";
import { CATEGORY_QUERY } from "../../data/GraphqlQueries";
import ProductCardsList from "../Product/ProductCardsList";

import { MainH2 } from "../../data/commonStyles";

class ProductListingPage extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.activeCategory ? (
          <Query
            query={CATEGORY_QUERY}
            variables={{ myQueryInput: { title: this.props.activeCategory } }}
          >
            {({ loading, data }) => {
              if (loading) return "";
              return (
                <React.Fragment>
                  <MainH2>{data.category.name}</MainH2>
                  <ProductCardsList
                    activeCurrency={this.props.activeCurrency}
                    items={data.category.products}
                    addToCart={this.props.addToCart}
                  />
                </React.Fragment>
              );
            }}
          </Query>
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}

export default ProductListingPage;
