import {save, load, remove} from './storage.js';
const form = document.querySelector(".feedback-form");
const lokalStorageKey = "goit-example-message";

form.elements.message.value = load(lokalStorageKey) ?? "";

form.addEventListener("input", (evt) => {
  save(lokalStorageKey, evt.target.value);
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  remove(lokalStorageKey);
  form.reset();
});