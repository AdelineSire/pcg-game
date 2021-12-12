const express = require('express');
const router = express.Router();

const { getListByKey, addPropertiesToItems, randomize } = require('../lib');

const getLevel1 = (req, res) => {
	const short = require('../data/short.json');
	const accounts = short.filter((obj) => obj._id < 9);
	const ids = randomize(addPropertiesToItems(getListByKey(accounts, '_id')));
	const names = randomize(addPropertiesToItems(getListByKey(accounts, 'name')));
	const level1 = { accounts: accounts, ids: ids, names: names };
	res.json(level1);
};

router.route('/level1').get(getLevel1);
module.exports = router;
