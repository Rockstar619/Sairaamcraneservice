const express = require("express");
const app = express();

app.use(express.static("public"));



// Serve the index page at the root
app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
});
app.get("/ourworks", (req, res) => {
    res.sendFile(`${__dirname}/public/ourworks.html`);
});






const port = process.env.PORT || 8080;
app.listen(port ,()=>{
    console.log(`app is running at ${port}`);
    });
    