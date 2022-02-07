// "use strict"

var express = require('express')
var app = express()
app.listen(3000)
console.log('Node.js Express server is running on port 3000...')



const key = "jwt token"


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/v1/auth', (req, res) => {

    console.log("/v1/auth request recieved")

    username = req.body.username
    password = req.body.password
    if (username == "nagireddy" && password == "12345") {
        token = {
            "jwt": key,
            //"expires": expiry 
        }
        res.json(token)

    }
})

app.get('/v1/greetings', function(req, res) {

    res.send('hello');
});

app.get('/data/2.5/weather', get_weather)

function get_weather(request, response) {
    response.json({ "coord": { "lon": -123.262, "lat": 44.5646 }, "weather": [{ "id": 701, "main": "Mist", "description": "mist", "icon": "50n" }], "base": "stations", "main": { "temp": 276.61, "feels_like": 275.29, "temp_min": 275.36, "temp_max": 279.95, "pressure": 1019, "humidity": 80 }, "visibility": 6437, "wind": { "speed": 1.54, "deg": 140 }, "clouds": { "all": 100 }, "dt": 1642392459, "sys": { "type": 2, "id": 2040223, "country": "US", "sunrise": 1642347934, "sunset": 1642381185 }, "timezone": -28800, "id": 5720727, "name": "Corvallis", "cod": 200 })
}