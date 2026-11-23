## Lexical scoping

### Lexical Scope = "Where You Wrote the Code"
---
Lexical scope simply means a child function can see variables written in its parent function (and the global scope outside), based purely on where the code is physically written.
```javascript
function outer() {
  let secret = "chai"; // Parent's variable

  function inner() {
    // Child can look UP and grab `secret`!
    console.log(secret); 
  }

  inner();
}
outer(); // "chai"

```
- Rule: Inner functions can look outward/upward to parents, never inward into children.

## Closure

### Closure = "A Backpack That Survives After Parent Dies"
---

Here is the one small fix to what you learned: Closure isn't only created by the return keyword—it happens anytime an inner function is sent outside its parent (via return, setTimeout, an event listener, or saving it to a variable) and remembers its parent's variables even after the parent finishes running!

Normally, when outer() finishes running, all its local variables (secret) get deleted from memory. Except when inner escapes outside:

```javascript
function outer() {
  let count = 0; // Normally deleted when `outer()` ends...

  function inner() {
    count++;
    console.log(count);
  }

  return inner; // `inner` escapes with a "backpack" containing `count`!
}

const counter = outer(); // `outer()` is DONE and dead now!
counter(); // 1 (Still remembers `count` from its backpack!)
counter(); // 2 (Still updating that exact same `count`!)

```

## Your Summary 

- Lexical Scope: A child function can read its parent's variables while inside it.

- Closure: If that child function escapes outside the parent (like with return or setTimeout), JavaScript keeps the parent's variables alive in a hidden "backpack" ([[Scopes]]) attached to that child function so it never forgets them.

