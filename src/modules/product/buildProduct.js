const buildProduct = (bodyData, image) => {
    let description = null;
    if (bodyData.description === '') {
        description = `Fish farming or pisciculture involves raising fish commercially in tanks or enclosures 
        such as fish ponds, usually for food. A facility that releases juvenile fish into the wild for recreational
        fishing or to supplement a species natural numbers is generally referred to as a fish hatchery.`
    } else {
        description = bodyData.description;
    }
    const product = {
        userId: bodyData.userId,
        username: bodyData.username,
        fishName: bodyData.fishName,
        fisheryName: bodyData.fisheryName,
        fishCategory: bodyData.fishCategory,
        price: +bodyData.price,
        unit: bodyData.unit,
        image: image,
        location: bodyData.location,
        contact: +bodyData.contact,
        description: description

    };

    return product;
};

module.exports = buildProduct;