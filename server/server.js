const express = require('express');
const app = express();


app.use(express.urlencoded({extended: true}));
app.use(express.json());

require('./routes')(app);

app.listen(6000, () => {
    console.log("server is running");
});