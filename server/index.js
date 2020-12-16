const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes.js');
// const { dbConnection } = require('./models/postmodel.js');

const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.use('/', router);

const port = 3000;
app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});
