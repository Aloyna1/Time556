let x = +prompt("Введите x...");
let a = +prompt("Введите a");
let b = +prompt("Введите b");

let f;

if (0 < x && x <=1){
    let mel = (x-a)/(x)
    if (Math.sqrt(a)+x < mel){
        mel = Math.sqrt(a)+x;
    } 
    if (mel > Math.sin(x)){
        mel = Math.sin(x);
    }
    f = mel;
} else if (x > 1){
    let maxc = Math.sqrt(x)
    if (Math.sqrt(x)< (a*x)){
        maxc = a*x
    }
    f = maxc;
} else if (x <= 0){
    let rt = (a*x+b)
    f = rt;
}
console.log(f)