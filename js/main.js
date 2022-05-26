"use strict";

const btnAdd = document.querySelector(".btn-add");
const list = document.querySelector(".list");


let Tasks = [];

btnAdd.addEventListener("click", (e) => {
    let taskName = prompt("Введите задачу:");

    // Создание нового таска
    let newTask = document.createElement("div");
    newTask.classList.add("task");
    Tasks.push(newTask);

    let taskIndex = Tasks.indexOf(newTask);
    newTask.innerHTML = `<input type="checkbox" class="chb" id="chb-done${taskIndex}">
    <label for="chb-done${taskIndex}"><span class="checkbox checkbox${taskIndex}">${taskName}</span></label>`;
    
    list.appendChild(newTask);

    const taskEls = document.querySelectorAll(".task");
    taskEls.forEach(el => createCheckboxPosForTask(el));
});




// Функция для подсчета положения checkbox для каждого task
function countCheckboxPos(el){
    // Доберемся до элемента span.checkbox
    const spanCheckbox = el.lastChild.firstChild;
    console.log(el.lastChild);
    console.log(el.lastChild.previousSibling)
    console.log(spanCheckbox);
    // Чуть магии для получения стилей padding
    let isStyle = el.currentStyle || window.getComputedStyle(el, null);

    let s = el.clientWidth - parseInt(isStyle.paddingLeft) * 2 - spanCheckbox.offsetWidth;
    return -s;
}


function createCheckboxPosForTask(el){
    // Идея - добавить style тег в head, чтобы там описать ::before ::after;
    let styleEl;
    let taskIndex = Tasks.indexOf(el);
    const head = document.querySelector("head");
    styleEl = document.createElement("style");
    styleEl.innerHTML = 
    `span.checkbox${taskIndex}::before { 
        left: ${countCheckboxPos(el)}px;
    } \n` + 
    `span.checkbox${taskIndex}::after {
        left: ${countCheckboxPos(el) + 6}px;
    } `; 
    head.appendChild(styleEl);
}

