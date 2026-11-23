const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/users', require('./Routes/Users'));

app.listen(5000);