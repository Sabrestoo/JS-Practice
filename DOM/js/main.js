//Examine the Document Object

//console.dir(document);

//console.log(document.);

//Selectors
//GETELEMENTBYID

// var items = document.getElementsByClassName("list-group-item");
// console.log(items);

// for (item of items) {
//   item.style.backgroundColor = "red";
//   item.style.color = "#fff";
// }

//BYTAGNAME
// var items = document.getElementsByTagName("li");

// for (item of items) {
//   item.style.backgroundColor = "#044";
// }

//QUERYSELECTOR
// var header = document.querySelector("#main-header");

// header.style.borderBottom = "solid 4px grey";

// var input = document.querySelector("input");

// input.value = "Hello World";

// //Using type for when more than 1 of type
// var submit = document.querySelector("input[type='submit']");

// submit.value = "SEND";

// //First item
// var item = document.querySelector(".list-group-item");
// item.style.color = "red";

// //last item
// var lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "blue";

// //numbered item
// var secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.color = "green";

//QUERYSELECTORALL

// var title = document.querySelectorAll(".title");
// title[0].textContent = "Hello";

// //Odd numbered using css selector
// var odd = document.querySelectorAll("li:nth-child(odd)");

// for (item of odd) {
//   item.style.backgroundColor = "purple";
// }

// TRAVERSING THE DOM //

// var itemList = document.querySelector("#items");
// //parentNode property
// //console.log(itemList.parentNode);

// itemList.parentNode.style.backgroundColor = "lightgrey";

// console.log(itemList.parentNode.parentNode);

//parentElement property
// var itemList = document.querySelector("#items");
//parentNode property
//console.log(itemList.parentNode);

// itemList.parentElement.style.backgroundColor = "lightgrey";

// console.log(itemList.parentElement.parentElement);

//Child nodes

//This will add line breaks to the collection so use .children instead
// console.log(itemList.childNodes);

// console.log(itemList.children);

// console.log(itemList.children[1]);

// itemList.children[1].style.backgroundColor = "red";

//First child also returns line space etc as part of nodeList
//console.log(itemList.firstChild);

//firstElementChild lastElementChild - Does not return space, line breaks as part of list
//console.log(itemList.lastElementChild);

//SIBLINGS

//Next Sibling
//console.log(itemList.nextElementSibling);

//Previous sibling
//console.log(itemList.previousElementSibling);

//CREATE DOM ELEMENTS//

//createElement

// var newDiv = document.createElement("div");

// //Add class to new element
// newDiv.className = "Hello";

// //Add id to new element
// newDiv.id = "Hello1";

// //Add attr
// newDiv.setAttribute("title", "Hello Div");

// console.log(newDiv);
// var newDivText = document.createTextNode("Hello World");

// //Add text to new div
// newDiv.appendChild(newDivText);

// var container = document.querySelector("header .container");
// var h1 = document.querySelector("header .h1");

// container.insertBefore(newDiv, h1);
// newDiv.style.fontSize = "30px";

//EVENTS//
///Ideal way of running functions on html page - use event listener on the element, button etc
//var button = document
//  .getElementById("button")
// .addEventListener("click", buttonClick);

//function buttonClick(e) {
//console.log(e);
//   document.getElementById("header-title").textContent = "Changed";
//   console.log(e.target.classList);
//   var output = document.getElementById("output");
//   output.innerHTML = "<h3>" + e.target.id + "</h3>";
//  //from top of window
//   console.log(e.clientX);
//   console.log(e.clientY);
//   //From actual element
//   console.log(e.offsetX);
//   console.log(e.offsetY);
//   //Check if keys held down - can be used for extra functionality
//   console.log(e.altKey);
//   console.log(e.ctrlKey);
//   console.log(e.shiftKey);
//}

// var button = document.getElementById("button");
// var box = document.getElementById("myDiv");

// //mouseenter and mouse leave fire only on leaving the element, if you hover over a child of the element it will not fire
// //mouseout and mouseover will fire on child elements of the element with the listener
// box.addEventListener("mouseenter", runEvent);
// box.addEventListener("mouseleave", runEvent);

//box.addEventListener("mouseover", runEvent);

//box.addEventListener("mouseleave", runEvent);
//box.addEventListener("mouseout", runEvent);
// button.addEventListener("click", runEvent);
// button.addEventListener("dblclick", runEvent);
// button.addEventListener("mousedown", runEvent);
// button.addEventListener("mouseup", runEvent);

// box.addEventListener("mousemove", runEvent);

// var itemInput = document.querySelector('input[type="text"]');
// var form = document.querySelector("form");
// var select = document.querySelector("select");

// itemInput.addEventListener("keyup", runEvent);
// itemInput.addEventListener("focus", runEvent);

// itemInput.addEventListener("cut", runEvent);
// itemInput.addEventListener("paste", runEvent);

// itemInput.addEventListener("input", runEvent);

// select.addEventListener("change", runEvent);

// form.addEventListener("submit", runEvent);

// function runEvent(e) {
//   e.preventDefault();
//   console.log("EVENT TYPE: " + e.type);

//console.log(e.target.value);

//   output.innerHTML =
//     "<h3>MouseX: " + e.offsetX + "</h3><h3>MouseY: " + e.offsetY + "</h3>";

//   // Use position of mouse to change colour on an element
//   box.style.backgroundColor = "rgb(" + e.offsetX + ", " + e.offsetY + ", 40)";

//   console.log(e.target.value);
//   document.getElementById("output").innerHTML =
//     "<h3>" + e.target.value + "</h3>";
// }

var form = document.getElementById("addForm");
var itemList = document.getElementById("items");

//Form submit event
form.addEventListener("submit", addItem);

//Delete event
itemList.addEventListener("click", removeItem);

//Search event
var filter = document.getElementById("filter");
filter.addEventListener("keyup", filterItems);

function addItem(e) {
  e.preventDefault();

  //Get input value
  var newItem = document.getElementById("item").value;

  //Create new li element
  var li = document.createElement("li");
  //Add class to new element
  li.className = "list-group-item";

  //Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  //Create delete button element
  var delButton = document.createElement("button");

  delButton.className = "btn btn-danger btn-sm float-right delete";

  delButton.appendChild(document.createTextNode("X"));

  li.appendChild(delButton);

  itemList.appendChild(li);
}

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      //Use parent element to select to element containing the delete button, ie, the item
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function filterItems(e) {
  //Convert search text to lower case for comparison
  var text = e.target.value.toLowerCase();
  //Get list items
  var items = itemList.getElementsByTagName("li");
  //Convert HTML collection to array
  Array.from(items).forEach(function(item) {
    var itemName = item.firstChild.textContent;
    //Loop through each item of array and apply style below base on if match
    if (itemName.toLowerCase().indexOf(text) != -1) {
      //Show items if match
      item.style.display = "block";
    } else {
      //Hide items if not match
      item.style.display = "none";
    }
  });
}
