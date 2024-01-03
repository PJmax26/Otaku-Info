"use strict";
const generateBtn = document.querySelector(".generate_btn");
const quoteArea = document.querySelector(".results");
const quote = document.querySelector(".quote");
const character = document.querySelector("#character");
const anime = document.querySelector("#anime");
const copyQuote = document.querySelector(".copy");
const sayQuote = document.querySelector(".speak");

const fetchData = async () => {
  try {
    const response = await fetch("sample.json");
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

generateBtn.addEventListener("click", () => {
  const showData = async () => {
    const data = await fetchData();
    const randomNum = Math.floor(Math.random() * data.length + 1);
    const person = data[randomNum];
    character.textContent = person.character;
    anime.textContent = `@${person.anime}`;
    quote.textContent = person.quote;
  };
  showData();
});

copyQuote.addEventListener("click", () => {
  navigator.clipboard.writeText(
    `"${quote.textContent}", ${character.textContent}`
  );
  alert("quote copied to clipboard");
});

let audioMessage;

sayQuote.addEventListener("click", () => {
  audioMessage.text = `${quote.textContent} by ${
    character.textContent
  } in ${anime.textContent.slice(1)}`;
  window.speechSynthesis.speak(audioMessage);
});

window.onload = () => {
  if ("speechSynthesis" in window) {
    audioMessage = new SpeechSynthesisUtterance();
  } else {
    alert("SpeechSynthesis no supported");
  }
};
