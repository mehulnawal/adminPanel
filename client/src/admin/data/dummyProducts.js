// src/admin/data/dummyProducts.js
export const dummyProducts = [
    {
        id: 1,
        name: "iPhone 15 Pro Max",
        slug: "iphone-15-pro-max",
        price: 1299,
        stock: 24,
        status: "active",
        categoryId: 5,
        categoryName: "iPhone",
        images: [
            "/api/placeholder/300/300",
            "/api/placeholder/300/300",
            "/api/placeholder/300/300"
        ],
        description: "Latest iPhone with A17 Pro chip",
        createdAt: "2025-01-10"
    },
    {
        id: 2,
        name: "Samsung Galaxy S24 Ultra",
        slug: "samsung-galaxy-s24-ultra",
        price: 1099,
        stock: 15,
        status: "active",
        categoryId: 6,
        categoryName: "Samsung",
        images: ["/api/placeholder/300/300"],
        description: "Flagship Android phone",
        createdAt: "2025-01-08"
    },
    {
        id: 3,
        name: "MacBook Pro 16 M3 Max",
        slug: "macbook-pro-16-m3-max",
        price: 3499,
        stock: 8,
        status: "inactive",
        categoryId: 1,
        categoryName: "Electronics",
        images: [
            "/api/placeholder/300/300",
            "/api/placeholder/300/300",
            "/api/placeholder/300/300",
            "/api/placeholder/300/300"
        ],
        description: "Most powerful MacBook ever",
        createdAt: "2025-01-05"
    }
];
