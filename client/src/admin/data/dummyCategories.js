// src/admin/data/dummyCategories.js
export const dummyCategories = [
    {
        id: 1,
        name: "Electronics",
        slug: "electronics",
        status: "active",
        image: "/api/placeholder/200/200",
        parentId: null,
        children: [
            {
                id: 2,
                name: "Mobile Phones",
                slug: "mobile-phones",
                status: "active",
                image: "/api/placeholder/200/200",
                parentId: 1,
                children: [
                    { id: 5, name: "iPhone", slug: "iphone", status: "active", image: "/api/placeholder/200/200", parentId: 2 },
                    { id: 6, name: "Samsung", slug: "samsung", status: "inactive", image: "/api/placeholder/200/200", parentId: 2 }
                ]
            },
            {
                id: 3,
                name: "Televisions",
                slug: "televisions",
                status: "active",
                image: "/api/placeholder/200/200",
                parentId: 1
            }
        ]
    },
    {
        id: 4,
        name: "Clothing",
        slug: "clothing",
        status: "active",
        image: "/api/placeholder/200/200",
        parentId: null
    }
];
