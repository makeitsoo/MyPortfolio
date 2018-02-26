//link to firebase
var dataRef = new Firebase("https://the-lisa-battle.firebaseio.com/");

//collects the input from the signup form
function contactSubmission () {

	// var name = "";
	// var email = "";
	// var message =""
	// var dateAdded = "";

	$("#contact").click(function(){
		var name = $("#nameInput").val().trim();
		var email = $("#emailInput").val().trim();
		var message = $("#messageInput").val().trim();
		var dateAdded="";

//sets it to firebase
			dataRef.push({
				name: name,
				email: email,
				message: message,
				dateAdded: Firebase.ServerValue.TIMESTAMP				

	});

});


//clear out the entries after push
$("#nameInput").val("")
$("#emailInput").val("")
$("#messageInput").val("")

//firebase watcher + initial loader
dataRef.on("value", function(snapshot){
	console.log(snapshot.val());
}, function(errorObject){

	console.log("Errors handled: " + errorObject.code)

}); 

return false;
};

contactSubmission();

// $("#contact").click(function() {

	

// 	return false;

// });


