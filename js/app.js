'use strict';

var username = prompt('pleas inter your name!');
alert ('Hi  ' + username); 
var met = prompt('have we ever met?');
var a = 0;

if (met.toLowerCase() === 'yes' || met.toLowerCase() === 'y') {
    a = a + 1;
    console.log('correct');
    alert('correct');
} else if (met.toLowerCase() === 'no' || met.toLowerCase() === 'n') {
    console.log('wrong');
    alert('wrong');
}
else {
    alert('its a yes or no qustion!');
    //var met = prompt('have we ever met?');
}
var education = prompt('do you think I am educated?');
console.log('do you think I am educated?        ' + education);
if (education.toLowerCase() === 'yes' || education.toLowerCase() === 'y') {
    a = a + 1;
    console.log('correct');
    alert('correct');
} else if (education.toLowerCase() === 'no' || education.toLowerCase() === 'n') {
    console.log('wrong');
    alert('wrong');
}
else {
    alert('its a yes or no qustion!');
    //var education = prompt('do you think I am educated?');
} 
var travel = prompt('do you think I traveled before?');
console.log('do you think I traveled before?    ' + travel);
if (travel.toLowerCase() === 'yes' || travel.toLowerCase() === 'y') {
    a = a + 1;
    console.log('correct');
    alert('correct');
} else if (travel.toLowerCase() === 'no' || travel.toLowerCase() === 'n') {
    console.log('wrong');
    alert('wrong');
}
else {
    alert('its a yes or no qustion!');
    //var travel = prompt('do you think I traveled before?');
}
var shape = prompt('do you think I am over weighted?');
console.log('do you think I am over weighted?   ' + shape);
if (shape.toLowerCase() === 'yes' || shape.toLowerCase() === 'y') {
    console.log('wrong');
    alert('wrong');
} else if (shape.toLowerCase() === 'no' || shape.toLowerCase() === 'n') {
    console.log('correct');
    alert('correct');
    a=a+1;
}
else {
    alert('its a yes or no qustion!');
    //var shape = prompt('do you think I am over weighted?');
} var mentalhelth = prompt ('do you think I am syco?');
console.log('do you think I am syco?            ' + mentalhelth);
if (mentalhelth.toLowerCase() === 'yes' || mentalhelth.toLowerCase() === 'y') {
    a = a + 1;
    console.log('correct');
    alert ('correct');
} else if (mentalhelth.toLowerCase() === 'no' || mentalhelth.toLowerCase() === 'n') {
    console.log('wrong');
    alert('wrong');
}
else {
    alert('its a yes or no qustion!');
   // var mentalhelth = ('do you think I am syco?');
}
if (a > 2) {
    alert('thank you for knowing me!   '+ username );
}
else {
    alert('poor you! we need to meet more!   ' + username);
}


