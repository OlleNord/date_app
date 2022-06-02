const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    let dateObj = new Date();
    let date = dateObj.getFullYear() + "-" + dateObj.getMonth() + "-" + dateObj.getDate() + "--" + dateObj.getHours() + ":" + dateObj.getMinutes() + ":" + dateObj.getSeconds() + ":" + dateObj.getMilliseconds();
    res.render("index", {date: date});
});
app.listen(port, function() {
    console.log("listening on port " + port);
});