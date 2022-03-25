// Write your code here!
const main = document.querySelector("#main");
main.remove()

var newHeader = document.createElement("h1"); 
var t = newHeader.setAttribute("id","victory"); 

newHeader.innerHTML = "YOUR-NAME is the champion"

document.body.appendChild(newHeader); 