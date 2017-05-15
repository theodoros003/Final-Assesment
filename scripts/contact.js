var link;

function main() {
	var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    var t = setTimeout(main, 500);
    document.getElementById('date').innerHTML =
    today.toDateString() + " " + h + ":" + m + ":" + s;
	
	var myForm = document.getElementById("contact");
	myForm.addEventListener("submit", validateForm);
	
	link = document.getElementById("contactPage");
	link.addEventListener("click", contactLink);
	link = document.getElementById("homePage");
	link.addEventListener("click", homeLink);
	link = document.getElementById("orderPage");
	link.addEventListener("click", orderLink);
	
	window.onscroll = function() {
		scrollFunction()
	};
	
}

function orderLink(){
	window.location.href="order.html";
}

function homeLink(){
	window.location.href="index.html";
}

function contactLink(){
	window.location.href="contact.html";
}

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop >20)
	{
		document.getElementById("myBtn").style.display = "block";
	}
	else
	{
		document.getElementById("myBtn").style.display = "none";
	}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

function validateForm(event){
	var formValid = true;
	var myForm = document.getElementById("contact");
	
	if (myForm.firstName.value == ""){
		formValid = false;
		document.getElementById("firstNameError").style.display="block";
		event.preventDefault();
	}
	else {
		document.getElementById("firstNameError").style.display="none";
	}
	
	if (myForm.lastName.value == ""){
		formValid = false;
		document.getElementById("lastNameError").style.display="block";
		event.preventDefault();
	}
	else {
		document.getElementById("lastNameError").style.display="none";
	}
	
	if (myForm.email.value == ""){
		formValid = false;
		document.getElementById("emailError").style.display="block";
		event.preventDefault();
	}
	else {
		document.getElementById("emailError").style.display="none";
	}
	
	if (myForm.message.value == ""){
		formValid = false;
		document.getElementById("messageError").style.display="block";
		event.preventDefault();
	}
	else {
		document.getElementById("messageError").style.display="none";
	}
}
	
function checkTime(i) {
    if (i < 10) {i = "0" + i}  // add zero in front of numbers < 10
    return i;
}
	