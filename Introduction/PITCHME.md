# Typescript 101

---

## What is it?

![width=400](assets/img/what_is_it.gif)

---
@snap[north span-100 text-08]
## Superset of Javascript
@snapend

![width=400](assets/img/superset.gif)

---

@snap[west span-45 text-center text-08]
## Static type checker
@snapend

@snap[east span-55 text-center]
@ul[list-spaced-bullets list-fade-fragments]
- Checks a program for errors before execution
- Check is based on the kinds of values
- Preserves runtime behaviour of Javascript
- Erases all types after check
@ulend
@snapend

---
@snap[north span-100 text-center text-08]
## Can you spot a problem?
@snapend

@code[js midpoint span-100](src/javascript/misspeled.js)

@snap[south span-100]
@[1](We define an object)
@[2](Then we calculate area)
@[3](Now we want to print it nicely)
@[4](And the result is not what we expected)
@snapend

---
@snap[north span-100 text-center text-08]
## Here's where typescript comes handy
@snapend

@code[js](src/typescript/misspeled.ts)

@snap[south span-100]
@[1](We define an object)
@[2](Then we calculate area)
@[3-7](And then IDE will show us right away compilation error)
@snapend

---
@snap[north span-100]
## Sounds awesome?
@snapend
![midpoint, height=300](assets/img/sounds_awesome.gif)

---
@snap[north span-80]
## How do I start?
@snapend
@code[bash zoom-07](src/bash/simplest_ts_file_run.sh)
@snap[south]
@[2](First install Typescript)
@[3](Create simple Typescript file)
@[4](Compile it)
@[5](Now you can run compiled Javascript file with node)
@snapend
@snap[east span-80]
![width=500](assets/img/install_typescript.gif)
@snapend

---
@snap[north span-100 text-06]
## Compiling on every change?
@snapend

![midpoint](assets/img/really.gif)

---
@snap[north span-100 text-06]
## tsconfig.json to the rescue!
@snapend

@snap[west span-100 text-08]
@ul[list-spaced-bullets list-fade-fragments span-60]
- Typescript compiler has lots of [options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
- in _tsconfig.json_ you specify features you want
- file should be stored in the root of your project
- you can enable *watch* option in _tsconfig.json_ and tsc will recompile project on every change
@ulend
@snapend

![east](assets/img/superman.gif)

---
@snap[north span-100 text-05]
## Let's take an example
@snapend

@snap[south span-60]
```json zoom-08
{
  "compilerOptions": {
    "module": "commonjs",
    "allowJs": true,
    "target": "es2018",
    "moduleResolution": "node",
    "sourceMap": true,
    "alwaysStrict": true,
    "strictNullChecks": true,
    "noImplicitReturns": true,
    "noImplicitAny": true,
    "strict": true,
    "outDir": "./dist",
    "typeRoots": ["./src/types", "./node_modules/@types"],
    "lib": ["esnext.asynciterable", "esnext"]
  },
  "include": ["src/**/*.ts"],
  "exclude": [".vscode", "deploy", "node_modules"]
}
```
@snapend


@snap[south span-100 text-06]
@[3](Specify module code generation: "None", "CommonJS", "AMD", "System", "UMD", "ES6", "ES2015" or "ESNext")
@[4](Allow JavaScript files to be compiled.)
@[5](Specify ECMAScript target version:, "ES3"(default), "ES5", "ES6"/"ES2015", "ES2016", "ES2017", "ES2018", "ES2019", "ES2020", "ESNext")
@[6](Determine how modules get resolved)
@[7](Generates corresponding .map file.)
@[8](Parse in strict mode and emit "use strict" for each source file)
@[9](In strict null checking mode, you can assign null and undefined only to values that were initially null or undefined)
@[10](Report an error when not all code paths in function return a value. All functions should specify return type)
@[11](Raise error on expressions and declarations with an implied any type. All function arguments has to have explicit type)
@[12](Enabling --strict enables --noImplicitAny, --noImplicitThis, --alwaysStrict, --strictBindCallApply, --strictNullChecks, --strictFunctionTypes and --strictPropertyInitialization)
@[13](Specify where all compiled files will be located)
@[14](List of folders to include type definitions from)
@[15](List of library files to be included in the compilation)
@[17](Specify which files to include into compilation process)
@[18](Specify which files to exclude into compilation process)
@snapend

--- 
## Let's sum it up
@ol[midpointlist-spaced-bullets span-70 text-06]
   - Static types check helps avoid many bugs and improves refactoring
   - Since Typescript is a superset of Javascript you can mix JS and TS code in one project
   - Typescript is using Javascript runtime
   - During compilation it checks all types, then removes them and generates clean JS code   
   - Typescript compiler has many options which is nice to look through
@olend

---
@snap[north span-50]
## That's it!
@snapend

![IMAGE](assets/img/thanks.gif)