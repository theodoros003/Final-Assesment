var image;
var link;

//main function runs on page load
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
	
	link = document.getElementById("contactPage");
	link.addEventListener("click", contactLink);
	link = document.getElementById("homePage");
	link.addEventListener("click", homeLink);
	link = document.getElementById("orderPage");
	link.addEventListener("click", orderLink);
	
	var form = document.getElementById("orderForm");
	form.addEventListener("change", formChanged);
	form.addEventListener("submit", validateForm);
	
	window.onscroll = function() {
		scrollFunction()
	};
}
function validateForm(event){
	var formValid = true;
	var valid = document.getElementById("selectPizza");
	
	if (valid.address.value == ""){
		formValid = false;
		document.getElementById("addressLine").style.display="block";
		event.preventDefault();
	}
	else {
		document.getElementById("addressLine").style.display="none";
	}
	if (valid.postcode.value == ""){
		formValid = false;
		document.getElementById("postcode").style.display="block";
		event.preventDefault();
	}
	else {
		document.getElementById("postcode").style.display="none";
	}
}

function formChanged(event){
	var form = document.getElementById("selectPizza");
	var total = 0;
	var choices = "";
	var itemPrice = 0;
	
	var total2 = 0;
	var choices2 = "";
	var itemPrice2 = 0;
	
	var total3 = 0;
	var choices3 = "";
	var itemPrice3 = 0;
	
	for(var i = 0; i < form.size.length; i++){
		if (form.size[i].checked){
            itemPrice = parseFloat(form.size[i].dataset.price );
            total = total + itemPrice;
            choices = choices + form.size[i].dataset.humanDesc + " - £" + itemPrice  +  "<p>";
         }
	}
	for(var i = 0; i < form.extra.length; i++){
		if (form.extra[i].checked){
            itemPrice2 = parseFloat(form.extra[i].dataset.price );
            total2 = total2 + itemPrice2;
            choices2 = choices2 + form.extra[i].dataset.humanDesc + " - £" + itemPrice2  +  "<p>";
         }
	}
	for(var i = 0; i < form.topping.length; i++){
		if (form.topping[i].checked){
            itemPrice3 = parseFloat(form.topping[i].dataset.price );
            total3 = total3 + itemPrice3;
            choices3 = choices3 + form.topping[i].dataset.humanDesc + " - £" + itemPrice3  +  "<p>";
         }
	}
	document.getElementById("choices").innerHTML = choices + choices3 + choices2; 
    document.getElementById("price").innerHTML ="Total: £" + (total+total2+total3);
	
	
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

function checkTime(i) {
    if (i < 10) {i = "0" + i}  // add zero in front of numbers < 10
    return i;
}