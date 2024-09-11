console.log("consoles are not a trap");

let firstname = "Wasim";
firstname = "Andrew";

console.log(firstname);


let a = "solid";
let b = "snake";

console.log("Hello, I am " + a + b);

console.log(`Hello I am ${a} ${b}`)


let isRaining = false;

if(isRaining == true){
    console.log("carry umbrella");
}else{
    console.log("wear shorts");
}



passMark = 50;
myMark = 49;

if(myMark < passMark){
    console.log("Fail");
}else{
    console.log("Pass");
}

for(let i=0; i<10; i++){
    console.log(i);
}


let zoo = ["lions", "tiger", "bear", "giraffe", "penguin", "panda", "cheetah"];

zoo.push("platypus");

console.log(zoo);
/*console.log(zoo[0]);
console.log(zoo[1]);
console.log(zoo[2]);
console.log(zoo[3]);
console.log(zoo[4]);
*/
for(let i=0; i<zoo.length; i++){
    console.log(zoo[i])
}


function sum(a, b){
    let result = a + b;

    return result;
}

let y = sum(32,89);
console.log(y);



function zog(str){
    console.log(str);
}

zog("The Zen");


function meaningOflife(){
    return 42
}

let mol = meaningOflife();
console.log(mol);




let flooredNumber = Math.floor(75.6);
console.log(flooredNumber);

let randomNumber = Math.random()*6;
console.log(randomNumber);

let randomInteger = Math.floor(randomNumber);
console.log(randomInteger);
