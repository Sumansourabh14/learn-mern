console.log('MERN Series by Brad Traversy');

const express = require('express');
const dotenv = require('dotenv').config();

const app = express();

const goalRoutes = require("./routes/goalRoutes");

app.use("/api/goals", goalRoutes);

const port = process.env.PORT;

app.listen(port, () => console.log(`listening on http://localhost:${port}`));