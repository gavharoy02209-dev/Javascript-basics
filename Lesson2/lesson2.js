// Task- 1 === Switch/case ===

// let number = prompt('Enter number');
// switch (number) {
//     case '1':
//         document.write('First'); break;
//     case '2':
//         document.write('Second');break;
//     case '3':
//         document.write('Third');break;
//      default:
//         document.write("Unknown");break;  


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

// let days = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// for(let i = 0; i< days.length; i ++){
//     let day = days[i];
//     switch(day){
//         case 'Monday':
//         case 'Tuesday':
//         case 'Wednesday':
//         case 'Thursday':
//         case 'Friday':
//             document.write(day + " - Workday <br>"); break;
//         case 'Saturday':
//         case 'Sunday':
//             document.write(day + " - Weekend <br>"); break;
//     }

// }

// let name = prompt('Enter name');
// let names = ['Ali', 'Vali', 'Sardor', 'Jasur', 'Malika'];

//       switch(name) {
//             case 'Ali':
//                 document.write("Ali — Developer"); break;
//             case 'Vali':
//                 document.write("Vali — Designer"); break;
//             case 'Sardor':
//                 document.write("Sardor — Engineer"); break;
//             case 'Jasur':
//                 document.write("Jasur — Doctor"); break;
//             case 'Malika':
//                 document.write("Malika — Teacher"); break;
//             default:
//                 document.write("Unknown");           
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
//         document.write(k + "- Fail <br>");break;
//     case 2:
//         document.write(k + "- Unsatisfactory  <br>");break;
//     case 3:
//         document.write(k + "- Satisfactory <br>");break;
//     case 4:
//         document.write(k + "- Good <br>");break;
//     case 5:
//         document.write(k + "- Excellent <br>");break;        
// }

// }

// 3-task


// let n =prompt("enter number of the month");
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

// let a = prompt(' enter number a');
// let b =prompt('enter number b');
// a *=1;
// b *=1;
// let operation = prompt('enter operation');
// let sum = 0;
// switch(operation){
//     case '+': sum = a + b; break;
//     case '-': sum = a - b; break;
//     case '*': sum = a * b; break;
//     case '/': sum = a / b; break;
//         default:
//         document.write("invalid operation");
// }
//     document.write("result" + sum);

// 6-task

let grade = prompt('Enter your grade');
grade *=1;
switch(grade){
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
