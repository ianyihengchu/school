//main.js

let library = {
    name: "Oakville Public Library",
    services: ["Borrowing", "Internet", "Meeting Rooms", "Comunity"],
    address: {
        street: "120 Navy St.",
        town: "Oakville",
        province: "Ontario",
        postalCode: "L6J 2Z4"
    },
    books: [
        {
            pages: "198",
            author: "Neil Young",
            title: "Waging Heavy Peace"
        },
        {
            pages: "1",
            author: "Matthew Inman",
            title: "How to Tell If Your Cat Is Plotting to Kill You"
        },
        {
            pages: "234",
            author: "Tyler Hamilton",
            title: "The Secret Race"
        }
    ]
};

console.log(library.name);
console.log(library.services);
console.log(library.services[1]);

console.log(library.address.postalCode);
console.log(library.books[2].pages);

function add(a, b) {
    let sum = a + b;
    return sum;
}

let myCalc = add(7, 9)
console.log(myCalc);

let multiply = function (a, b) {
    let product = a * b
    return product
}

let anotherCalc = multiply(5, 8);
console.log(anotherCalc);


let meggieCalc = multiply;

let meggiValue = meggieCalc(11234, 7);
console.log(meggiValue);

let meggie = {
    fName: "Meggie",
    faveSport: "Rugby",
    foods: ["pho", "pizza", "kimchi stew"],
    mathSkill: function (a, b) {
        let product = a * b
        return product
    }
}


console.log(meggie.fName);
console.log(meggie.foods[2]);
console.log(meggie.mathSkill);

let mskill = meggie.mathSkill(5, 6);
console.log(mskill);

//same as lines 75-76. just written differently
console.log(meggie.mathSkill(5, 6));

let dog = {
    name: "rover",
    age: 20,
    talk: function () {
        console.log("woof");
    },
    move: function () {
        console.log("takes a step");
    }
}

let bird = {
    name: "polly",
    age: 2,
    talk: function () {
        console.log("tweet");
    },
    move: function () {
        console.log("flaps wings");
    }
}

dog.move = bird.move
dog.move();

let initial = "A";
initial = "B";

let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        console.log(numbers[i]);
    }
}

  numbers.forEach(function(numbers) {
      console.log((numbers % 2 == 0) ? "even" : "odd");
  });