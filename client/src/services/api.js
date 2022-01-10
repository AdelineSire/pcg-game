import axios from 'axios';

const resData = (res) => {
	return res.data;
};

const getShortClass = (id) => {
	return axios.get('/short/' + id).then(resData);
};
const getBaseClass = (id) => {
	return axios.get('/base/' + id).then(resData);
};

export { getShortClass, getBaseClass };
