
//target areas for DOM manipulation and event listeners:
let outputDiv= document.getElementById("output-target");
let artSection= document.getElementsByClassName("article-section");
let h1target = document.getElementById("page-title");

let textarea = document.getElementById("keypress-input");

let guineaPig = document.getElementById("guinea-pig");


// When any section is clicked the output target text should be "You clicked on the {text of the section} section"

for(var i=0; i<artSection.length; i++){
	artSection[i].addEventListener("click", getTextFromSectionOnClick);
	}

function getTextFromSectionOnClick(){

	let content =  event.target.innerHTML;
	outputDiv.innerHTML=`<h3>You clicked the ${content} section.</h3>`
}

// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".

function mouseOverMessage(){
	outputDiv.innerHTML= `You moved your mouse over the header.`
}

h1target.addEventListener("mouseover", mouseOverMessage);

// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
h1target.addEventListener("mouseout", mouseOutMessage);

function mouseOutMessage(){
	outputDiv.innerHTML= `You left me!!`
}

// When you type characters into the input field, the output element should mirror the text in the input field.

textarea.addEventListener("keyup", mirror);

function getText(){
	let textContent = textarea.value;
	return textContent;
}

function mirror(){
	let result =getText();
	outputDiv.innerHTML= `${result}`;
}
// When you click the "Add color" button, the guinea-pig element's text color should change to blue.

//first part targets the button with id of add-color, then adds event listener triggered on click that toggles a class of blue onto guinea pig element?
document.getElementById("add-color").addEventListener("click", function(){
	guineaPig.classList.toggle("blue");
});


// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.

//target individual buttons this way bc there are multiple to choose from:
document.getElementById("make-large").addEventListener("click", function(){
	guineaPig.classList.toggle("hulkify");
});

// When you click the "Capture it" button, the guinea-pig element should have a border added to it.

document.getElementById("add-border").addEventListener("click", function(){
	guineaPig.classList.toggle("border");
});

// When you click the "Rounded" button, the guinea-pig element's border should become rounded.

document.getElementById("add-rounding").addEventListener("click", function(){
	guineaPig.classList.toggle("radius");
})

// The first section's text should be bold.
let articleParent = document.getElementById("article");
articleParent.getElementsByTagName("section")[0].style.fontWeight="bold";

// The last section's text should be bold and italicized.
articleParent.getElementsByTagName("section")[5].style.fontWeight = "bold";
articleParent.getElementsByTagName("section")[5].style.fontStyle ="italic";

// Make the buttons stop appearing next to each other as inline elements. Change them into block elements.

document.getElementById("make-large").style.display = "block";

document.getElementById("add-border").style.display = "block";

document.getElementById("add-rounding").style.display = "block";