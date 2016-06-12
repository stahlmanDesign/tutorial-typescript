# Learning TypeScript

##Quick start
- `npm install` load modules not included in git repo
 
- `npm start` to invoke two scripts
	- `tsc -w` to transpile `main.ts` (TypeScript file) to `main.js` (JavaScript)
	- `babel main.js -o index.js -w` for babel transpilation of main.js to index.js
- `open index.html` (in another terminal tab)
	- open in localhost if you want live reload to work. I use [serve][0] `npm install serve` which creates <http://localhost:3000> serving the folder where you typed `serve`
- You can now modify `main.ts` and it will compile to `main.js` and then transpile from ES2015 (ES6) to ES5 in `index.js`

[0]: https://www.npmjs.com/package/serve

## Build from scratch
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

- install babel
	- `npm install --save-dev babel-cli`
	- add to package.json:

``` javascript
	"devDependencies": {
        "babel-cli": "^6.9.0"
    },
    "scripts": {
        "transpile-typescript":"tsc -w",
        "build": "babel main.js -o index.js -w",
        "start": "npm run transpile-typescript & npm run build"
    }
```

- now you can type `npm start` to run both scripts as one command that watches for changes as you modify main.ts
- EDIT: it is not necessary to use Babel because TypeScript transpiles from TS and from ES6 to ES5