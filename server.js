const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.static(path.join(__dirname, 'static')));
app.listen(PORT);
