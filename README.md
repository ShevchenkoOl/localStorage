## Methods for working with localStorage
#Service for localStorage
In order to reduce the amount of repetitive code when working with web storage, you can write a service with standard methods, for example, save and load. They will abstract the repetitive error checking code of the parser and similar routine (storage.js)


• setItem(key, value) - creates a new or updates an existing record in the directory.
For example:
localStorage.setItem("ui-theme", "light");
If you need to save a row, for example, an array or an object, you need to transform their row using the JSON.stringify() method.
const settings = {
   theme: "dark",
   isAuthenticated: true,
   options: [1, 2, 3],
};
localStorage.setItem("settings", JSON.stringify(settings));

• getItem(key) - rotates the values under the key key.
For example:
localStorage.setItem("ui-theme", "dark");
const theme = localStorage.getItem("ui-theme");
console.log(theme);// "dark"
Otherwise, you need to parse the values using the JSON.parse() method to extract the valid data.
const settings = {
   theme: "dark",
   isAuthenticated: true,
   options: [1, 2, 3],
};

localStorage.setItem("settings", JSON.stringify(settings));

const savedSettings = localStorage.getItem("settings");
const parsedSettings = JSON.parse(savedSettings);
console.log(parsedSettings);// settings object

• removeItem(key) - removes an entry with the key key from the folder.
For example:
localStorage.setItem("ui-theme", "dark");
console.log(localStorage.getItem("ui-theme"));// "dark"

localStorage.removeItem("ui-theme");
console.log(localStorage.getItem("ui-theme"));// null

• clear() - completely clears all storage records.
For example:
localStorage.clear();

• length - number of records in the folder.
