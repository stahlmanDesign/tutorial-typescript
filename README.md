# Learning TypeScript

- Create **package.json** file. with `npm init` and accept defaults
- Install TypeScript globally with npm `npm install typescript -g`
	- If you just want in your project, use instead `npm install typescript --save`

- Can use normal JS mixed in with types. Save file `main` with `.ts` extension
- In terminal go to folder with main.ts and type `tsc main.ts` to comiple to `main.js`
- Watch for changes with `tsc -w main.ts` to auto compile on every save
- You can use ES6, and compile to your choice of JS
	- create config file to change output target `tsc - init`

``` javascript
	{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es6", // **<--- change to es5 to get browser-compatible JS**
        "noImplicitAny": false,
        "sourceMap": false
    },
    "exclude": [
        "node_modules"
    ]
}

```

- **IMPORTANT**, now you want to watch not for individual files, but inside folder, to recognize the config file `tsc -w`
	
- TS allows you to define a type and set an initializer `let i: number = 12;` (default value)