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

### Project 3
[click here](https://stackblitz.com/edit/stackblitz-starters-eqoqynbm?file=project3%2Fscript.js)

## Solution code

```javascript
const time = document.querySelector('.yellow-box');

setInterval(() => {
  let date = new Date();
  time.innerHTML = date.toLocaleTimeString();
  console.log(date.toLocaleTimeString());
}, 1000);

```

### Project 4

[click here](https://stackblitz.com/edit/stackblitz-starters-eqoqynbm?file=project4%2Fscript.js)

## Solution code

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1)
// console.log(randomNumber)
const guessInput = document.querySelector('#guessInput')
const submit = document.querySelector('#submitBtn')
const result = document.querySelector('#result')
const previousGuesses = document.querySelector('#previousGuesses')
const remainingGuesses = document.querySelector('#remainingGuesses')
const startOver = document.querySelector('#startOver')


let guessesArray = []


submit.addEventListener('click',() => {
  const guess = parseInt(guessInput.value)
  if(isNaN(guess)||guess < 1 || guess > 100){
    DisplayMessage()
  }
  userGuessMessage(guess)
  previousGuessesDisplay(guess)
  
  
})

function DisplayMessage(){
    alert('Please enter number between 1 to 100')
    return
}

function userGuessMessage(guess) {
  guessInput.value = ''
  if(guess === randomNumber){
    result.innerHTML = `<h3>Congrats the number is ${randomNumber}!</h3>`
    gameOver(guess)
  }else if(guess < randomNumber){
    result.innerHTML = `<h4>The number is too low</h4>`
  }else{
    result.innerHTML = `<h4>The number is too high</h4>`
  } 
    // console.log('function called')
}

function previousGuessesDisplay(guess){
  if(!isNaN(guess) && !(guess < 1) && !(guess > 100))
  {
    let arr = guessesArray.push(guess)
  
  // console.log(arr)
  if(arr === 10){
    previousGuesses.innerHTML += `<span>${guess}, </span>`
    remainingGuesses.innerHTML = `${10-arr}`
    gameOver()
  }
  else if(isNaN(guess)|| guess<1 || guess > 100){
  }
  else{
    previousGuesses.innerHTML += `<span>${guess}, </span>`
    remainingGuesses.innerHTML = `${10-arr}`
  }
}
}

function gameOver(guess){
  if(!(guess === randomNumber)){
    result.innerHTML = `<h3> Game over number is : ${randomNumber}</h3>`
  }
    startOver.innerHTML = `<button id="restart"> Start Over </button>`  
    guessInput.setAttribute('disabled','')
    submit.setAttribute('disabled','')

    newGame()
}

function newGame(){
  const restart = document.querySelector('#restart')
  restart.addEventListener('click',()=>{
    randomNumber =  parseInt(Math.random() * 100 + 1)
     guessesArray = []

     guessInput.value = ''
     previousGuesses.innerHTML = ''
     remainingGuesses.innerHTML = `10`
     guessInput.removeAttribute('disabled','')
     submit.removeAttribute('disabled','')

     result.innerHTML = ' Make your first guess!'

     startOver.innerHTML = ''
  })
}


```