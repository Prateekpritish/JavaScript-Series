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