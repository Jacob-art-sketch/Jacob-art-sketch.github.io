// JavaScript Document
var database = firebase.database();
var orderRef = database.ref('order');

alert("test")

function loopForm(form) {
	alert ("Is your order correct");
	var sandwhichOrder = [];
	for (var i = 0; i < form.elements.length; i++ ) {
		if (form.elements[i].type == "radio" ) {
			if (form.elements[i].checked) {
				sandwhichOrder. push(form.elements[ i ].value );
				alert(sandwhichOrder);
			}
		}
		if (form.elements [ i ].type == 'checkbox') {
			if (form.elements[i].checked) {
				sandwhichOrder.push(form.elements[i].value + ' ');
				alert(sandwhichOrder); //test alert
			}
			document.getElementById("radioResults").innerHTML = sandwhichOrder;
		}	

	}	

alert("test")
	var customer_name=customers_name.value;
	var phone_number=customers_number.value;
	alert(customer_name+ phone_number)
	var data = {
		sandwhich:sandwhichOrder,
		name:customer_name,
		cell_number:phone_number
	}
	orderRef.push(data);
	alert("data has been stored ");

}