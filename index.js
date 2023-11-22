require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

const allRoutes = require('./server/router/route.js')

const port = process.env.PORT || 3001;

allRoutes(app);

