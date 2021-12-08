export const getInitialProductAttributes = (attributes) => {
  let initialSelectedAttributes = {};

  attributes.forEach((attribute) => {
    initialSelectedAttributes = {
      ...initialSelectedAttributes,
      [attribute.name]: attribute.items[0].value,
    };
  });

  return initialSelectedAttributes;
};
