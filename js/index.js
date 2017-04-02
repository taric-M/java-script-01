// var hi = 'Hello World!';
// alert(hi);
// document.write(hi);
// console.log(hi);
// var userName = prompt('Your Name:');
// var greetings = 'Hello ' + userName;
// document.write(greetings);

// var userAge = +prompt('Your Age:');
// var nextAge = userAge + 1;
// document.write('. Soon you will be ' + nextAge);

// function sum(a, b, c) {
//     var result = a + b + c;
//     return result;
// }
// var a = +prompt('a =');
// var b = +prompt('b =');
// var c = +prompt('c =');
// document.write(sum(a, b, c));

function tellAge(age) {
    if (age < 18) {
        return "Kid";
    } else if (age < 200) {
        return 'Adult'
    } else {
        return 'XXXX';
    }
}
var age = +prompt('Your Age:');
document.write(tellAge(age));