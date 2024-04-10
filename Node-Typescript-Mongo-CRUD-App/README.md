# Setup

```
npm i
npm i express @types/express
npm i nodemon
npm i mongoose
npm i @types/mongoose
npm i typescript ts-node
```

### tsconfig.json

```
tsconfig.json
{
 "compilerOptions": {
  "target": "ES6",
  "module": "NodeNext",
  "moduleResolution": "NodeNext",
  "lib": ["ES6"],
  "sourceMap": true,
  "strict": true,
  "noImplicitAny": true,
  "esModuleInterop": true,
  "resolveJsonModule": true,
  "allowJs": true,
  "rootDir": "src",
  "outDir": "dist"
 },
 "include": ["src/**/*"]
}

```

### nodemon.json

```
nodemon.json
{
    "watch": [
        "src"
    ],
    "ext": ".ts,.js",
    "exec": "ts-node ./src/index.ts"
}
```

### index.ts

```
console.log("Hello World");
```

```bash
npm run start
```

### src/controller

### src/db

### src/routes
