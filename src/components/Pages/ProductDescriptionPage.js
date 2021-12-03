import React, { Component } from "react";
import { Query } from "@apollo/client/react/components";
import ProductGallery from "../Product/ProductGallery";
import ProductDescription from "../Product/ProductDescription";
import { PRODUCT_QUERY } from "../../data/GraphqlQueries";

import { FlexBetween, MainH4 } from "../../data/commonStyles";

class ProductDescriptionPage extends Component {
  render() {
    return (
      <Query
        query={PRODUCT_QUERY}
        variables={{ myProductInput: this.props.id }}
      >
        {({ loading, data }) => {
          if (loading) return "";

          return data.product ? (
            <FlexBetween m_bot="4.5rem">
              <ProductGallery gallery={data.product.gallery} />
              <ProductDescription
                product={data.product}
                activeCurrency={this.props.activeCurrency}
                addToCart={this.props.addToCart}
              />
            </FlexBetween>
          ) : (
            <MainH4>Cant find that product</MainH4>
          );
        }}
      </Query>
    );
  }
}

export default ProductDescriptionPage;
