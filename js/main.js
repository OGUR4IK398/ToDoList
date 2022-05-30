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



    let xStart, xEnd, xNow;

    el.addEventListener("touchstart", (e)=>{
        xStart = e.targetTouches[0].clientX;
    }, false);

    el.addEventListener("touchend", (e) => {
        xEnd = e.changedTouches[0].clientX;
        if (Math.abs(xEnd - xStart) >= 100) {el.remove();}

        // Если не дошло до выхода, то возвращаем
        if (Math.abs(xEnd - xStart) <= 100){
            el.style.marginLeft = 0 + "px";
            el.style.marginRight = 0 + "px";
        }

    }, false);

    el.addEventListener("touchmove", (e)=>{
        xNow = e.targetTouches[0].clientX;
        
        el.style.marginLeft = xNow - xStart + "px";
        el.style.marginRight = xStart - xNow + "px";

    });

    list.appendChild(el);

    
});

// task
// Добавить анимацию css через keypoints и пусть добавляет ее при
// достаточном удалении от центра экрана


