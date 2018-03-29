$(function(){
	//Bug Here, not sure why I can't just use .val at the top
	//It'll just return undefined, I think it has something to do with
	//The fact that the server.js is the first thing that is loaded
	var key = $('#key');//document.getElementById('key');
	var val = $('#value');//document.getElementbyId('value');
	var submit = $('#submit');//document.getElementById('submit');

	//submit.addEventListener("click", addData);
	submit.click(function(){
		addData();
		function addData(){
			//Accessing the values
			key = key.val();
			val = val.val();
			console.log(key);
			console.log(val);
			
			$.getJSON("./add/" + key.value + "/" + val.value, response);

			function response(data){
				console.log(data);
			}
		}
	})
});

//Bug Note: 