# ES6 Module

- ES6 module is a way to organize code in a separate file.

### The import must be with `.js` extension

- Because at now, we need a browser to run the code, must keep the .js
- But in Angular project, you may not need to

- After organizing the code in a separate file, look at the browser, we can see the error
  ![alt text](image.png)
- We should to switch to other "module" at tsconfig.json
  > "module": "es2015"
- Comment out the "outFile"

## So the app.js will contain `import` keyword

![alt text](image-1.png)

## But we still get error

- Uncaught SyntaxError: Cannot use import statement outside a module
  ![alt text](image-2.png)
- From this...

```html
<script src="dist/app.js" defer></script>
```

- ..to this

```html
<script type="module" src="dist/app.js"></script>
```
