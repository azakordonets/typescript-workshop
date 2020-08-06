# Types in Typescript

---
@snap[north span-100 text-08]
## Why do we need them? @emoji[confused]
@snapend

@snap[midpoint span-90 text-10]
@ul[list-spaced-bullets list-fade-fragments span-80]
- Makes code easier to read and understand
- Easier refactoring  
- Static type checking helps eliminate spelling bugs and issues with using wrong values
@ulend
@snapend

---
@snap[north span-100 text-08]
## Simple example
@snapend
@snap[east-north]
```typescript
//js
function createTrxFile(name, minAmount, maxAmount, periods) {}

// typescript
function createTrxFile(
                        name: string,
                        minAmount: number, 
                        maxAmount: number,
                        periods: []TrxPeriod): TrxFileSummary {}
```
@snapend
@snap[south span-100]
@[1-2](Simple js function to create trx files)
@[4-10](Same functions in typescript - it's clear now what is expected)
@snapend

---
@snap[north span-100 text-06]
## You can omit types in typescript files
@snapend
@snap[east-north]
```typescript
//typescript
function createTrxFile(name, minAmount, maxAmount, periods) {}

//this is what will be implied
function createTrxFile(name: any, minAmount: any, maxAmount: any, 
                        periods: any): any {}
```
@snapend
@snap[south span-100]
@[1-2](You can write function without types in .ts files)
@[4-10](This is how typescript will understand it's types)
@snapend

---
@snap[north span-100 text-06]
## But please don't! @emoji[bomb]
@snapend



@snap[west span-50 text-06]
@ul[list-spaced-bullets list-fade-fragments span-80]
- The compiler effectively treats *any* as _“please turn off type checking for this thing”_
- This only can be helpful when you migrate JS project to typescript  
- in all other cases *"noImplicitAny": true* should be set in *tsconfig.json*
- if you don't know what type to accept - use [unknown](https://www.typescriptlang.org/play?#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-aogBZVH1Eukq3GW2iboLQb0YGlrAObP+-KoD3I-qMTBn4sTfDoDyEViqijgS+N+rkRdtnFF-plDqXwogmD6vUIUxK+rtZBG4AgI9ZsDl0OqWiPIAA+ey-6ndraUQ6H8l7jlddAIoAKmDJCDaATb9htu7bm9oYBPZQEFSiPOfro1QAXfKmse4TsFWfjWKoR2qDRQrDOyCMukzHv2M1Y42HTbyCYvbp4OC5RNwxGEK1qHn5gQ8EjZ+DKugTBmDnOoOuxR5ikANNKTlQochk3YIFVAQA)
@ulend
@snapend

@snap[east]
![IMAGE](assets/img/dont.gif)
@snapend

---
@snap[north text-06 span-100]
## Types can be explicit and implicit
@snapend
@snap[midpoint]
```typescript
// implicit types
let firstName = "Peter" // string
let age = 30 // number
let isMarried = false // boolean
let tags = ['job', 'basketball', 'game'] // string[]
let randomValues = ['James', 23, false] // any[]

// explicit types
let lastName: string = "Parker"
let heightInCm: number = 182
let hasJob: boolean = true
let keywords: string[] = ['cypress', 'js', 'typescript']
let args: any[] = ['--delay', 30, '--save-screenshot', true, '--env', 'dev'] 
```
@snapend
@snap[south span-100]
@[1-6](Implicit types)
@[8-13](Explicit types)
@snapend

---
@snap[north text-06 span-100]
## Typescript basic types
@snapend

@table[](assets/csv/basic_types.csv)

---
@snap[north text-06 span-100]
## Interesting? Let's look closer @emoji[mag_right]
@snapend

@snap[midpoint]
![IMAGE](assets/img/interesting.gif)
@snapend

---
@snap[north text-06 span-100]
## Lets start simple - boolean!
@snapend

@snap[midpoint]
```typescript
let isBoring: boolean = true // primitive boolean type
console.log(isBoring) // true
let shouldStop: boolean = false // primitive boolean type
console.log(shouldStop) // false
```
@snapend

@snapend
@snap[south span-100]
@[1-2](Boolean can be true)
@[3-4](Or false :))
@snapend


---
@snap[north text-06 span-100]
## Boolean has Global function
@snapend

@snap[midpoint span-60]
```typescript
let boolvar=Boolean(true)
console.log(boolvar)           // true
console.log(typeof(boolvar))   // boolean

boolvar=Boolean("") // false
boolvar=Boolean() // false
boolvar=Boolean(0) // false
boolvar=Boolean(1) // true
boolvar=Boolean(null) // false
boolvar=Boolean(undefined) // false
boolvar=Boolean(NaN)    // false
boolvar=Boolean("test")  // true
boolvar=Boolean(100)    // true
boolvar=Boolean({  })  // true
boolvar=Boolean({ name:'test'})  // true
```
@snapend
@snap[south span-100]
@[1-3](You can initialize it without 'new' keyword)
@[5-6](Empty values are false by default)
@[7-8](0 as boolean is false. All other numbers will result in true)
@[9-11](Null, undefined, NaN will result in false)
@[11-16](All other values will result in true. Even empty object)
@snapend

---
@snap[north text-06 span-100]
## Boolean Object
@snapend

@snap[west span-40 text-06]
@ul[list-spaced-bullets list-fade-fragments ]
- *Boolean* is an object and is a wrapper around boolean.primitive type  
- Behaves just like global function
- Since the *Boolean* object is an object, comparing it with boolean value *always* results in true, irrespective of its internal value.
@ulend
@snapend

@snap[east span-60]
```typescript
let log = console.log
let boolVar = new Boolean("test");
log(boolVar); // [Boolean: true]
log(typeof(boolVar)); // object
log(boolobj.valueOf())  // true
log(typeof(boolobj.valueOf())) //boolean
```
@snapend

---
@snap[north text-06 span-100]
## Summary @emoji[zap]
@snapend

@snap[midpoint span-100 text-06]
@ul[list-spaced-bullets list-fade-fragments ]
- *boolean* is a primitive type in Typescript @emoji[white_check_mark]  
- Typescript also has *Boolean* object and global function @emoji[white_check_mark]
- *Always* @emoji[exclamation] use primitive boolean @emoji[white_check_mark]
- When converting the other data types to boolean remember that zero, empty string, null, undefined, NaN returns _false_. Everything else returns _true_. @emoji[white_check_mark]
@ulend
@snapend


---
@snap[north text-06 span-100]
## Hey String! @emoji[wave]
@snapend

@code[typescript zoom-10](src/typescript/string.ts)
@snap[south span-100]
@[1](Use double quotes when you have single quote in the string)
@[2](Use single quotes when you need to use double quotes in string)
@[4](Use back-tick for cases when you need to insert variable into string)
@[5-7](Or when you need to use multi-line string)
@[8-10](Sometimes you get a very long one line string which you can split with '+' or '/')
@snapend

---
@snap[north text-06 span-100]
## String object
@snapend

```typescript
let greeting= new String("Omg! It's you!")
console.log(str1); // [String: 'Omg! It's you!']
console.log(typeof(str1)) // object

let currentCity = 'Tokyo'
let nextCity = new String('Amsterdam')
currentCity = nextCity // Compiler error
nextCity = currentCity // ok
```

@snap[south span-100]
@[1-3](The *String* is a wrapper object around _string_ primitive)
@[4-7](*String* object cannot be assigned to primitive _string_)
@[4-8](But primitive _string_ can be assigned to *String* object)
@snapend

---
@snap[north text-06 span-100]
## String functions
@snapend

@snap[midpoint span-80]
```typescript
let dream="Can't wait to go snowboarding this year"
let wordPosition=dream.indexOf("snowboarding") // 17
let hasWord = dream.includes('year') // true
let phrase = "Yes!".repeat(3) // Yes!Yes!Yes!
```
@snapend

@snap[south span-100]
@[1](We see primitive string which is not supposed to have methods)
@[2](However this works just fine @emoji[open_mouth])
@[3](And this @emoji[open_mouth])
@[4](And this @emoji[open_mouth])
@[2-4](That's because string primitives are coerced into a String object to access methods. The object is used only temporarily and garbage collected once the method call is returned. @emoji[wink])
@snapend

---
@snap[north text-06 span-100]
## Tagged Template
@snapend

@code[typescript zoom-07](src/typescript/tagged_template.ts)

@snap[south span-100]
@[1](Function that takes array of strings which are located between variables in string and list of arguments that are passed as variables)
@[2-7](Then we do some manipulations @emoji[fireworks])
@[9-11](And then log our string with tagged template)
@[12](And we get an updated string @emoji[heart_eyes])
@snapend

---
@snap[north text-06 span-100]
## When could it be helpful? @emoji[confused]
@snapend

@snap[west span-60]
```typescript zoom-06
import {html} from 'common-tags'
let fruits = ['apple', 'orange', 'watermelon']
html\`
  <div class="list">
    <ul>
      ${fruits.map(fruit => `<li>${fruit}</li>`)}
      ${'<li>kiwi</li>\n<li>guava</li>'}
    </ul>
  </div>\`



import {esc} from 'url-escape-tag'
const path = '../root';
const fileNameSuffix = '+bar';
 
console.log(esc`/${path}?suffix=${fileNameSuffix}`);
```
@snapend
@snap[east span-40]
```html zoom-06
<div class="list">
  <ul>
    <li>apple</li>
    <li>orange</li>
    <li>watermelon</li>
    <li>kiwi</li>
    <li>guava</li>
  </ul>
</div>








// /..%2Froot?suffix=%2Bbar
```
@snapend

---
@snap[north text-06 span-100]
## Summary @emoji[zap]
@snapend

@snap[midpoint span-100 text-06]
@ul[list-spaced-bullets list-fade-fragments ]
- *string* is a primitive type in Typescript @emoji[white_check_mark]  
- Typescript also has *String* object @emoji[white_check_mark]
- *Always* @emoji[exclamation] use primitive string @emoji[white_check_mark]
- _string_ primitive has all the methods of *String* object 
- Use _single_ quotes when you have _double_ quotes in string and vise versa
- You can use _back-ticks_ for templating strings or multi line strings
- Long one line strings can be split into parts with _+_ or _/_ symbols
@ulend
@snapend