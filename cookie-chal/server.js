const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()

app.use(cookieParser());
app.use(express.static(__dirname + '/'));

app.get('/', (req, res) => {


	res.sendFile(path.join(__dirname, '/index.html'));

	if (!req.cookies.user) {
		res.cookie('user', "");


	}
	else if (req.cookies.user != "admin") {
		res.sendFile(path.join(__dirname, '/close.html'));
	}
	else if (req.cookies.user === "admin") {

		res.sendFile(path.join(__dirname, '/flag.html'));
	}
})
app.listen(8080, () => console.log('The server is running port 80...'));