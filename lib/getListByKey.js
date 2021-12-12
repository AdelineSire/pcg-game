const getListByKey = (objectsArray, objectKey) => {
	const values = objectsArray.map((object) => object[objectKey]);
	return values;
};

module.exports = getListByKey;
