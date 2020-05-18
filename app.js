const express = require("express");
const app = express();
const path = require('path');
app.set('view engine', 'pug');

const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.render('index');
});

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.status(302).send(`You're good`);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});