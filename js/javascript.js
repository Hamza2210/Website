// variable for images
var myIndex = 0;
gallery();

// slideshow images function within the about me page
function gallery() {
// var for index
var i;
// get the images within imageSlides div
var x = document.getElementsByClassName("imageSlides");
// execute a for loop
for (i = 0; i < x.length; i++) {
x[i].style.display = "none";
  }
// increment the index
myIndex++;
if (myIndex > x.length) {myIndex = 1}
x[myIndex-1].style.display = "block";
// change image every two seconds
setTimeout(gallery, 2000);
}
