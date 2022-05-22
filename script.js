
var button = document.getElementById("enter");
var userinput = document.getElementById("userinput");
// query selector selects the first available ul tag from the page
var ul = document.querySelector("ul");
var items = ul.getElementsByTagName("li");

function removeParent(event){
	console.log(event);
	var element = event.target.parentNode;
	event.target.removeEventListener("click", removeParent);
	element.remove();
}

function addLineThrough(event){
	console.log(event);
	var element = event.target;
	//toggle adds and removes the delClass to the element whenever it is clicked
	element.classList.toggle("delClass");
}



for(var i = 0; i < items.length; i++){
	var element = items[i];
	element.addEventListener("click", addLineThrough);
	var buttonelement = document.createElement("button");
	buttonelement.innerHTML = "Delete";
	buttonelement.addEventListener("click", removeParent);
	element.innerHTML = element.innerHTML + " ";
	element.appendChild(buttonelement);
}

function getLength(){
	return userinput.value.length;
}

function createListElement(){
	var li = document.createElement("li");
	//createTextNode enters the given text into this li element created
	//have to enter userinput.value to get the value entered in the text box
	li.appendChild(document.createTextNode(userinput.value + " "));
	li.addEventListener("click", addLineThrough);
	ul.appendChild(li);
	var buttonelement = document.createElement("button");
	buttonelement.innerHTML = "Delete";
	buttonelement.addEventListener("click", removeParent);
	li.appendChild(buttonelement);
	//after putting the userinput value into the list, make the text box empty
	userinput.value = "";
}

function addListAfterClick(){
	if(getLength() > 0){
		createListElement();
	}
}

function addListAfterKeyPress(event){
	if(getLength() > 0 && event.keyCode === 13){
		createListElement();
	}
}

//addListAfterClick instead of addListAfterClick(), because it is like adding the reference to the function for event listener without running it..
button.addEventListener("click", addListAfterClick);

//the above eventlistener is to add li to unordered list when the button is clicked
//the below eventlistener is to add li to ul when the enter key is pressed
userinput.addEventListener("keypress", addListAfterKeyPress);
