## Methods for working with localStorage
# Service for localStorage
This educational project is designed to visually work with Web storage. The basic commands are described here. To reduce the amount of repetitive code when working with web storage, you can write a service with standard methods, for example, save and load. They will abstract the repetitive parser error checking code and similar procedure (storage.js).

• **setItem(key, value)** - creates a new or updates an existing record in the directory.

_For example_:

**```localStorage.setItem("ui-theme", "light");```**
If you need to save a row, for example, an array or an object, you need to
transform their row using the **JSON.stringify()** method.
``` 
    const settings = {
    theme: "dark",
    isAuthenticated: true,
    options: [1, 2, 3],
};
localStorage.setItem("settings", JSON.stringify(settings));
```

• **getItem(key)** - rotates the values under the key key.

_For example:_
```
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
```
• **removeItem(key)** - removes an entry with the key key from the folder.

_For example:_
```
localStorage.setItem("ui-theme", "dark");
console.log(localStorage.getItem("ui-theme"));// "dark"

localStorage.removeItem("ui-theme");
console.log(localStorage.getItem("ui-theme"));// null
```
• **clear()** - completely clears all storage records.
_For example:_
```
localStorage.clear();
```
• **length** - number of records in the folder.# Markdown syntax guide

## Usage
To use this repository, follow these steps:
1. Clone the repository to your local computer;
2. Go to the repository directory;
3. Run each task following the instructions described in the corresponding task file.

## Author
This repository was created and maintained by [Oleksii Shevchenko](https://shevchenkool.github.io/portfolio/). Questions, suggestions, and feedback can be directed to [email](uzlabini@gmail.com) or [linkedin profile](linkedin.com/in/oleksii-shevchenko-535ab61b8).

