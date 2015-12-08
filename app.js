var express = require('express');
var cors = require('cors');
var app = express();

var menu = {"menu": [
  {
  "id": 1,
  "type": "burger",
  "name": "Cheeseburger",
  "price": 10.99
  },
  {
  "id": 2,
  "type": "pizza",
  "name": "Cheese Pizza",
  "price": 9.99
  },
  {
  "id": 3,
  "type": "burger",
  "name": "Hamburger",
  "price": 8.99
  },
  {
  "id": 4,
  "type": "pizza",
  "name": "Pepperoni Pizza",
  "price": 11.99
  },
  {
  "id": 5,
  "type": "pizza",
  "name": "Sausage Pizza",
  "price": 12.99
}]};

app.use(cors());

app.get('/menu', function(req, res){
  res.json(menu);
});

app.listen(3000, function(){
  console.log('Server running on port 3000');
});
