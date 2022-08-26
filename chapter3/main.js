"use strict";

const body = document.querySelector("body");
const targetCursor = document.querySelector(".target-cursor");
const targetCoor = document.querySelector(".target-coor");
const row = document.querySelector(".row");
const col = document.querySelector(".col");

document.addEventListener("mousemove", (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    targetCoor.innerHTML = `${mouseX}px, ${mouseY}px`;
    targetCoor.style.top = `${mouseY}px`;
    targetCoor.style.left = `${mouseX}px`;
    targetCursor.style.top = `${mouseY}px`;
    targetCursor.style.left = `${mouseX}px`;
    row.style.top = `${mouseY}px`;
    col.style.left = `${mouseX}px`;
});
