const express = require('express');
const cors = require('cors');

// App
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Controllers
const { short } = require('./controllers');

// Routes
app.use('/short', short);

// set port, listen for requests
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
