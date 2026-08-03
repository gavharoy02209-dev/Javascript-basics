function yuborish(){
let age=document.getElementById('age').value*1;
if(age < 18){
    document.getElementById('result').innerHTML='Siz voyaga yetmagansiz';
} else if(age === 18){
    document.getElementById('result').innerHTML='Siz aynan 18 yoshdasiz';
} else {
    document.getElementById('result').innerHTML='Siz voyaga yetgansiz'
}
}
function chiqar(){
let date= new Date();
let day = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();
    document.getElementById('date').innerHTML=('Bugun: ' + day + '.' + month + '.' + year);
}
function compare(){
    let a=document.getElementById('son').value*1;
    let b=document.getElementById('son1').value*1;
    let max=Math.max(a,b);
    if(a>b){
        document.getElementById('compare').innerHTML='A son katta: '+ a;
    } else if(b>a){
        document.getElementById('compare').innerHTML='B son katta: ' + b;
    } else{
        document.getElementById('compare').innerHTML='sonlar teng';
    }
    
}