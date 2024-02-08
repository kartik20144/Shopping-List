 var button = document.getElementById("enter");
 var input = document.getElementById("userinput");
 var ul = document.querySelector("ul");

 function createListElement(){
     var li = document.createElement("li");
     li.appendChild(document.createTextNode(input.value));
     var delButton = document.createElement("button");
     delButton.classList.add("del");
     delButton.appendChild(document.createTextNode("Delete"));
     ul.appendChild(li).addEventListener("click",listItemDone);
     li.appendChild(delButton).addEventListener("click",deleteElement);
     input.value = "";
     
 };

function inputLength(){
    return input.value.length;
};

function addListAfterClick(){
    if(inputLength() > 0){
       createListElement();
    }
 }

 function addListAfterKeypress(event){
    if(inputLength() > 0 && event.key === "Enter"){
        createListElement();
    }
 }

function listItemDone(){
    event.target.classList.toggle("done");
}

 function deleteElement(){
  event.target.parentNode.remove();
 }

 button.addEventListener("click",addListAfterClick); 

 input.addEventListener("keypress",addListAfterKeypress); 

 