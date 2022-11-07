const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const options = {
  method: "GET",
  url: "https://adsbx-flight-sim-traffic.p.rapidapi.com/api/aircraft/json/lat/%7Blat%7D/lon/%7Blon%7D/dist/25/",
  headers: {
    "X-RapidAPI-Key": "2db839cd12msh1c647f7abbeb369p11bfd8jsn3af262a7299e",
    "X-RapidAPI-Host": "adsbx-flight-sim-traffic.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

app.listen(3000, () => {
  console.log("server is started 😇");
});
