var initialState = [
  {
    id: 1,
    name: "Cherry",
    image: "https://loremflickr.com/400/480",
    description: "Two cherries",
    price: 1.99,
    colors: ["#46a6f2", "#777777", "#772337", "#432123"],
    hotproducts: true,
    quantitysold: 13,
    condition: "Fresh"
  },
  {
    id: 2,
    name: "Orange",
    image: "https://loremflickr.com/400/480/cat",
    description: "Giant Orange",
    price: 2.99,
    colors: ["#333333"],
    hotproducts: true,
    quantitysold: 23,
    condition: "Frozen"
  },
  {
    id: 3,
    name: "Nuts",
    image: "https://loremflickr.com/400/480/dog",
    description: "Mixed Nuts",
    price: 1.0,
    colors: ["#333333", "#777777"],
    hotproducts: false,
    quantitysold: 2,
    condition: "Fresh"
  },
  {
    id: 4,
    name: "Strawberry",
    image: "https://loremflickr.com/400/480",
    description: "Just Strawberry",
    price: 1.49,
    colors: ["#333333", "#eafdda", "#763241"],
    hotproducts: true,
    quantitysold: 34,
    condition: "Frozen"
  },
  {
    id: 5,
    name: "Cherry2",
    image: "https://loremflickr.com/400/480",
    description: "Two cherries",
    price: 1.99,
    colors: ["#46a6f2", "#777777", "#772337", "#432123"],
    hotproducts: false,
    quantitysold: 4,
    condition: "Fresh"
  },
  {
    id: 6,
    name: "Orange2",
    image: "https://loremflickr.com/400/480/cat",
    description: "Giant Orange",
    price: 2.99,
    colors: ["#333333"],
    hotproducts: false,
    quantitysold: 0,
    condition: "Frozen"
  },
  {
    id: 7,
    name: "Nuts2",
    image: "https://loremflickr.com/400/480/dog",
    description: "Mixed Nuts",
    price: 1.0,
    colors: ["#333333", "#777777"],
    hotproducts: true,
    quantitysold: 19,
    condition: "Fresh"
  },
  {
    id: 8,
    name: "Strawberry2",
    image: "https://loremflickr.com/400/480",
    description: "Just Strawberry",
    price: 1.49,
    colors: ["#333333", "#eafdda", "#763241"],
    hotproducts: true,
    quantitysold: 3,
    condition: "Frozen"
  }
];

const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default products;
