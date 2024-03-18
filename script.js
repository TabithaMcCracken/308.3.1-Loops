
// console.log('loop start');

// //Count down from 10 to 1
// for (let i = 10; i>=1; i--){
//     console.log(i);
// }
// console.log('loop end')

// //Output odd numbers from 1 to 10
// for(let i = 1; i<11; i+=2){
//     console.log(i);
// }
// console.log('loop end')

// // Output even number from 1 to 10
// for (let i=2; i<11; i += 2){
//     console.log(i);
// }
// console.log('loop end')

// // Output multiples of 3, starting at 6 and ending at 60
// for (let i = 6; i<=60; i+=3){
//     console.log(i);
// }
// console.log('loop end')

// //Output an incrasing number of # symbols, from 1 to 7, as shown below
// for (let i = 1; i<=7; i++){
//     let line = '';
//     for (let j = 1; j <= i; j++) {
//       line += '#';
//     }
//     console.log(line);
// }

// for (let i = '#'; i <= "#######"; i+='#'){
//     console.log(i)
// }

// const str = "Hello World";

// for (let i = 0; i < str.length; i++) {
// 	console.log(str[i]);
// }

// const str = "Hello World";

// for (const i in str) {
// 	console.log(str[i]);
// }

// const str = "Hello World";

// for (const c of str) {
// 	console.log(c);
// }

// const str = "Hello World";

// for (let i = 0; i < str.length; i++) {
// 	if (str[i] == "l") {
// 		continue;
// 	}

// 	console.log(str[i]);
// }

// let x = 30;

// while (x > 0) {
// 	x /= 2;
// 	x--;

// 	if (x % 1 != 0) {
// 		break;
// 	}
	
// 	console.log(x);
// }

// x = 30;

// for (x = x/2 - 1; x >= 0; x = x/2 - 1) {
// 	if (x % 1 != 0) {
// 		break;
// 	}

// 	console.log(x);
// }

// Write while loops to accomplish the following tasks:

// Count down to 0 from a given number.
// let i = 10;
// while (i>=0){
//     console.log(i);
//     i -= 1;
// }




// Log integers in multiples of 3 as long as they are less than 35.

// let i = 0;
// while(i<=35){
//     if (i%3 == 0){
//         console.log(i);
//     }
//     i++;
// }

// Print integers in multiples of 5 as long as they are less than 100.

// let j = 5;
// while (j<=100){
//     console.log(j)
//     j += 5;
// }
// Print integers between 0 and 20 with the following conditions:
// All numbers divisible by 2 should be multiplied by 3 before they are output.
// All other integers should not be output.

// let i = 0;
// while(i<=20){
//     i++;
//     if (i % 2 === 0){
//         console.log(i*3);
//     }
// }

const cost = 4;
const bill = 10;
let quartersReturned = 0;
let change = bill - cost;

while(change>0){
    quartersReturned++;
    change -= 0.25;
    
}
console.log(`Number of quarters: ${quartersReturned}.`)
// Print all prime numbers between 0 and 20.