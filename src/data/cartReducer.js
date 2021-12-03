const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_QUANTITY":
      return {
        cart: state.cart.map((item) =>
          item.id !== action.payload
            ? item
            : { ...item, quantity: item.quantity + 1 }
        ),
      };
    case "SUBTRACT_QUANTITY":
      return {
        cart: state.cart.reduce((result, item) => {
          if (item.id !== action.payload) {
            result.push(item);
            return result;
          }

          if (item.quantity > 1) {
            result.push({ ...item, quantity: item.quantity - 1 });
          }

          return result;
        }, []),
      };
    case "CHANGE_ATTRIBUTE":
      return {
        cart: state.cart.map((item) =>
          item.id !== action.payload.id
            ? item
            : {
                ...item,
                selectedAttributes: {
                  ...item.selectedAttributes,
                  [action.payload.key]: action.payload.value,
                },
              }
        ),
      };
    default:
      return state;
  }
}

export default cartReducer;