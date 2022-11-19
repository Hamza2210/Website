// shows the rating score once the corresponding reveal button is clicked

document.getElementById("BleachBtn").addEventListener("click", function(){
    document.getElementById("BleachScore").innerHTML = "8/10 - Great!";
});

document.getElementById("OPBtn").addEventListener("click", function(){
    document.getElementById("OPRating").innerHTML = "10/10 - Must Watch!";
});

document.getElementById("jojoBtn").addEventListener("click", function(){
    document.getElementById("jojoRating").innerHTML = "9/10 - Excellent!";
});
