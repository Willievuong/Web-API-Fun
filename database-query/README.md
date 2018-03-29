# database-query

Maybe not an actual datbase query? I'm just doing a bit of practice on sending GET/POST using REST architecture.

## Technology: 
	- Static HTML/JS 
	- JQuery
	- Express.js
	- Node.js
	- REST

## Run Instruction:
	1. Enter a key/value pair
	2. Submit
	3. Check status via console log or localhost:3000/all to see if data was correctly entered 

## Known Problems:
	1. In script.js, I'm not sure why "var key = $('#key').val()" returns null if I include it at the top, hence I needed to access the value inside the click function. I suspect it has to do with the script being run once via server.js? 