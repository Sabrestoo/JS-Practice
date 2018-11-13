//Arrays

//1 way to create array
var colours = ["Red", "Yellow", "Blue"];

//Another way to create an array

var myColours = new Array("Red", "Yellow", "Blue");

//add to array when know where to add
colours[3] = "green";

//add to array on end of array
colours.push("purple");

var numbers = [1, 2, 5, 4, 8, "Seven", 55];

//Methods
//alert(numbers.length);
//More methods with dot notation
// numbers.sort();
// numbers.reverse();

//Loops
//For loop
// for(var i = 0; i < 10; i++){
//    console.log('Count' + ' ' + i);
// }

//While loop
// var i = 0;
// while(i < 10){
//     console.log(i);
//     i++;
// }

//foreach loop - to work with arrays
// numbers.forEach(function(number){
//     console.log(number);
// });

//Dynamic for loop
// for(var i = 0; i < numbers.length; i++){
//     console.log(numbers[i];
// }

//Conditionals
//If/else statement

// var var1 = 3;
// var var2 = 4;

// if(var1 !== var2){
//     console.log('true');
// }
// else{
//     console.log('false');
// }

//Switch statement
// var fruit = 'Grapes';

// switch(fruit){
//     case "Banana":
//         alert('I hate bananas');
//         break;

//     case "Apple":
//         alert('I love Apples');
//         break;

//     case "Orange":
//         alert('Oranges are ok');
//         break;

//     default:
//         alert('I love all other fruits');
//         break;
// }

//Object Literal - use dot notation

// var person = {
//     firstName: 'Stuart',
//     lastName: 'Summers',
//     age: 35,
//     //array in an object
//     children: ['Kayleigh', 'Stu2'],
//     //Another object in side object
//     address: {
//         street: '555 Something Street',
//         city: 'Boston',
//         state: 'Massachusetts'
//     },
//     //function in an object
//     fullName: function(){
//         return this.firstName + ' ' + this.lastName;
//     }

// }

// console.log(person.fullName());

//Object constructor
// var apple = new Object();
// apple.colour = 'Red';
// apple.shape = 'Round';

// apple.describe = function(){
//     return 'An apple is the colour ' + this.colour + ' ' + 'and is the shape ' + this.shape;
// };

// console.log(apple.describe());

//Constructor pattern - when adding multiples
// function Fruit(name, colour, shape){
//     this.name = name;
//     this.colour = colour;
//     this.shape = shape;

//     this.describe = function(){
//         return 'A '+this.name+' is the colour '+this.colour+' and the shape '+this.shape;

//     }
// }

// var apple = new Fruit('apple', 'red', 'round');

// console.log(apple);

// var melon = new Fruit('Melon','Green','Round');

// console.log(melon.describe());

//Arrays of objects
// var users = [
//     {
//         name: 'John Doe',
//         age: 33
//     },
//     {
//         name: 'Stuart summers',
//         age: '35'
//     },
//     {
//         name: 'Nicole',
//         age: 30
//     }
// ];

// console.log(users[1].name);

//Events

//Change text in an element
//  function changeText(id){
// var heading = document.getElementById('heading');
// heading.innerHTML = 'You clicked';
//  }

//Show/Hide date on click
//     function date(){
//     var time = document.getElementById('time');
//     var result = time.innerHTML.trim();

//         if(result == ''){
//             time.innerHTML = Date();
//         }
//         else{
//             time.innerHTML = "";
//         }
// }

//Forms

function changeBackground(e) {
  var body = document.getElementById("container");
  body.style.backgroundColor = e.value;
}

//form validation
function validateForm() {
  //Return form values - can also use document.getElementById instead
  var firstName = document.forms["myForm"]["firstName"].value;
  var lastName = document.getElementById("lastName").value;

  if (firstName == null || firstName == "") {
    alert("First name is required");
    //Return false to stop form submitting
    return false;
  }

  if (firstName.length < 3) {
    alert("First name must be at least 3 characters");
    //Return false to stop form submitting
    return false;
  }

  if (lastName == null || lastName == "") {
    alert("Last name is required");
    //Return false to stop form submitting
    return false;
  }

  if (lastName.length < 3) {
    alert("Last name must be at least 3 characters");
    //Return false to stop form submitting
    return false;
  }
}
