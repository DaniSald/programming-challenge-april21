const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const port = process.PORT || 9000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);

app.listen(port, () => console.log(`Listening to port ${port}`));
