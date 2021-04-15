const express = require("express");
const app = express();

const portti = process.env.PORT || 8000;

app.use(express.static("./public"));

app.listen(portti, () => {

    console.log(`Palvelin käynnistyi porttiin ${portti}`);

});