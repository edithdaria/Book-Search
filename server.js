const express = require ("express");
const mongoose = require("mongoose");
//const routes = require("./routes");
//const Book = require("./models");
const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({extended: true}));
app.use(express.json());

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://user:O6ttSFIkJBTuvXVG@cluster0.rozpc.mongodb.net/Book?retryWrites=true&w=majority");

app.listen(PORT, function () {
    console.log(`🌎 ==> API Server now listening on PORT ${PORT}!`);
});