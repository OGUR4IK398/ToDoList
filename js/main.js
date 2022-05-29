"use strict";


const btnAdd = document.querySelector(".btn-add");
const list = document.querySelector(".list");


btnAdd.addEventListener('click', (e) => {

    let el = document.createElement("div");
    el.classList.add("task");

    el.innerHTML = `<div class="control"><input type="checkbox"><div class="btn-del"></div></div>
    <input type="text" class="task-text" placeholder="Ваша задача"></input>`;

    let delBtn = el.firstChild.lastChild;
    delBtn.addEventListener('click', (e) => {
        delBtn.parentElement.parentElement.remove();
    });


    list.appendChild(el);

});


