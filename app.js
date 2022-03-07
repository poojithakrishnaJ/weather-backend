" use strict"
var express = require('express')
var app = express()
const bodyParser = require('body-parser')
var cors = require('cors')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.listen(3000)
console.log('Node.js Express server is running on port 8000..')
//app.get('/data/2.5/weather',get_weather)
app.get('/v1/weather', get_weather_v1)
app.get('/v1/hello', get_hello)
app.post('/v1/auth', post_auth)

function get_weather_v1(request, response){
  if(request.headers.Authorization == 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlZhbXNoaSIsImlhdCI6MTUxNjIzOTAyMn0.troQfioOFP2aIBVBD5ly_KCHFOY0zlZNMr9bEkvNPuo')
    response.json({"coord":{"lon":-123.262,"lat":44.5646},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"base":"stations","main":{"temp":282.61,"feels_like":282.61,"temp_min":280.58,"temp_max":285.29,"pressure":1018,"humidity":84},"visibility":10000,"wind":{"speed":0.89,"deg":225,"gust":0.89},"clouds":{"all":0},"dt":1642038331,"sys":{"type":2,"id":2040223,"country":"US","sunrise":1642002454,"sunset":1642035291},"timezone":-28800,"id":5720727,"name":"Corvallis","cod":200})
}
function get_hello(request, response){
  if(request.headers.Authorization == 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlZhbXNoaSIsImlhdCI6MTUxNjIzOTAyMn0.troQfioOFP2aIBVBD5ly_KCHFOY0zlZNMr9bEkvNPuo')
     response.json( {"message":"Good morning"} )
}
const fs = require("fs");

function post_auth(req,res){
    
    let usernames = ['Vamshi','Abc','def']
    let passwords = ['123','281','100']
    // const obj = JSON.parse(req.body)
    // let username = obj.username
    // let pwd = obj.password

    
    fs.readFile("application.json", "utf8", (err, jsonString) => {
        if (err) {
          console.log("Error reading file from disk:", err);
          return;
        }
        try {
          const login = JSON.parse(jsonString);
          //res.send(customer)
          if(usernames.includes(login.username)){
            if(passwords.includes(login.password)){
                res.json({ "access token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlZhbXNoaSIsImlhdCI6MTUxNjIzOTAyMn0.troQfioOFP2aIBVBD5ly_KCHFOY0zlZNMr9bEkvNPuo", "expires": new Date()})
            }
        }

        } catch (err) {
          console.log("Error parsing JSON string:", err);
        }
      });
}
