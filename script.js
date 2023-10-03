let inputs = document.getElementById("inp");
let item = document.querySelector(".item");

function Add() {
    if (inputs.value == "") {
        alert("please enter your task");
    }
    else {
        let newEle = document.createElement("ul");
        newEle.innerHTML = `${inputs.value}<i class="fas fa-trash"></i>`;
        item.appendChild(newEle);
        inputs.value = "";
        newEle.querySelector("i").addEventListener("click", remove);
        function remove() {
            newEle.remove();
        }
    }

}

