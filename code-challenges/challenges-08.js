"use strict";

// Important:
// To solve these challenges you have use (for in ,for of) or (Object.keys ,Object.values, Object.entries )

// Resources:
// for in : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
// for of : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:

// You are given an object that contains name and age of some customers
// Write a function that returns an array of strings that follow the below structure
//
// the string format is "Customer Name :*** *** , Age :**"

// Input:
// {
//     "Romio Joliat": 35,
//     "Mario Ristrova": 39,
//     "Sofia firnando": 50,
// }
//
// Output:
// ["Customer Name :Romio Joliat , Age :35", "Customer Name :Mario Ristrova , Age :39", ... ]


const customerAndAge = (obj) => {
  let arr = []
  for (const key in obj) {
    arr.push(`Customer Name :${key} , Age :${obj[key]}`);

  }
  return arr
}
  // write your code 
  ;
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02
// optional:
//
// Write a function that takes recipe info object and returns an array of recipe info as strings
// as in the example

// Input:
// let recipeInfo = {
//   name: "pizza",
//   ingredients: ["bread", "tomato", "chicken", "mayo"],
//   cookTime: "twoHours",
//   price: "25$",
// };
//
// Output:
// ["name: pizza", "ingredients: bread,tomato,chicken,mayo", "cookTime: twoHours", "price: 25$"]
//
// Note:
// You can solve this challenge by using Object.entries

// write your code

const getEntries = (obj) => {

  return Object.entries(obj).map(([key, value]) => {
    if (Array.isArray(value)) {
      value = value.join(',')
    }
    return `${key}: ${value}`
  })
}




// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:

// Write a function that takes an array of objects (courses) and returns object of 2 new arrays
// first one is containing the names of all of the courses in the data set.
// second one is containing the names of all the students 

const courses = [
  {
    course: 'Java',
    Instructor: 'David',
    Students: ['Lincoln', 'Ruth', 'Briana', 'Suzy', 'Greta'],
    GroupName: 'Stars',
  },
  {
    course: 'JavaScript',
    Instructor: 'Van',
    Students: ['Alphonso', 'Daley', 'Dax', 'Karter', 'Jorja'],
    GroupName: 'Nerd-ware',
  },
  {
    course: 'Python',
    Instructor: 'Delaney',
    Students: ['Barney', 'Kalé', 'Alisha'],
    GroupName: 'Whats-Up',
  },
  {
    course: 'DotNet',
    Instructor: 'Keanna',
    Students: ['Oli', 'Gisselle', 'Pru'],
    GroupName: 'Lol',
  },
];


const getInfo = (courses) => {
  let coursesName = [];
  let studentsName = [];
  // write your code here
for (let i =0; i<courses.length ; i++ ) {
     coursesName.push(courses[i].course)}

  let studentsNameAppArr = []
  for (let i =0 ; i<courses.length ; i++ ) {
     studentsNameAppArr.push(courses[i].Students)}
     
    let studentsArraystr = studentsNameAppArr.join(',')
     studentsName = studentsArraystr.split(',')
      return { coursesName, studentsName };
    };

 // or we can solve it by map method like this : 

// const getInfo = (courses) => {
//   let coursesName = [];
//   let studentsName = [];
//   // write your code here

//   coursesName = courses.map ((obj) => 
//     obj.course)
//     let studentsNameStr = courses.map((obj) => 
//       obj.Students.join(','))
      
//     let studentsArray = studentsNameStr.join(',')
//      studentsName = studentsArray.split(',')
//       return { coursesName, studentsName };
//     };


   

 
    
  
  




  


// -------------------------------------------------------------------------------------------------------

//  ------------------------------------------------------------------------------------------------------
// Challenge 04:
// Optional:

// The Head manager wants to get more organized info about some students, he wants you to find the students from the courses dataset
// and return their info following the below structure
//
// Input: ['Kalé', 'Alisha','Alphonso', 'Briana']
// Output: 
// [
//   {
//     Student: 'Kalé',
//     course: 'Python'
//   },
//   ...
// ]

const getStudents = (arr) => {
  // write your code here
};
//  ------------------------------------------------------------------------------------------------------

module.exports = {
  customerAndAge,
  getEntries,
  courses,
  getInfo,
  getStudents,
};
