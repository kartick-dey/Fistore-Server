const buildProduct = (bodyData, image) => {
    const product = {
        userId: bodyData.userId,
        fishName: bodyData.fishName,
        fishCategory: bodyData.fishType,
        price: +bodyData.price,
        unit: bodyData.unit,
        image: image,
        location: bodyData.location,
        contact: +bodyData.contact
    };

    return product;
};

module.exports = buildProduct;