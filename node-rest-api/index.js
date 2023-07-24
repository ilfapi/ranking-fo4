const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const PORT = process.env.PORT || 80;

// route mặc định
app.get('/', function (req, res) {
    return res.send({ status: "successful", payload : {}, message: 'API PULIC'} )
});
// chỉnh port
app.listen(PORT, function () {
    console.log(`Node app is running on port ${PORT}`);
});

app.get("/api/hof/get", (req, res) => {
    var query = req.body;
    var config = {
        method: "GET",
        url: "https://ranking.fo4.garena.vn/api/hof/get",
    };

    axios(config)
        .then(function (response) {
            res.status(200).send(JSON.stringify(response.data));
        })
        .catch(function (error) {
            res.status(400).send({ status: "fail" });
        });
});

app.get("/api/game/get", (req, res) => {
    var query = req.body;
    var config = {
        method: "GET",
        url: "https://ranking.fo4.garena.vn/api/game/get",
    };

    axios(config)
        .then(function (response) {
            res.status(200).send(JSON.stringify(response.data));
        })
        .catch(function (error) {
            res.status(400).send({ status: "fail" });
        });
});

app.post("/api/user/search", (req, res) => {
    
    let data = JSON.stringify({
        "mode": req.body.mode,
        "month": req.body.month,
        "text": req.body.text,
    });

    var config = {
        method: "POST",
        maxBodyLength: Infinity,
        headers: { 
            'Content-Type': 'application/json'
        },
        url: "https://ranking.fo4.garena.vn/api/user/search",
        data: data
    };

    axios(config)
        .then(function (response) {
            res.status(200).send(JSON.stringify(response.data));
        })
        .catch(function (error) {
            res.status(400).send({ status: "fail" });
        });
});

module.exports = app;