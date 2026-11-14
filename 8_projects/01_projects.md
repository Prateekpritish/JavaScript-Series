# Projects

## Project link
### Project 1 [click here](https://stackblitz.com/edit/stackblitz-starters-eqoqynbm?file=project1%2Fscript.js)


## Solution code
```javascript
const buttons = document.querySelectorAll('.box');
const body = document.querySelector('body');

buttons.forEach(function (items) {
  console.log(items);
  items.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target.id);
    if (e.target.id === 'box1') {
      body.style.backgroundColor = '#e76f51';
    }
    if (e.target.id === 'box2') {
      body.style.backgroundColor = '#2a9d8f';
    }
    if (e.target.id === 'box3') {
      body.style.backgroundColor = '#457b9d';
    }
    if (e.target.id === 'box4') {
      body.style.backgroundColor = '#9b5de5';
    }
  });
});

```
### Project 2
[click here](https://stackblitz.com/edit/stackblitz-starters-eqoqynbm?file=project2%2Fscript.js)

## solution code 

``` javascript
  const calculate = document.querySelector('#calculate');

calculate.addEventListener('click', () => {
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#result');

  const results = (weight / ((height / 100) * (height / 100))).toFixed(2);

  if (isNaN(height) || height === '') {
    result.innerHTML = `<span> Please provide valid details for height : ${height} </span>`;
  } else if (isNaN(weight) || weight === '') {
    result.innerHTML = `<span>Please provide valid details for weight : ${weight}</span>`;
  } else if (results < 18.5) {
    result.innerHTML = `${results} (you are underweight)`;
  } else if (results < 25.0 && results > 18.4) {
    result.innerHTML = `${results} (you are Normal)`;
  } else if (results > 24.9 && results < 30.0) {
    result.innerHTML = `${results} (you are Normal)`;
  } else {
    result.innerHTML = `${results} caution you are obese!`;
  }
});

```