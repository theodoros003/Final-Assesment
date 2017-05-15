//global var
var image;
var mainImage;
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
	
	image = document.getElementById("rolloverpizza");
	image.addEventListener("mouseover", mouseOver);
	image.addEventListener("mouseout", mouseOut);
	
	mainImage = document.getElementById("mainImg")
	var img2 = document.getElementById("img2");
	img2.addEventListener("click", img2Clicked);
	var img1 = document.getElementById("img1");
	img1.addEventListener("click", img1Clicked);
	var img3 = document.getElementById("img3");
	img3.addEventListener("click", img3Clicked);
	var img4 = document.getElementById("img4");
	img4.addEventListener("click", img4Clicked);
	var img5 = document.getElementById("img5");
	img5.addEventListener("click", img5Clicked);
	
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

function img5Clicked(){
	mainImage.src = "img/main5.jpg";
}

function img4Clicked(){
	mainImage.src = "img/main4.jpeg";
}

function img3Clicked(){
	mainImage.src = "img/main3.png";
}

function img1Clicked(){
	mainImage.src = "img/main1.jpg";
}

function img2Clicked(){
	mainImage.src = "img/main2.jpg";
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

function mouseOver() {
	image.src = "img/pizza2.jpg";
}

function mouseOut() {
	image.src = "img/pizza2gray.jpg";
}

function scrollToTop() {
    window.scrollTo(0, 0);
}