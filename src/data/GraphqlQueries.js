import { gql } from "@apollo/client";

export const CATEGORY_QUERY = gql`
  query Category($myQueryInput: CategoryInput) {
    category(input: $myQueryInput) {
      name
      products {
        id
        inStock
        name
        prices {
          amount
          currency
        }
        gallery
      }
    }
  }
`;

export const PRODUCT_QUERY = gql`
  query Product($myProductInput: String!) {
    product(id: $myProductInput) {
      id
      name
      inStock
      gallery
      description
      category
      brand
      prices {
        amount
        currency
      }
      attributes {
        id
        name
        type
        items {
          id
          displayValue
          value
        }
      }
    }
  }
`;

export const CATEGORIES_QUERY = gql`
  query Categories {
    categories {
      name
    }
  }
`;

export const CURRENCIES_QUERY = gql`
  query Currencies {
    currencies
  }
`;