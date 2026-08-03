// let number=['5','10','15','20','25'];

// for(let i=0; i<number.length; i++){
    
//     document.write(number[i] + '<br>');
// }
// let number =[1,2,3,4,5,6,7,8,9,10];
// function show(number){
//     for(let i=0; i<number.length; i++)
//         document.write(number[i]+ '<br>');
// }
// show(number);

// let arr =[1,2,3,4,5,6,7,8,9,10];
// function show(arr){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] % 2 !==0){
    
//         document.write(arr[i]+ '<br>');
//         }
//     }
// }
// show(arr);

// let n = [1,2,3,4,5,6,7,8,9,10];

// function show(arr){
//     let result=0;
//     for(let i=0; i<arr.length; i++){
//     result+=arr[i];
//     }
//     document.write(result);
// }
// show(n);

// let arr = [1,2,3,4,55,5,6,7,8,9,10];
// function show(arr){
//     let max = arr[0];
//     for(let i=1; i<arr.length; i++){
//        if(arr[i]> max){
//         max=arr[i];
//        }
        
//     }
//     document.write(max + '<br>');
// }
// show(arr);

// modern JS task 1
// let arr =[1,2,3,4,5];
// let result= arr.map(item=>item*3);
// document.write(result);

let arr=[10,15,20,25,30];
let result = arr.filter(item=>item>20);
console.log(result);

//task 2
let name=['Ali', 'Vali','Guli'];
name.forEach(item=>document.write('Salom' + " "+ item + "<br>") 
);

//task 3

// let products = [10000,20000,15000,30000];
// let price = products.map(item=>item + 5000);
// console.log(price);

//task 4
// let products = [10000,20000,15000,30000];
// let show = products.filter(item=>item>20000);
// console.log(show);


//task 5

let products=[10000,20000,15000,30000];
let show=products.forEach(item=>document.write('Price: ' + item + '<br>'));
