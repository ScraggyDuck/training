var initialState = [
  {
    id: "1",
    name: "Samsung Galaxy Note 9 ",
    image: "https://cdn.lotte.vn/media/catalog/product/S/S/SS-NOTE-9-XANH-1.jpg",
    description: "Hàng Nhập Khẩu",
    categoryId: "2",
    price: 11290000,
    attributes: {
      colors: ['#475984', '#675F52', '#050505', '#D5B47B'],
      brand: "SAMSUNG",
      ram: "4GB"
    },
    rating: 1
  },
  {
    id: 2,
    name: "Apple iPhone X ",
    image: "https://cdn.lotte.vn/media/catalog/product/g/1/g1-11.jpg",
    description: "Trả góp 0%",
    categoryId: "2",
    price: 2122200,
    attributes: {
      colors: ['#475984', '#8A2454'],
      brand: "APPLE",
      ram: "8GB"
    },
    rating: 2
  },
  {
    id: "3",
    name: "Nokia 3.1",
    image: "https://cdn.lotte.vn/media/catalog/product/5/1/51JGtdhqwrL._SL1000_.jpg",
    description: "Hàng Chính Hãng",
    categoryId: "2",
    price: 3290000,
    attributes: {
      colors: ['#BF6989', '#9A54D8', '#675F52', '#050505', '#D5B47B'],
      brand: "NOKIA",
      ram: "1GB"
    },
    rating: 5
  },
  {
    id: "4",
    name: "Apple iPad (Gold)",
    image: "https://cdn.lotte.vn/media/catalog/product/1/4/1484_1513072289_gen_5_v_ng.jpg",
    description: "Hàng Nhập Khẩu",
    categoryId: "3",
    price: 10748000,
    attributes: {
      colors: ['#475984', '#8A2454', '#BF6989', '#9A54D8', '#675F52', '#050505', '#D5B47B'],
      brand: "APPLE",
      ram: "8GB"
    },
    rating: 3
  },
  {
    id: "5",
    name: "Apple Ipad Gen Silver",
    image: "https://cdn.lotte.vn/media/catalog/product/3/0/3026285_1-5.jpg",
    description: "Hàng Nhập Khẩu",
    categoryId: "3",
    price: 7990000,
    attributes: {
      colors: ['#475984', '#675F52', '#050505'],
      brand: "APPLE",
      ram: "32GB"
    },
    rating: 2
  },
  {
    id: "6",
    name: "Laptop Lenovo ",
    image: "https://cdn.lotte.vn/media/catalog/product/l/3/l340%201.jpg",
    description: "Hàng Nhập Khẩu",
    categoryId: "4",
    price: 12290000,
    attributes: {
      colors: ['#BF6989', '#9A54D8', '#D5B47B'],
      brand: "LENOVO",
      ram: "4GB"
    },
    rating: 4
  },
  {
    id: "7",
    name: "Apple Macbook Pro",
    image: "https://cdn.lotte.vn/media/catalog/product/m/b/mbp13rd-tb-2016-pf-open-spgry_4.jpg",
    description: "Hàng Nhập Khẩu",
    categoryId: "4",
    price: 290000,
    attributes: {
      colors: ['#475984', '#8A2454', '#BF6989', '#9A54D8', '#675F52', '#050505', '#D5B47B'],
      brand: "APPLE",
      ram: "32GB"
    },
    rating: 3
  },
  {
    id: "8",
    name: "Laptop Dell",
    image: "https://cdn.lotte.vn/media/catalog/product/3/5/3578%20V3578A%20(%C4%90en)-1.jpg",
    description: "i tính Bảo An - Laptopno1",
    categoryId: "4",
    price: 1300000,
    attributes: {
      colors: ['#475984', '#8A2454', '#BF6989', '#9A54D8', '#675F52', '#050505', '#D5B47B'],
      brand: "DELL",
      ram: "8GB"
    },
    rating: 5
  },
  {
    id: "9",
    name: "Quần Tây Slimfit Mattana",
    image: "https://cdn.lotte.vn/media/catalog/product/4/1/413_1499314036_mqm90170484025083_2.jpg",
    description: "Hàng Nhập Khẩu",
    categoryId: "6",
    price: 1129000,
    attributes: {
      colors: ['#475984', '#9A54D8', '#675F52', '#D5B47B'],
      brand: "MATTANA",
      size: "39"
    },
    rating: 4
  },
  {
    id: 10,
    name: "Quần Tây Nam The Cosmo",
    image: "https://cdn.lotte.vn/media/catalog/product/1/1/1122_1514141363_look27_799_808x1000.jpg",
    description: "Hàng Nhập Khẩu",
    categoryId: "6",
    price: 4229000,
    attributes: {
      colors: ['#475984', '#9A54D8'],
      brand: "COSMO",
      size: "40"
    },
    rating: 1
  },
  {
    id: "11",
    name: "Giày Nhựa",
    image: "https://cdn.lotte.vn/media/catalog/product/1/0/100719-LD103-VANG-001.jpg",
    description: "Hàng Nhập Khẩu",
    categoryId: "7",
    price: 175000,
    attributes: {
      colors: ['#475984', '#9A54D8', '#675F52', '#D5B47B'],
      brand: "MATTANA",
      size: "41"
    },
    rating: 2
  },
  {
    id: "12",
    name: "Giày Da ",
    image: "https://cdn.lotte.vn/media/catalog/product/P/C/PCMFWLC089BLK-01.jpg",
    description: "Hàng Nhập Khẩu",
    categoryId: "7",
    price: 990000,
    attributes: {
      colors: ['#475984'],
      brand: "COSMO",
      size: "42"
    },
    rating: 5
  }
];

const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default products;
