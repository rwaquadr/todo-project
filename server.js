const express = require('express')  
const app = express()  
const port = 3000
var bodyParser = require('body-parser')
var fs = require('fs');

	var obj;
	fs.readFile('data.json', 'utf8', function (err, data){
		if(err){
			throw err
		}
		for(var i = 0; i < allTodos.length; i++){
			// var obj = JSON.stringify(data.json);

			console.log(obj);
		}

		// allTodos = JSON.parse(obj);
		// console.log(data);
	});
	// console.log(obj);
	


 
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
	response.send('helloooo');
	console.log('this route is being hit',allTodos);
});

app.post('/post-newTodos', function(request, response){
	
	
	var newTodo = request.body;
	allTodos.push(newTodo);
	console.log(allTodos);

});	

 app.post('/post-edit', function(request, response){
 	
 	var requestData = request.body;
 	console.log(request.body);

 	for (var i=0; i<allTodos.length; i++){

 		console.log(allTodos[i].ID);
 		if(allTodos[i].ID==requestData.ID){
 			console.log('breaking into if statement');
 			allTodos[i].description = requestData.description;
 			console.log(allTodos[i]);
 			break;
 		}
 	}


 });



	// response.send(request.body);
	// console.log('this route is being hit');