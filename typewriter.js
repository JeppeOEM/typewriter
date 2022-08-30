"use strict";
let text = document.getElementById("typewriter").textContent;
let counter = 0;
let hit = document.querySelector("#typekey1");

loop();

function loop() {
  if (counter < text.length) {
    counter += 1;
    console.log(text.substring(counter, 0));
    document.querySelector(".typewritten").textContent = text.substring(counter, 0);
    setTimeout(loop, Math.floor(Math.random() * (400 - 50) + 50));
  } else {
    console.log("Iz done");
  }
}
