
// Робота з локальним середовищем з використанням: <form class="feedback-form">
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

// Прикладі роботи з local та session сховішем з використанням кнопок 
const addLocal = document.querySelector('.js-addLocal');
const getLocal = document.querySelector('.js-getLocal')
const removeLocal = document.querySelector('.js-removeLocal');
const addSession = document.querySelector('.js-addSession');
const removeSession = document.querySelector('.js-removeSession');

const KEY_LOCA = 'onAddLocal';

addLocal.addEventListener('click', onAddLocal);
getLocal.addEventListener('click', onGetLocal);
removeLocal.addEventListener('click', onRemoveLocal);
addSession.addEventListener('click', onAddSession)
function onAddLocal() {
    const arr = [1, 2, 3, 4];
    localStorage.setItem(KEY_LOCA, JSON.stringify(arr));
}

function onGetLocal() {
    try {
        const result = JSON.parse(localStorage.getItem(KEY_LOCA));
        result.forEach(item => console.log(item))
        console.log(result);
    } catch (e) {
        console.log(e);
    } finally {
        console.log('hello');
    }
    const result = JSON.parse(localStorage.getItem(KEY_LOCA)) ?? [];
    result.forEach(item => console.log(item))
    console.log(result);
}

function onRemoveLocal() {
    // localStorage.removeItem(KEY_LOCA);
    localStorage.clear()
}

function onAddSession(){
    const obj = {
        name:"User",
        getName(){
            console.log(`Hello i'm ${this.name}`);
        }
    }
    sessionStorage.setItem('sessionStorage', JSON.stringify(obj))
}





// Робота з локальним середовищем з використанням: <form class="feedback-form" autocomplete="off">
const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');

const KEY_LOCAL = 'feedback-form-state';

// Эта функция является обработчиком события input, который срабатывает при вводе данных в любое из полей формы. Когда пользователь вводит данные, объект objectToSave создается с текущими значениями полей электронной почты и сообщения. Затем этот объект сериализуется в JSON и сохраняется в localStorage под ключом KEY_LOCAL (в данном случае 'feedback-form-state'). Таким образом, при каждом вводе данные сохраняются в локальное хранилище браузера.
form.addEventListener('input', () => {
  const objectToSave = { email: email.value, message: message.value };
  localStorage.setItem(KEY_LOCAL, JSON.stringify(objectToSave));
});

// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
form.addEventListener('submit', (e) => {
e.preventDefault();
console.log({email: email.value, message: message.value});
localStorage.removeItem(KEY_LOCAL); // видаляє зі сховища запис з ключем key
form.reset(); // повністю очищає всі записи сховища.
})

// Функция load необходима для загрузки данных из локального хранилища и установки их в поля формы при загрузке страницы. Если вы удалите блок кода, отвечающий за вызов load и установку значений полей формы, то данные из локального хранилища не будут загружены, и форма не будет автоматически заполняться сохраненными данными при загрузке страницы.
const load = (key) => {
    try {
      const serializedState = localStorage.getItem(key);
      return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
      console.error("Get state error: ", error.message);
    }
  };


// Загрузка данных при загрузке страницы:
// Этот код вызывает функцию load для получения данных из локального хранилища при загрузке страницы. Если данные успешно загружены, то они устанавливаются в соответствующие поля формы. Таким образом, при загрузке страницы форма заполняется сохраненными данными, если они есть в локальном хранилище.
const storageData = load(KEY_LOCAL);
if (storageData) {
    email.value = storageData.email;
    message.value = storageData.message;
}




