// Returns an object with isSelected, isVisible and value keys for each item of the array
const addPropertiesToItems = (itemsArray) => {
	const newArray = itemsArray.map((value) => {
		return { isSelected: false, isVisible: true, value: value };
	});
	return newArray;
};

module.exports = addPropertiesToItems;
