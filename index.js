const userRoutes = require('./routes/users.js');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users',userRoutes)

app.get('/',(req,res) => res.send('Hello from home-page.'));

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
