export const borderAnimation = "pb-1 bg-gradient-to-r from-[#b63f4f] to-[#b63f4f] bg-no-repeat bg-left-bottom bg-[length:0%_1px] hover:bg-[length:100%_1px] transition-all duration-300";

export function createSlug(text) {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9 ]/g, "") // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes
}

export function getCollectionCounts(products) {
    const map = {};

    products.forEach(product => {
        product.collections.forEach(collection => {
            if (!map[collection]) {
                map[collection] = 0;
            }
            map[collection]++;
        });
    });

    return map;
}

export function getCollectionsWithCount(products, posters) {
    const posterMap = Object.fromEntries(
        posters.map(item => [item.title, item])
    );

    const counts = getCollectionCounts(products);

    return Object.entries(counts)
        .map(([name, count]) => ({
            name,
            count,
            imageSrc: posterMap[name]?.imageSrc || "",
            id: posterMap[name]?.id || name
        }));
}