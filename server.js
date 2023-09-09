const express = require("express");
const app = express();
const server = require("http").Server(app);

const port = 3000;
// const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render('index', {});
});

server.listen(port, () => {
    console.log(`Listening on port ${port}`)
})