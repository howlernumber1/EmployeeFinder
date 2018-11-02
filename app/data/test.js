// ===============================================================================
// DATA
// Below data will hold all of the previous survey results.
// ===============================================================================

var array1 =
  [{
      "name": "Ahmed",
      "photo": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
      "scores": [
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
    },
   {
    "name": "Jordan B2",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAisAAAAJGUxYzc4YzA0LWQxMzUtNGI4NS04YTFiLTkwYzM0YTZkNzA2NA.jpg",
    "scores": [
      3,
      4,
      5,
      3,
      4,
      5,
      3,
      4,
      5,
      2
    ]
  },
  {
   "name": "Jor2",
   "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAisAAAAJGUxYzc4YzA0LWQxMzUtNGI4NS04YTFiLTkwYzM0YTZkNzA2NA.jpg",
   "scores": [
     1,
     1,
     1,
     1,
     1,
     1,
     1,
     1,
     1,
     1
   ]
 },
    {
      "name": "Jacob Deming",
      "photo": "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
      "scores": [
        4,
        2,
        5,
        1,
        3,
        2,
        2,
        1,
        3,
        2
      ]
    },
    {
      "name": "Jeremiah Scanlon",
      "photo": "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
      "scores": [
        5,
        2,
        2,
        2,
        4,
        1,
        3,
        2,
        5,
        5
      ]
    },
    {
      "name": "Louis T. Delia",
      "photo": "https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg",
      "scores": [
        3,
        3,
        4,
        2,
        2,
        1,
        3,
        2,
        2,
        3
      ]
    },
    {
      "name": "Lou Ritter",
      "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAkDAAAAJDhhZTI5NTk2LWQzZjUtNDJjZi1hMTM2LTQ3ZjNmYjE0YmY2NA.jpg",
      "scores": [
        4,
        3,
        4,
        1,
        5,
        2,
        5,
        3,
        1,
        4
      ]
    },
    {
      "name": "Jordan Biason",
      "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAisAAAAJGUxYzc4YzA0LWQxMzUtNGI4NS04YTFiLTkwYzM0YTZkNzA2NA.jpg",
      "scores": [
        4,
        4,
        2,
        3,
        2,
        2,
        3,
        2,
        4,
        5
      ]
    }
  ];

var array2 = [{
  "name": "Jordan Biason",
  "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAisAAAAJGUxYzc4YzA0LWQxMzUtNGI4NS04YTFiLTkwYzM0YTZkNzA2NA.jpg",
  "scores": [
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5
  ]
}
];

// steps
    // create new array of objects.
    // {name: ahmed,
    // totalDiff: value}
    // loop through first array and push name to new array.
    // compare (subtract) scores of first array with second array.
    // after subtracting and getting absolute value. push value as totalDiff in new array.
    // loop through new array and find lowest number.
    // match name object from new array to array1.
    // return name and photo of object in array1 that matches.




// const myfunction = function (value, index, array) {
//   console.log(value);
// }
// array1.forEach(myfunction);

let array3 =[]


//
// testParse =  [{
//   "name": "test",
//   "score":[
//   5,
//   4,
//   1,
//   3,
//   2,
//   3,
//   1,
//   2,
//   3,
//   4]
// }];

// a.map((x,i)=>x-b[i])
//

// const map1 = array1.map(function (x,i) {
//
//     x - b[i];
//
// });
// for (let i = 0; i < array1[i].scores.length; i++) {
// let sum = 0;
// let score = array1[i].scores;
// let newScore = 0;
// for (let j = 0; j < array2[j].scores.length; i++) {
//   let score2 = array2[j].scores;
// console.log(score);
// console.log(score2);
//   // newScore += Math.abs(array1[j].scores - array2[j].scores)
//   // array3.push(array1[j].name, newScore)
// }
// // console.log(array3);
// };
// scores

//
// let bestMatchScore = 100;
// let bestMatch;
// array1.forEach(function(el1) {
//   matchScore = 0;
//
//   array2.forEach(function(el2) {
//     matchScore += Math.abs(el1.scores - el2.scores)
//     console.log(matchScore);
//     if (matchScore < bestMatchScore) {
//       bestmatchScore = matchScore;
//       bestMatch = el1.name;
//   }
//   })
// console.log(bestMatch);
// })


// let newScore = 0;
// array2.forEach(function(element2) {
//   console.log(parseInt(element1.scores));
  // console.log(`${element2.scores}`);
  // newScore += parseInt(`${element2.scores}`) - parseInt(`${element1.scores}`)

// })
// console.log(newScore);
// array3.push([element1.name, newScore]);




array1.forEach(function(el1) {
  let addVal;
  let addVal2;
  let diff;
  let add = function (a, b) {
    return a + b;
  }

  array2.forEach(function(el2) {
    // console.log(el1.scores);
    // console.log(el2.scores);

    addVal = el1.scores.reduce(add, 0);
    addVal2 = el2.scores.reduce(add,0);

    diff = Math.abs(addVal - addVal2)
    // console.log(addVal);
    // console.log(addVal2);
    console.log(diff);

  });
array3.push([el1.name, el1.photo, diff]);

});
console.log(array3);












// let add = function (a, b) {
//   return parseInt(a) + parseInt(b);
// }
// let addVal = element.scores.reduce((a, b) => parseInt(a) + parseInt(b), 0);


  // console.log(2);
// });
//
// console.log(array3);


//   let totalDiff = 100;
//   let bestMatch;
  // let bestMatchPhoto;
//     for (let i = 0; i < array1[i].scores.length; i++) {
// // console.log(array1[i].scores);
//     // let scoresList = array1[i].scores;
//       let matchScore = 0;
//
//       for (let j = 0; j < array1[j].scores.length; j++) {
//
//         matchScore += Math.abs(array1[j] - array2[j])
//
//         if (matchScore < totalDiff) {
//           totalDiff = matchScore;
//           bestMatch = array1[i].scores;
//         }
//       }
//     }
//     console.log(bestMatch);
//   };
//
// console.log(employeeMatch());

//outside of big loop
// let bestMatchScore = infinity;
// let bestMatch;
// for (/big loop/) {
//   array1
//   array2
//   let matchScore =0;
//   for (let j =-; j < arr1.length; j++) {
//     matchScore += Math.abs(arr1[j] - arr2[j]);
//   }
//   if (matchScore < bestMatchScore) {
//     bestMatchScore = matchScore;
//     bestMatch = employee[i;]
//   }
// }
