import axios from 'axios';
import API_URL from './config';

const resData = (res) => {
	return res.data;
};

const getLevel1 = () => {
	return axios.get(API_URL + 'short/level1').then(resData);
};

export { getLevel1 };
