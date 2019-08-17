import * as types from '../constants/actionTypes';
var initialState = [
    {
        id: "1",
        title: "Electronic Devices",
        url: '/products/electronic-devices',
        attributes: {
            brands: [
                "APPLE",
                "SAMSUNG",
                "LENOVO",
                "NOKIA",
                "DELL"
            ],
            ram: ["1GB", "2GB", "4GB", "8GB", "32GB"]
        },
        parent: null
    },
    {
        id: "2",
        title: "Mobiles",
        url: '/products/mobiles',
        attributes: {
            brands: [
                "APPLE",
                "SAMSUNG",
                "LENOVO",
                "NOKIA",
                "DELL"
            ],
            ram: ["1GB", "2GB", "4GB", "8GB", "32GB"]
        },
        parent: "1"
    },
    {
        id: "3",
        title: "Tablets",
        url: '/products/tablets',
        attributes: {
            brands: [
                "APPLE",
                "SAMSUNG",
                "LENOVO",
                "NOKIA",
                "DELL"
            ],
            ram: ["1GB", "2GB", "4GB", "8GB", "32GB"]
        },
        parent: "1"
    },
    {
        id: "4",
        title: "Laptops",
        url: '/products/laptops',
        attributes: {
            brands: [
                "APPLE",
                "SAMSUNG",
                "LENOVO",
                "NOKIA",
                "DELL"
            ],
            ram: ["1GB", "2GB", "4GB", "8GB", "32GB"]
        },
        parent: "1"
    },
    {
        id: "5",
        title: "Man's Clothing",
        url: '/products/mans-clothing',
        attributes: {
            brands: [
                "MATTANA",
                "COSMO",
            ],
            size: ["39", "40", "41", "42"]
        },
        parent: null
    },
    {
        id: "6",
        title: "Trousers",
        url: '/products/trousers',
        attributes: {
            brands: [
                "MATTANA",
                "COSMO",
            ],
            size: ["39", "40", "41", "42"]
        },
        parent: "5"
    },
    {
        id: "7",
        title: "Shoes",
        url: '/products/shoes',
        attributes: {
            brands: [
                "MATTANA",
                "COSMO",
            ],
            size: ["39", "40", "41", "42"]
        },
        parent: "5"
    },
];


const categories = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ALL_CATEGORIES:
            return state;
        default:
            return state;
    }
};

export default categories;
