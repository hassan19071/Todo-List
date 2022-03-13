let addBtn = document.querySelector(".form .search button");
let inputField = document.querySelector(".form .search input");
let ulList = document.querySelector(".results ul");
let removeAll = document.querySelector(".results .remove");
let numOfTodos = document.querySelector(".results .num-of-todos");
let i = 0;

addBtn.onclick = function(){
    let liCreated = document.createElement("li");
    let createSpan = document.createElement("span");
    let createX = document.createElement("img");
    let textSpan = document.createTextNode(inputField.value);

    createSpan.appendChild(textSpan);
    liCreated.appendChild(createSpan);
    createX.setAttribute("src","images/icon-cross.svg");
    liCreated.appendChild(createX);

    createX.onclick = function(){
        liCreated.remove();
        numOfTodos.innerHTML = --i;
    }

    if (inputField.value ==""){
        return false;
    }else{
        ulList.appendChild(liCreated);
        inputField.value =null;
        addBtn.classList.add("disabled");
        numOfTodos.innerHTML = ++i;
    }

  
}


inputField.oninput = ()=>{
     if (inputField.value){
        addBtn.classList.remove("disabled");
     }else{
        addBtn.classList.add("disabled");
     }
}

let moonSun = document.querySelector(".logo img")


if (document.body.classList.contains("light")){
    moonSun.src = "images/icon-moon.svg";
}