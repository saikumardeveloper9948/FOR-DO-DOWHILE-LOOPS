// 09/08/2024
// FOR LOOP BASED PROBLEMS

//   problem 1

// squares upto 10

let n=10;
console.log(`squares upto ${n}` )
for(j=1;j<=n;j++){
  console.log(`${j}------> ${j**2}`)
}

//   problem  2
//      sum of numbers divisible by 3  between 1 to 20

let NA = 20;
let sum =0;
for (k=1;k<=NA;k++){
   if(k%3==0){
    sum=sum+k;
   }
}
console.log(`sum of numbers divisible by 3  between 1 to 20 is ${sum}`);



//   problem ----3
//       cubes 1 to 15


let man=15
console.log(`CUBES UPTO ----> ${man}`)
for (l=1;l<=man;l++){
    console.log(`${l} ---->  ${l**3}`)
}




//  -------------DO WHILE LOOP -------------------

//   problem ---4
// ------------------numbers 10-1  reverse------------------
console.log("numbers 10-1  reverse")
let a = 10;
do{
    console.log(a);
a--
}
while(a>=1)



// problem --- 5
//  factorial of number

let num = 12;
let x = 1;
let p = 1;
do {
  p *= x;
  
  x++;
} while (x <= num);
console.log(`factorial of ${num} is ${p}`);

//    problem 6
//     write a program to print numbers from 20 to 1 in reverse order, but only print every other
//    test case input : 20   out put : 20, 18, 16, 14, 12, 10, 8, 6, 4, 2.

let b=20;
do{
    console.log(b);
    b=b-2
}
while( b>1) ;

//   PROBLEM 7
// --------------- WHILE LOOP ---------------------
//      PRINT 1 TO 20 no's which are not divisible by 5

let f=1;
while(f<=20){
    if(!(f%5==0)){
        console.log(f)
    }
    f++
}

// problem 8
//    sum of all no's from 1 to 30 that are divisible by 4

let q=1
let i=30
let value = 0
while(q<=i){
    if(q%4==0){
        value+=q;
    }
    q++;
}
console.log(value)

//   problem 9

//   to print the numbers from 50 - 1 in reverse order. but print only numbers are divisible by 3

let g=50;
while(g>=1){
    if(g%3==0){
        console.log(g);
    }
    g--
}
