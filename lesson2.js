// Task- 1 === Switch/case ===

// let son = prompt('sonni kiriting');
// switch (son) {
//     case '1':
//         document.write('Birinchi'); break;
//     case '2':
//         document.write('Ikkinchi');break;
//     case '3':
//         document.write('Uchinchi');break;
//      default:
//         document.write("Noma'lum");break;  


//     }
//     console.log(son);


// Task-2 === For/continue ===


// for(i = 1; i <= 20; i ++) {
//     if (i % 3 === 0){
//     continue;
//     }
//     document.write(i + " ");
// }


// Task - 3 === Combined ===

// let kunlar = [ 'Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba', 'Yakshanba'];
// for(let i = 0; i< kunlar.length; i ++){
//     let kun = kunlar[i];
//     switch(kun){
//         case 'Dushanba':
//         case 'Seshanba':
//         case 'Chorshanba':
//         case 'Payshanba':
//         case 'Juma':
//             document.write(kun + " - Ish kuni <br>"); break;
//         case 'Shanba':
//         case 'Yakshanba':
//             document.write(kun + " - Damolish kuni <br>"); break;
//     }

// }

// let ism = prompt('Ism kiriting');
// let ismlar = ['Ali', 'Vali', 'Sardor', 'Jasur', 'Malika'];

//       switch(ism) {
//             case 'Ali':
//                 document.write("Ali — Dasturchi"); break;
//             case 'Vali':
//                 document.write("Vali — Dizayner"); break;
//             case 'Sardor':
//                 document.write("Sardor — Muhandis"); break;
//             case 'Jasur':
//                 document.write("Jasur — Shifokor"); break;
//             case 'Malika':
//                 document.write("Malika — O'qituvchi"); break;
//             default:
//                 document.write("Noma'lum odam");           
//  }
        
// Tasks for swich/case 
// 1- task.


// let n = prompt('Enter weekdays');
// switch(n){
//     case 'Monday':
//         document.write("1- day " + n);break;
//     case 'Tuesday':
//         document.write("2- day " + n);break;
//     case 'Wednesday':
//         document.write("3- day " + n);break;
//     case 'Thursday':
//         document.write("4- day " + n);break;
//     case 'Friday':
//         document.write("5- day " + n);break;
//     case 'Saturday':
//         document.write("6- day " + n);break;
//     case 'Sunday':
//         document.write("7- day " + n);break;
//     default:
//         document.write("Invalid day!");break;
// }

// 2-task 

// for(let k=1; k<=5; k++){

// switch(k){
//     case 1:
//         document.write(k + "- yomon <br>");break;
//     case 2:
//         document.write(k + "- qoniqarsiz  <br>");break;
//     case 3:
//         document.write(k + "- qoniqarli <br>");break;
//     case 4:
//         document.write(k + "- yaxshi <br>");break;
//     case 5:
//         document.write(k + "- a'lo <br>");break;        
// }

// }

// 3-task


// let n =prompt("Oy raqamlarini kiriting");
// n *=1;
// switch(n){
//     case 12:
//     case 1:
//     case 2:
//         document.write(" Winter");break;
//     case 3:    
//     case 4:
//     case 5:
//         document.write(" Spring");break;    
//     case 6:    
//     case 7:
//     case 8:
//         document.write(' Summer');break;    
//     case 9:    
//     case 10:    
//     case 11:    
//         document.write(" Autumn");break
      
//         default:
//         document.write('invalid month <br>');break;  

//     }

// 4-task 

// let n = prompt('Enter the number of month');
// n *=1;
// switch(n){
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         document.write(' these months have 31 days');break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         document.write(' these months have 30 days');break;
//     case 2:
//         document.write('February has 28 or 29 days');break;
//         default:
//             document.write('Invalid month');
// }

// 5-task

// let a = prompt('asonni kiriting');
// let b =prompt('b sonni kiriting');
// a *=1;
// b *=1;
// let amal = prompt('amalni kiriting');
// let sum = 0;
// switch(amal){
//     case '+': sum = a + b; break;
//     case '-': sum = a - b; break;
//     case '*': sum = a * b; break;
//     case '/': sum = a / b; break;
//         default:
//         document.write("bunday amal yo'q");
// }
//     document.write("natija" + sum);

// 6-task

let baho = prompt('Enter your grade');
baho *=1;
switch(baho){
    case 2: 
        document.write("You don't have a scholarship"); break;
    case 3: 
    document.write("Your scholarship is 600 000 sum"); break; 
    case 4:
    document.write("Your scholarship is 800 000 sum");break;
    case 5: 
    document.write("Your scholarship is 1 000 000 sum");break;
    default:
        document.write(" Invalid grade"); break;

}
