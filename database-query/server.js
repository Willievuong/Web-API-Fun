
var express = require('express');
var fs = require('fs');
var app = express();

app.listen(3000, listen);

app.use(express.static('public'));

//Reading file
var data = fs.readFileSync('database/data.json');
var words = JSON.parse(data);

function listen(){
	console.log('server started');
}

//Adding Data
app.get('/add/:key/:value', add);

//Fulfilling the data request
function add(request, response){
	var data = request.params;
	var key = data.key;
	var value = Number(data.value);
	var result; 
	if(!value){
		result = {
			status: "A value is required."
		}
	}else{
		words[key] = value;
		var data = JSON.stringify(words, null, 2);
		console.log("Adding: " + "[" + key + "," + value + "]");
		fs.writeFile('database/data.json', data, writeResult);
		function writeResult(err){
			reply = {
				key: key,
				value: value,
				status: "Success"
			}
		} 
	}
	response.send(result);
}

//Remove Data
app.get('/remove/:key/:value', remove);

function remove(request, response){
}