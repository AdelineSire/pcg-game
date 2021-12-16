const express = require('express');
const router = express.Router();

const { getListByKey, addPropertiesToItems, randomize } = require('../lib');

const getBaseClass = (req, res) => {
	const base = require('../data/base.json');
	const classNum = req.params.id;

	const accounts = base.filter((obj) => String(obj._id).charAt(0) === classNum);
	const sample = accounts.slice(0, 8);
	const ids = randomize(addPropertiesToItems(getListByKey(sample, '_id')));
	const names = randomize(addPropertiesToItems(getListByKey(sample, 'name')));
	const response = { accounts: sample, ids: ids, names: names };
	res.json(response);
};

router.route('/:id').get(getBaseClass);
module.exports = router;
