'use strict';

var username = prompt('pleas inter your name!');
alert ('Hi  ' + username); 
var met = prompt('have we ever met?');
var a = 0;
function quetion(answer){
    if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
            a = a + 1;
            console.log('correct');
            alert('correct');
        } else if (answer.toLowerCase() === 'no' || answer.toLowerCase() === 'n') {
            console.log('wrong');
            alert('wrong');
        }
        else {
            alert('its a yes or no qustion!');
            var met = prompt('have we ever met?');
        }
}
quetion(met);
// if (met.toLowerCase() === 'yes' || met.toLowerCase() === 'y') {
//     a = a + 1;
//     console.log('correct');
//     alert('correct');
// } else if (met.toLowerCase() === 'no' || met.toLowerCase() === 'n') {
//     console.log('wrong');
//     alert('wrong');
// }
// else {
//     alert('its a yes or no qustion!');
//     //var met = prompt('have we ever met?');
//}
var education = prompt('do you think I am educated?');
quetion(education);
console.log('do you think I am educated?        ' + education);
// if (education.toLowerCase() === 'yes' || education.toLowerCase() === 'y') {
//     a = a + 1;
//     console.log('correct');
//     alert('correct');
// } else if (education.toLowerCase() === 'no' || education.toLowerCase() === 'n') {
//     console.log('wrong');
//     alert('wrong');
// }
// else {
//     alert('its a yes or no qustion!');
//     //var education = prompt('do you think I am educated?');
// } 
var travel = prompt('do you think I traveled before?');
quetion(travel);
console.log('do you think I traveled before?    ' + travel);
// if (travel.toLowerCase() === 'yes' || travel.toLowerCase() === 'y') {
//     a = a + 1;
//     console.log('correct');
//     alert('correct');
// } else if (travel.toLowerCase() === 'no' || travel.toLowerCase() === 'n') {
//     console.log('wrong');
//     alert('wrong');
// }
// else {
//     alert('its a yes or no qustion!');
//     //var travel = prompt('do you think I traveled before?');
// }
var shape = prompt('do you think I am over weighted?');
quetion(shape);
console.log('do you think I am over weighted?   ' + shape);
// if (shape.toLowerCase() === 'yes' || shape.toLowerCase() === 'y') {
//     console.log('wrong');
//     alert('wrong');
// } else if (shape.toLowerCase() === 'no' || shape.toLowerCase() === 'n') {
//     console.log('correct');
//     alert('correct');
//     a=a+1;
// }
// else {
//     alert('its a yes or no qustion!');
//     //var shape = prompt('do you think I am over weighted?');
// }
 var mentalhelth = prompt ('do you think I am syco?');
 quetion(mentalhelth);
console.log('do you think I am syco?            ' + mentalhelth);
// if (mentalhelth.toLowerCase() === 'yes' || mentalhelth.toLowerCase() === 'y') {
//     a = a + 1;
//     console.log('correct');
//     alert ('correct');
// } else if (mentalhelth.toLowerCase() === 'no' || mentalhelth.toLowerCase() === 'n') {
//     console.log('wrong');
//     alert('wrong');
// }
// else {
//     alert('its a yes or no qustion!');
//    // var mentalhelth = ('do you think I am syco?');
// }
var x = 100 ; 


for (var t=4 ; t>=1 ; t-- ){
    var y = prompt ('guess what is my favourit number?  you have '+ t + '  attembts' ); 
    while (y != isNaN){
    y = prompt ('guess what is my favourit number?  you have '+ t + '  attembts' );
 y = parseInt(y);
break;}
if (y==x){
    a=a+1;
    t=0;
}else if (y>x){
    alert ('too high');
}else {
    alert('too low');
}

}  
if (x!=y){
    alert ('my favourit number is 100');} 

var mostLovedCars = ['g class','bmw 720i','brabous 6x6','tesla'];

for (t=6 ; t>=1 ; t--){
    var car = prompt ('guess my favourit car! you have   '+ t +'  attembts!' ); 
    for (var i=0;i<4;i++){
    if (car.toLowerCase() === mostLovedCars[i]){
        a=a+1;
        t = 0;
    
    }}

}
alert ('my favourit cars are:   '+ mostLovedCars);
alert ('you got       ' + a + '/7'); 









