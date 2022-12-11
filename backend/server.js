console.log('MERN Series by Brad Traversy');

const express = require('express');
const dotenv = require('dotenv').config();
const mongoDB = require('./config/db');

const errorHandler = require('./middleware/errorMiddleware');

// establish MongoDB connection
mongoDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const goalRoutes = require("./routes/goalRoutes");

app.use("/api/goals", goalRoutes);

app.use(errorHandler.errorHandler);

const port = process.env.PORT || 5002;

app.listen(port, () => console.log(`listening on http://localhost:${port}`));