var button = document.getElementById("btn");
var input = document.getElementById("ipt");
var ul = document.querySelector("ul");


function inputLength(){
  return input.value.length
}
function addList(){
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function callbackbutton(){
    if(inputLength() > 0){
      addList();
    }
 }
function callbackinput(event){
    if(inputLength() > 0 && event.keyCode === 13){
      addList();
    }
 }



button.addEventListener("click", callbackbutton);

input.addEventListener("keypress",callbackinput );