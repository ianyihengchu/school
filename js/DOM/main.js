let myH1 = document.querySelector("#mainH");
myH1.textContent = "IMM is a rollercoaster";


let allLis = document.querySelectorAll("li");
console.log(allLis);

allLis[0].textContent = "new content";

for (let i = 0; i < allLis.length; i++) {
    allLis[i].textContent = "new content"
}


let myparagraph = document.querySelector("#myP");
myparagraph.remove()


let newLi = document.createElement("li");
//<li> </li>

newLi.textContent = "I am a brand new li from JS"
//<li>I am a brand new li from JS</li>

let theUL = document.querySelector("#theList")
theUL.appendChild(newLi);
