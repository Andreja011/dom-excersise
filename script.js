"use strict";
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// Add the following elements to the container using ONLY JavaScript and the DOM methods shown above.

// 1. a <p> with red text that says “Hey I’m red!”
const elementP = document.createElement("p");
elementP.textContent = "Hey I'm red!";
elementP.style.color = "red";
container.appendChild(elementP);
// 2. an <h3> with blue text that says “I’m a blue h3!”
const elementH3 = document.createElement("h3");
elementH3.textContent = "I’m a blue h3!";
elementH3.style.color = "blue";
container.appendChild(elementH3);
// 3. a <div> with a black border and pink background color with the following elements inside of it:
const divPink = document.createElement("div");
divPink.setAttribute("style", "background: pink; border: 1px solid black;");
container.appendChild(divPink);
// 1. another <h1> that says “I’m in a div”
const elementH1 = document.createElement("h1");
elementH1.textContent = "I’m in a div";
divPink.appendChild(elementH1);
// 2. a <p> that says “ME TOO!”
const elementP2 = document.createElement("p");
elementP2.textContent = "ME TOO!";
divPink.appendChild(elementP2);
// 3. Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.