// pre inc
function inc(a){
    return ++a;
}

// post inc
function postinc(a){
    return a++;
}

let a=5;
let c=8;
let b=inc(a);
let d=inc(c);

// adding var b and d
let sum=b+d;
console.log(sum);
