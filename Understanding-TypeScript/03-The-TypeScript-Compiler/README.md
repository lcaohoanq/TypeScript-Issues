# Compile Typescript to JavaScript

```bash
tsc app.ts

tsc app.ts -w / --watch (watch any changes in the file)
```

- How about we have more than one typescript file?

```bash
tsc --init (look for whole directory)
tsc (compile all files in the directory)
tsc -w / tsc --watch (watch any changes in the files)
```

> This will create a tsconfig.json file, tell Typescript that we have a project and we want to compile all the files in the project.

# Including & Excluding Files

- Exclude file from compilation

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true
  },
  "include": ["app.ts"],
  "exclude": ["node_modules"]
  //"[**/*.dev.ts]": "exclude all files from all folder with .dev.ts extension"
}
```

# tsconfig.json

- `tsconfig.json` is a configuration file that tells the TypeScript compiler how to compile the project.

- "target": "es6" - The version of JavaScript that the TypeScript compiler will convert the code to.
- "module": "commonjs" - The module system that the TypeScript compiler will use.
- "lib": [] - The library files that the TypeScript compiler will include in the compilation process.
  - if not set, it be default, assume all the `DOM Api's are available.`
  - if uncomment the lib, it will only include the specified libraries (array must not empty)

## "lib"

```json
"lib" : [
  "dom",
  "es6",
  "dom.iterable",
  "scripthost"
]
```

## "jsx"

- "jsx": "react" - The JSX compiler option that the TypeScript compiler will use.

## "allowJs"

- `true` - The TypeScript compiler will allow JavaScript files to be included in the compilation process.

## "checkJs"

- `true` - The TypeScript compiler will check JavaScript files for errors.

## declarationMap

- `true` - The TypeScript compiler will generate declaration map files.

## "sourceMap"

- `true` - The TypeScript compiler will generate source map files.
- if set `true` it will generate the `.map` file for the `.js` file after compilation (via tsc).
  - this is a bridge which is understood by the modern browsers and the developer tools js file.
  - this will help to `debug` the code in the browser.

> debug process: in browser
> select the break point in the browser, and the browser will automatically take you to the `.ts` file.

> debug process: in vs code
> select the break point in the `.ts` file, and the browser will automatically take you to the `.ts` file.

## "outFile"

## "outDir" / "rootDir"

- "outDir": "./dist"

  - The TypeScript compiler will place the `compiled` JavaScript files in the specified directory.
  - Js compiled files will be placed in the `dist` folder.

- "rootDir": "./src"
  - TypeScript will look for the TypeScript files in the specified directory `src`.
  - If we have the directory outside the `src` folder, it will not compile the files.

## "removeComments"

- "removeComments": true - The TypeScript compiler will remove comments from the compiled JavaScript files.

## "noEmit"

- `true` - The TypeScript compiler will not generate any JavaScript files.

## "downlevelIteration"

- `true` - The TypeScript compiler will convert the `for..of` loops to `for..in` loops.

## "isolatedModules"

- `true` - The TypeScript compiler will ensure that each file is independent of the others.

## "noEmitOnError"

- `true` - The TypeScript compiler will not generate any JavaScript files if there are errors.

- if set `true`, it will not generate the `.js` file if there are any errors in the `.ts` file.

## "strict"

- `true` - The TypeScript compiler will enable all strict type-checking options (below)

## "noImplicitAny"

- `true` - The TypeScript compiler will not allow an `any` type to be used.

## "strictNullChecks"

> Tell TypeScript to be pretty well strict regarding how you access and wor with values that might potentially be `null` or `undefined`.

- `true` - not allow a `null` or `undefined` value to be assigned to a variable that does not have `null` or `undefined` in its types
- `false` - allow a `null` or `undefined` value to be assigned to a variable that does not have `null` or `undefined` in its type.

## "strictFunctionTypes"

- `true` - The TypeScript compiler will not allow a function to be assigned to a variable that does not have the same type signature.

## "strictBindCallApply"

- `true` - The TypeScript compiler will not allow the `bind`, `call`, or `apply` methods to be called on a function that does not have the same type signature.

```ts
function clickHandler()) {
  console.log("Clicked! " + message);
}

if (button) {
  button.addEventListener("click", clickHandler.bind(null));
  // Work!! means that the function do not have any parameter
}
```

```ts
function clickHandler(message: string)) {
  console.log("Clicked! " + message);
}

if (button) {
  button.addEventListener("click", clickHandler.bind(null, 1));
  // Errors, because the function is expecting a one parameter
  button.addEventListener("click", clickHandler.bind(null, "Hello World!"));
  // Work!!!!
}
```

- `false` - The TypeScript compiler will allow the `bind`, `call`, or `apply` methods to be called on a function that does not have the same type signature.

```ts
function clickHandler(message: string) {
  console.log("Clicked! " + message);
}

if (button) {
  button.addEventListener("click", clickHandler.bind(null));
  // Work!!
}
```

## "strictPropertyInitialization"

- `true` - The TypeScript compiler will not allow a class property to be declared without being initialized.

## "noImplicitThis"

- `true` - The TypeScript compiler will not allow the `this` keyword to be used without an explicit type.

## "alwaysStrict"

- `true` - The TypeScript compiler will always emit `use strict` for each JavaScript file.

# Additional Compiler Options

## "noUnusedLocals"

- `true` - The TypeScript compiler will not allow a local variable to be declared and not used.

## "noUnusedParameters"

- `true` - The TypeScript compiler will not allow a function parameter to be declared and not used.

## "noImplicitReturns"

- `true` - The TypeScript compiler will not allow a function to have a missing return statement.

```ts
function add(a: number, b: number): number {
  if (a && b) {
    return a + b;
  }
}

//Warning: Function lacks ending return statement and return type does not include 'undefined'.
```

```ts
function add(a: number, b: number): number {
  if (a && b) {
    return a + b;
  }
  return;
}

// Work!!
```

## "noFallthroughCasesInSwitch"

- `true` - The TypeScript compiler will not allow a missing `break` in a switch statement.
