// JavaScript Document
var database = firebase.database();
var orderRef = database.ref('order');

alert("test")

function loopForm(form) {
	submit_button.enable;
	alert ("Is your order correct");
	var sandwhichOrder = [];
	for (var i = 0; i < form.elements.length; i++ ) {
		if (form.elements[i].type == "radio" ) {
			if (form.elements[i].checked) {
				sandwhichOrder. push(form.elements[ i ].value );
			}
		}
		if (form.elements [ i ].type == 'checkbox') {
			if (form.elements[i].checked) {
				sandwhichOrder.push(form.elements[i].value + ' ');
				alert(sandwhichOrder); //test alert
			}
		}	

	}	

	checkInputs(sandwhichOrder);
}
function checkInputs(sandwhichOrder){
	var customer_name=customers_name.value;
	var phone_number=customers_number.value;
	alert("In check name funtion");
	if(document.getElementById("customers_name").validity.patternMismatch){
		alert("Please enter a valid name");
		return;
	}
	if(document.getElementById("customers_number").validity.patternMismatch){
		alert("Please enter a valid number");
		return;
	}else{
		
		alert(customer_name + phone_number);
		alert("test")
		document.getElementById("radioResults").innerHTML = "name: " + customer_name + " " + "cell_number: " + phone_number;
		document.getElementById("radioResults").innerHTML= "Sandwhich order:" + sandwhichOrder;
		sendData(customer_name,phone_number,sandwhichOrder);
		
	}
	
}

function sendData(customer_name,phone_number,sandwhichOrder){
		var data = {
		sandwhich:sandwhichOrder,
		name:customer_name,
		cell_number:phone_number
	}
	
	orderRef.push( data );
	alert("data has been stored, end of program");
	document.getElementById('confirmOverlay').style.height = "100%";
	setTimeout(function() {
			location.reload();
		},	3000);
	submit_button.disable;
}
