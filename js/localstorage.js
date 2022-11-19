(function(){

  // store items in variables
  let getName = document.getElementById("get-name");
  let userName = document.getElementById("user-name");
  let nameStored = localStorage.name;

  if(nameStored) {
    // store the field with the entered in name
    userName.value = `${nameStored}`;
  }
  else {
    // if nothing has been saved to localstoarge previously
    userName.value = "Enter here";
  }

  function Save() {
    if(userName.value === "") {
      alert("Please enter your details");
      userName.focus();
    }
    // get the text the user has entered
    nameStored = userName.value;

    // display the info in textbox
    userName.value = nameStored;

    // put the info into localStorage:
    localStorage.name = nameStored;

	// alert user when data is saved
	alert("Your profile has been saved");

    return false;
  }

  function clearData() {
    localStorage.clear();
	alert("Your profile has been deleted");
  }

  // Listens for a form submit action:
  if (typeof event === "undefined") {
    getName.onsubmit = Save; //firefox
  }
  else {
    getName.addEventListener("submit", Save);
    event.preventDefault();
  }
  // Chrome Only
  getName.addEventListener("reset", clearData);

}());
