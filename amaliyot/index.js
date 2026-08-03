// function Hisob(){
//     let number= prompt('Son kiriting');
//     let sum=0;
//     number*=1;
//     for(let i =1; i<=number; i++){
//         for(let j=1; j<=i; j++){
//             if(i% j ==0){
//                 sum++;
//             }
//         }
//         if(sum == 2){
//             console.log(i);
//         }
//         sum=0;
//     }
// }

let img=document.getElementById('img');
function first(){
    let id = document.getElementById('a');
    if(id.checked){
        img.src = '1.jpg';
    } else{
        img.src='';
    }
}
function two(){
    let id = document.getElementById('b');
    if(id.checked){
        img.src = '2.jpg';
    } else{
        img.src='';
    }
}function second(){
    let id = document.getElementById('d');
    if(id.checked){
        img.src = '3.jpg';
    } else{
        img.src='';
    }
}