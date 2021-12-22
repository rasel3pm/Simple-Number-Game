// let randomNumber = Math.trunc(Math.random() * 30) + 1;
// let score = 4;
// let highScore = 0;
// console.log(randomNumber)
// let betwine1to5 = document.querySelector(".one-five");
// let betwine5to10 = document.querySelector(".five-ten");
// let betwine10to15 = document.querySelector(".ten-fifteen");
// let betwine15to20 = document.querySelector(".fifteen-twienty");
// let betwine20to25 = document.querySelector(".twienty-twintyFive");
// betwine1to5.addEventListener("click", function() {
//     if (score > 0) {
//         if (randomNumber === 1 || randomNumber === 2 || randomNumber === 3 || randomNumber === 4 || randomNumber === 5) {
//             document.querySelector(".lets").textContent = "you win";
//             document.querySelector("body").style.backgroundColor = "red"
//             document.querySelector(".number").textContent = randomNumber;

//             if (score > highScore) {
//                 highScore = score
//                 document.querySelector(".high-score").textContent = highScore;
//             }
//         } else {
//             if (score > 1) {
//                 document.querySelector(".lets").textContent = "number not mach";
//                 score--
//                 document.querySelector(".score-num").textContent = score;
//             } else {
//                 document.querySelector(".lets").textContent = "number not mach";
//                 score--
//                 document.querySelector(".score-num").textContent = score;
//             }
//         }
//     }
// });

// betwine5to10.addEventListener("click", function() {
//     if (randomNumber === 6 || randomNumber === 7 || randomNumber === 8 || randomNumber === 9 || randomNumber === 10) {
//         document.querySelector(".lets").textContent = "you win";
//         document.querySelector("body").style.backgroundColor = "red"
//         document.querySelector(".number").textContent = randomNumber;

//         if (score > highScore) {
//             highScore = score
//             document.querySelector(".high-score").textContent = highScore;
//         }
//     } else {
//         document.querySelector(".lets").textContent = "number not mach";
//         score--
//         document.querySelector(".score-num").textContent = score;
//     }
// });

// betwine10to15.addEventListener("click", function() {
//     if (randomNumber === 11 || randomNumber === 12 || randomNumber === 13 || randomNumber === 14 || randomNumber === 15) {
//         document.querySelector(".lets").textContent = "you win";
//         document.querySelector("body").style.backgroundColor = "red"
//         document.querySelector(".number").textContent = randomNumber;

//         if (score > highScore) {
//             highScore = score
//             document.querySelector(".high-score").textContent = highScore;
//         }
//     } else {
//         document.querySelector(".lets").textContent = "number not mach";
//         score--
//         document.querySelector(".score-num").textContent = score;
//     }
// });

// betwine15to20.addEventListener("click", function() {
//     if (randomNumber === 16 || randomNumber === 17 || randomNumber === 18 || randomNumber === 19 || randomNumber === 20) {
//         document.querySelector(".lets").textContent = "you win";
//         document.querySelector("body").style.backgroundColor = "red"
//         document.querySelector(".number").textContent = randomNumber;

//         if (score > highScore) {
//             highScore = score
//             document.querySelector(".high-score").textContent = highScore;
//         }
//     } else {
//         document.querySelector(".lets").textContent = "number not mach";
//         score--
//         document.querySelector(".score-num").textContent = score;
//     }
// });

// betwine20to25.addEventListener("click", function() {
//     if (randomNumber === 21 || randomNumber === 22 || randomNumber === 23 || randomNumber === 24 || randomNumber === 25) {
//         document.querySelector(".lets").textContent = "you win";
//         document.querySelector("body").style.backgroundColor = "red"
//         document.querySelector(".number").textContent = randomNumber;

//         if (score > highScore) {
//             highScore = score
//             document.querySelector(".high-score").textContent = highScore;
//         }
//     } else {
//         document.querySelector(".lets").textContent = "number not mach";
//         score--
//         document.querySelector(".score-num").textContent = score;
//     }
// });

let randomNumber = Math.trunc(Math.random() * 25) + 1;
console.log(randomNumber)
let score = 4;
let highScore = 0;

let betwine1to5 = document.querySelector(".one-five");
let betwine5to10 = document.querySelector(".five-ten");
betwine1to5.addEventListener("click", function() {
    if (score > 0) {
        if (randomNumber === 1 || randomNumber === 2 || randomNumber === 3 || randomNumber === 4 || randomNumber === 5) {
            document.querySelector(".lets").textContent = "You win";
            document.querySelector(".lets").style.backgroundColor = "red"
        } else {
            document.querySelector(".lets").textContent = "Number Not Mach";
        }
    }
})
betwine5to10.addEventListener("click", function() {
    if (score > 0) {
        if (randomNumber === 5 || randomNumber === 6 || randomNumber === 7 || randomNumber === 8 || randomNumber === 9) {
            document.querySelector(".lets").textContent = "You win";
            document.querySelector("body").style.backgroundColor = "tomato"
        } else {
            document.querySelector(".lets").textContent = "Number Not Mach";
        }
    }
})