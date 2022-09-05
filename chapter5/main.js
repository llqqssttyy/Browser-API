"use strict";

const items = document.querySelector(".items");
const input = document.querySelector("#product__input");
const addBtn = document.querySelector(".add__button");

function createItem(text) {
    const itemRow = document.createElement("li");
    itemRow.setAttribute("class", "item__row");

    const item = document.createElement("div");
    item.setAttribute("class", "item");

    const name = document.createElement("span");
    name.setAttribute("class", "item__name");
    name.innerText = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "item__delete");
    deleteBtn.innerHTML = '<i class="fa-solid fa-minus"></i>';
    deleteBtn.addEventListener("click", () => {
        items.removeChild(itemRow);
    });

    item.appendChild(name);
    item.appendChild(deleteBtn);

    itemRow.appendChild(item);

    return itemRow;
}

function onAdd() {
    const text = input.value;
    const item = createItem(text);

    if (text != "") {
        items.appendChild(item);
    }

    input.value = "";
    input.focus();
}

addBtn.addEventListener("click", () => {
    onAdd();
});

input.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        onAdd();
    }
});
