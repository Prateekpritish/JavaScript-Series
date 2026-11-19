# 🌐 XMLHttpRequest (XHR) & API Notes

Before `fetch()` (2015), `XMLHttpRequest` was the core browser Web API used to make asynchronous HTTP requests (AJAX) without reloading the page.

## 1. ReadyState Lifecycle (`xhr.readyState`)
- **0 (`UNSENT`)**: Object created, `.open()` not called yet.
- **1 (`OPENED`)**: `.open(method, url)` called to configure the request.
- **2 (`HEADERS_RECEIVED`)**: `.send()` called; response headers received.
- **3 (`LOADING`)**: Downloading response body (`responseText` holds partial data).
- **4 (`DONE`)**: Request complete (check `xhr.status === 200` for success).

## 2. Key Rules & Gotchas
- **`.open()` vs `.send()`**: `.open()` only prepares the connection; `.send()` actually transmits the request.
- **Event Handler**: `onreadystatechange` is a property assigned a callback function that runs on every state change.
- **Avoid Arrow Functions with `this`**: `() => {}` binds `this` to `window` (`this.responseText` becomes `undefined`). Always use a regular `function () {}` or reference the XHR variable directly.
- **Parsing JSON**: API responses arrive as strings in `this.responseText`. Convert them into objects using `JSON.parse(this.responseText)` inside `readyState === 4`.

## 3. DOM Manipulation Tip
- To render an image URL from an API, use the built-in `imgElement.src = data.avatar_url` property (not `.innerHTML`).
- *Editor Tip*: Use `document.querySelector('img#id')` or `/** @type {HTMLImageElement} */` so VS Code recognizes `.src` for autocomplete.

## 4. Quick Template
```javascript
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://example.com', true);

xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const data = JSON.parse(this.responseText);
    console.log(data);
  }
};

xhr.send();
```
### Q. What is V8 engine ?
---
The google's v8 engine is the  javascript executing engine that turns the human readable  code to machine language,so the cpu can execute it.

It got his name as same from the car engine  for it's raw speed excution.
