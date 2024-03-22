// function prinatNmae () {
//     console.log("Binay");
//     console.log("Bhusan");
// }

// prinatNmae();

// function rollDice() {
//     let rand = Math.floor( Math.random() * 6 ) + 1;
//     console.log(rand);
// }

// rollDice();

// function printGame(game) {
//     console.log(game);
// }

// printGame("cricket");

// function calAvg(a, b, c) {
//     let avg = (a+b+c)/3;
//     console.log(avg);
// }

// calAvg(3, 5, 8);

// function printTable(n) {
//     for( let i=n; i<=n*10; i+=n){
//         console.log(i);
//     }
// }

// printTable(2);

// function sumCalculate(a, b) {
//     return a+b;
// }

// console.log(sumCalculate(sumCalculate(3,4),7 ));

// function getSum(n) {
//     let sum = 0;

//     for(let i=1; i<=n; i++) {
//         sum += i;
//     }

//     return sum;
// }


// let str = ["hi", "bye", "go", "there"];

// function misana(str) {
//     let result = "";

//     for( let i=0; i<str.length; i++) {
//         result  += str[i];
//     }

//     return result;
// }

// let diff = function (a, b) {
//     return a - b;
// }

// function multipleGreet( func, count) {
//     for( let i=1; i<=count; i++ ) {
//         func();
//     }
// }

// let greet = function() {
//     console.log("namaste");
// }

// multipleGreet(greet, 7);

// function oddOrEvenFactory(request) {
//     if( request == "odd") {
//         return function(n) {
//             console.log(!(n%2==0));
//         }
//     } else if( request == "even") {
//         return function(n) {
//             console.log(n%2==0);
//         }
//     } else {
//         console.log("wrong request");
//     }
// }

// let request = "odd";

// const calculater = {
//     add(a, b) {
//         return a+b;
//     },
//     sub(a, b) {
//         return a-b;
//     },
//     mul(a, b) {
//         return a*b;
//     }
// }

// let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];

// let num = 6;

// function getElements(arr, num) {
//     for(let i=0; i<arr.length; i++) {
//         if(arr[i] > num) {
//             console.log(arr[i]);
//         }
//     }
// }

// getElements(arr, num);

let str = "abcdabcdefgggh";

function getUnique(str) {
    let ans = "";

    for(let i=0; i<str.length; i++) {
        let currCha = str[i];

        if(ans.indexOf(currCha) == -1) {
            ans += currCha;
        }
    }

    return ans;
}

getUnique(str);