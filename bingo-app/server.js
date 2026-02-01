const express = require("express");

const path = require("path");



const app = express();

const PORT = 3000;



app.use(express.static(path.join(__dirname, "public")));



app.get("/health", (req, res) => {

  res.send("OK");

});



app.listen(PORT, () => {

  console.log(`Bingo app running on port ${PORT}`);

});


