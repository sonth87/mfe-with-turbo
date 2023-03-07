const express = require('express');
const path = require('path');
const app = express();
const port = process.env.WEB_PORT || 3001;

// const PUBLIC_URL = process.env.PUBLIC_URL || `http://localhost:${PORT}`;
app.listen(port);

app.use(express.static(path.join(__dirname + '/build')));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname + '/build', "index.html"))
})

console.log("server started : localhost:" + port)
