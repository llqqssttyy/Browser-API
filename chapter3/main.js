"use strict";

const body = document.querySelector("body");
const targetCursor = document.querySelector(".target-cursor");
const targetCoor = document.querySelector(".target-coor");
const row = document.querySelector(".row");
const col = document.querySelector(".col");

addEventListener("load", () => {
    const targetRect = targetCursor.getBoundingClientRect();
    const targetHalfWidth = targetRect.width / 2;
    const targetHalfHeight = targetRect.height / 2;

    document.addEventListener("mousemove", (event) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        targetCoor.innerHTML = `${mouseX}px, ${mouseY}px`;
        targetCoor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        targetCursor.style.transform = `translate(${
            mouseX - targetHalfWidth
        }px, ${mouseY - targetHalfHeight}px)`;
        row.style.transform = `translateY(${mouseY}px)`;
        col.style.transform = `translateX(${mouseX}px)`;
    });
});
