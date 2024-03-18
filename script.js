
console.log('loop start');

//Count down from 10 to 1
for (let i = 10; i>=1; i--){
    console.log(i);
}
console.log('loop end')

//Output odd numbers from 1 to 10
for(let i = 1; i<11; i+=2){
    console.log(i);
}
console.log('loop end')

// Output even number from 1 to 10
for (let i=2; i<11; i += 2){
    console.log(i);
}
console.log('loop end')

// Output multiples of 3, starting at 6 and ending at 60
for (let i = 6; i<=60; i+=3){
    console.log(i);
}
console.log('loop end')

//Output an incrasing number of # symbols, from 1 to 7, as shown below
for (let i = 1; i<=7; i++){
    let line = '';
    for (let j = 1; j <= i; j++) {
      line += '#';
    }
    console.log(line);
}

for (let i = '#'; i <= "#######"; i+='#'){
    console.log(i)
}

const str = "Hello World";

for (let i = 0; i < str.length; i++) {
	console.log(str[i]);
}