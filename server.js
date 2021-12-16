const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

// App
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client', 'build')));

// Controllers
const { short, base } = require('./controllers');

// Routes
app.use('/short', short);
app.use('/base', base);

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// set port, listen for requests
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
