
var express = require('express');
var fs = require('fs');
var cors = require('cors');

var app = express();

app.use(cors());

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
			msg: "A value is required",
			status: "failed"
		}
		response.send(result);
	}else{
		words[key] = value;
		var data = JSON.stringify(words, null, 2);
		console.log("Adding: " + "[" + key + "," + value + "]");
		fs.writeFile('database/data.json', data, writeResult);
		function writeResult(err){
			result = {
				key: key,
				value: value,
				status: "Success"
			}
			response.send(result);
		} 
	}
	//sending(result);
}

//Remove Data
app.get('/remove/:key/:value', remove);

function remove(request, response){
	var data = request.params;
	var key = data.key;
	var value = data.value;
	//var result;
	if(!key){
		result = {
			msg: "a value is required",
			status: "failed"
		}
	}else{
		//Searching for the value
	}
}

//Response Message
//app.get('result', )

//Route to show all data
//function sending(request){
app.get('/all', displayAll);

function displayAll(request, response){
		//Sending the json object to the web
		response.send(words);
}
//}