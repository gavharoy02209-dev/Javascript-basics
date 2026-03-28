// task 1

// let k = 5;
// let n = 3;
// for(let i = 1; i<=n; i++){
//     document.write(k + " ");
// }

// task 2
// let a =prompt(' Enter a');
// let b = prompt('Enter b');
// a *=1;
// b *=1;
//     for(let i= a + 1; i<b; i++){
//         document.write(i+ " ");

// }
  
//task 3

// let a = prompt('Enter a');
// let b = prompt('Enter b');
// a *=1;
// b *=1;
// for (let i= b-1; i>a; i--){
//     document.write(i + " ");
// }
 
// task 4

// let kilo = 10000;
// let sum = 0;
// for(let i = 1; i<=10; i ++){
//     sum = i * kilo;
//     document.write(i + ' kg ' + sum + "<br>");
// }

// Task 5

// let kilo = 1000;
// let sum = 0;
// for(let i = 1; i<=10; i ++){
//     sum = i * kilo;    
//     document.write(i/10 + ' kg ' + sum + "<br>");
// }


// Task 6

// let kilo = 10000;
// let sum = 0;
// for(let i =12; i<=20; i +=2){
//    let sum = (i / 10) * kilo;    
//     document.write(i/10 +' kg-' + sum + "sum <br>");
// }

// Task 7

// let a =prompt('Enter number a');
// let b =prompt('Enter number b');
// a *=1;
// b *=1;
// let sum = 0;
// for(let i = a; i<=b; i++){
//   sum  += i;
// }
//     document.write('Result ' + sum +  "<br>");

// Task 8

// let a =prompt('Enter number a');
// let b =prompt('Enter number b');
// a *=1;
// b *=1;
// let sum = 1;
// for(let i = a; i<=b; i++){
//   sum  *= i;
// }
//     document.write('Result ' + sum +  "<br>");

// Task 9

// let a =prompt('Enter number a');
// let b =prompt('Enter number b');
// a *=1;
// b *=1;
// let sum = 0;
// for(let i = a; i<=b; i++){
//   sum +=i**2;
// }
//     document.write('Result ' + sum +  "<br>");

// Task 10

// let n=prompt('Enter number n');
// n *=1;
// let s = 0;
// for(let i=1; i<=n; i++){
//     s +=1/i;
// }
//     document.write(s);

// Task 11

// let n = 10;
// for(let i=0; i<=n; i++){
//     if( i%2 ===0){
//         continue;
//     }
//     document.write(i + ' <br>');
// }

// Task 12

// let n=prompt('Enter number');
// for(let i=0; i<=n; i++){
//     if(i%2 !== 0){
//         continue;
//     }
//     document.write(i + ' <br>');
// }

let n=prompt('Enter number');
for(let i=2; i<=n; i+=2){    
    document.write(i + ' <br>');
}
