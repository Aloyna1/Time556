let x = +prompt("Введите x...");
let y = +prompt("Введите y");

let f = (x * Math.pow (y,2) - Math.sqrt(Math.abs(Math.pow(x,2) - 2.5 * Math.pow (10,-3) *y))) / (2 * (Math.sin(x*y)))+0.5;

console.log("d = " + f);


