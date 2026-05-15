const FiltersData = [
    {
        id: "filter-1",
        title: "Collection",
        filterKey: "collections",
        options: ["Athletic Footwear", "Boots For Every Occasion", "Luxury Leather Shoes", "Sandals & Slides", "Sneakerhead's Haven", "Sustainable Footwear"],
        type: "link"
    },
    {
        id: "filter-2",
        title: "Availability",
        filterKey: "availability",
        options: ["In Stock", "Out of Stock"]
    },
    {
        id: "filter-3",
        title: "Price",
        filterKey: "price",
        type: "range",
        maxRange: "$25"
    },
    {
        id: "filter-4",
        title: "Brand",
        filterKey: "brands",
        options: ["AirWalk", "BoldWalks", "ComfortCreek", "CozySteps", "EcoStride", "GlamStep", "LuxeFeet", "ProSteps", "RetroSole", "SimplyShoes", "SportyFeet", "SprintMax", "TrailGear", "TrendyFeet", "UrbanStep"]
    },
    {
        id: "filter-5",
        title: "Category",
        filterKey: "categories",
        options: ["Fragrance Oil", "Hair Care", "Makeup", "Nail Care", "Skin Care"]
    },
    {
        id: "filter-6",
        title: "Material",
        filterKey: "materials",
        options: ["Material 1", "Material 2", "Material 3", "Material 4"]
    },
    {
        id: "filter-7",
        title: "More Filters",
        filterKey: "features",
        options: ["Block Heel", "Breathable", "Canvas", "Casual", "Chunky", "Classic", "Comfort", "Cushioned", "Durable", "Elegant", "Formal", "High-Top", "Leather", "Lightweight", "Men", "Mesh", "Performance", "Platform", "Running", "Slip-On", "Street Style", "Tennis", "Trail", "Unisex", "White", "Women"]
    },
    {
        id: "filter-8",
        title: "Size",
        filterKey: "sizes",
        options: ["Small", "Medium", "Large"],
        type: "box"
    },
    {
        id: "filter-9",
        title: "Product Type",
        filterKey: "productTypes",
        options: ["pumps", "running shoes", "sandals", "slip-ons", "sneakers"]
    }
]

export default FiltersData;