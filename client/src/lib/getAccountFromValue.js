// Returns the account linked to an item's value
const getAccoutFromValue = (value, accounts) => {
	let result;
	if (typeof value === 'number') {
		result = accounts.find((account) => value === account._id);
	} else {
		result = accounts.find((account) => value === account.name);
	}
	return result;
};

export default getAccoutFromValue;
