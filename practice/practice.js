function calculate(){
    
let numA=document.getElementById('numA').value *1;
document.getElementById('numA').style.border='2px solid green';
let numB=document.getElementById('numB').value *1;
let operation=document.getElementById('operation').value;
let sum=0;
switch (operation){
    case '+': sum= numA + numB;break;
    case '-': sum= numA - numB;break;
    case '*': sum= numA * numB;break;
    case '/': sum= numA / numB;break;
    case '%': sum= numA % numB;break;
    case '**': sum=numA ** numB;break;
        if(numB === 0){
            document.getElementById('result').innerHTML='Error';
        } else{
            sum=numA / numB;
        } break;
}
document.getElementById('result').innerHTML=sum;

}