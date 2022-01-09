import axios from 'axios';
import API_URL from './config';

const resData = (res) => {
	return res.data;
};

const getShortClass = (id) => {
	return axios.get(API_URL + 'short/' + id).then(resData);
};
const getBaseClass = (id) => {
	return axios.get(API_URL + 'base/' + id).then(resData);
};

export { getShortClass, getBaseClass };
