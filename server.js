const express = require('express')  
const app = express()  
const port = 3000
var bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.listen(port, function(err) {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`Magic is happening on ${port}`)
});



app.get('/todo-app', function(request, response) {  
  response.send('Hello from Express!');
  console.log('route succesfully getting hit');
});


var allTodos = [{
	"description" : "feed the dog",
	"due date" : "7/5/17",
	"ID" : 1,
},

{
	"description" : "wash the dishes",
	"due date" : "7/6/17",
	"ID" : 2,
},

{
	"description" : "take out the trash",
	"due date" : "7/7/17",
	"ID" : 3,
},]



app.get('/get-allTodos', function(request, response){
	response.send(allTodos);
	console.log('this route is being hit');
});

app.post('/post-newTodos', function(request, response){
	// console.log(request.body);
	
	var newTodo = request.body;
	allTodos.push(newTodo);
	console.log(allTodos);
	//console log request.body (make sure you're gettign the args from postman)
	//saving the object to your array of objects
	//
 



	//response.send(request.body);
	// console.log('this route is being hit');
});