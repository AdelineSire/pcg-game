const randomize = (items) => {
	return items.sort(() => Math.random() - 0.5);
};

module.exports = randomize;
