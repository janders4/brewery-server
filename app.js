const express = require("express");
const { apikey } =
  process.env.NODE_ENV === "production" ? process.env : require("./config");
const app = express();
const axios = require("axios");
const cors = require("cors");
app.use(cors());

app.use(express.json());

app.get("/locations", getBreweries);

function getBreweries(req, res, next) {
  fetchBreweries()
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => console.log(err));
}

const fetchBreweries = () => {
  return axios
    .get(`https://sandbox-api.brewerydb.com/v2/locations/?key=${apiKey}`)
    .then(({ data }) => {
      return data;
    });
};

module.exports = { app };
