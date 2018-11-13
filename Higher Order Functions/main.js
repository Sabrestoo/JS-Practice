const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1897, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 1, 15, 45, 25, 64, 32];

// const cat = companies
//   .filter(company => company.category === "Retail")
//   .map(name => name.name);

// console.log(cat);

//Showing higher order functions use with basic example then higher order example
// //Basic for loop
// for (var i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// //ForEach - loop through an array
// companies.forEach(function(company) {
//   console.log(company.name);
// });

// //filter
// //Basic for loop
// //declare empty variable to hold valid ages
// let canDrink = [];
// for (var i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }
// const canDrink = ages.filter(function(age) {
//   if (age >= 21) {
//     return true;
//   }
// });

// //Arrow function version
// const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink);

// // More filter examples
// // Filter retail companies
// const retailCompanies = companies.filter(function(company) {
//   if (company.category === "Retail") {
//     return true;
//   }
// });

// //Arrow function version
// const retailCompanies = companies.filter(
//   company => company.category === "Retail"
// );

// console.log(retailCompanies);

// //Filter companies started in 80's
// const eightiesCompanies = companies.filter(function(company) {
//   if (company.start > 1979 && company.start < 1990) {
//     return true;
//   }
// });

// //Arrow function version
// const eightiesCompanies = companies.filter(
//   company => company.start > 1979 && company.start < 1990
// );
// console.log(eightiesCompanies);

// const moreThanTen = companies.filter(
//   company => company.end - company.start >= 10
// );
// console.log(moreThanTen);

//map
//Create array of company names
// const companyNames = companies.map(function(company) {
//   return company.name;
// });

// const testMap = companies.map(function(company) {
//   return `${company.name} [${company.start} - ${company.end}]`;
// });

//Arrow function with back tick template string
// const testMap = companies.map(
//   company => `${company.name} [${company.start} - ${company.end}]`
// );

// console.log(testMap);

// const agesSquare = ages.map(age => Math.sqrt(age)).map(age => age * 2);
// console.log(agesSquare);

//sort
// const sortedCompanies = companies.sort(function(c1, c2) {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// console.log(sortedCompanies);

// //Same as above arrow version
// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(sortedCompanies);

// //Sort numbers
// const sortAges = ages.sort((a, b) => a - b);

// console.log(sortAges);

//reduce

//For loop version without reduce()
// let ageSum = 0;
// for (var i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

// const ageSum = ages.reduce(function(total, age) {
//   return total + age;
// }, 0);

//Arrow function version
// const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);

//Get total years for all companies -DON'T FORGET THE SECOND ZERO AT END OF FUNCTION
// const totalYears = companies.reduce(function(total, company) {
//   return total + (company.end - company.start);
// }, 0);

//Arrow function version
// const totalYears = companies.reduce(
//   (total, company) => total + (company.end - company.start),
//   0
// );
// console.log(totalYears);

//Example of combined method from above

// const combinedAges = ages
//   .map(age => age * 2)
//   .filter(age => age >= 40)
//   .sort((a, b) => a - b)
//   .reduce((a, b) => a + b, 0);
// console.log(combinedAges);

// let statues = [4, 3, 2, 8];

// function makeArrayConsecutive2(statues) {
//   let sortedArray = statues.sort(function(a, b) {
//     return a - b;
//   });
//   console.log(statues);
//   let counter = sortedArray[0];

//   for (var i = 0; i < sortedArray.length; i++) {
//     if (sortedArray[i] != counter) {
//       sortedArray.splice(i, 0, counter);
//       counter++;
//     } else {
//       counter++;
//     }
//   }

//   return statues.length;
// }

// console.log(makeArrayConsecutive2(statues));
