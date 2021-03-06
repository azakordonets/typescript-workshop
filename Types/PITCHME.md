# Types in Typescript
---
# Part 1
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
let isItFun=Boolean(true)
console.log(isItFun)           // true
console.log(typeof(isItFun))   // boolean

isItFun=Boolean("") // false
isItFun=Boolean() // false
isItFun=Boolean(0) // false
isItFun=Boolean(1) // true
isItFun=Boolean(null) // false
isItFun=Boolean(undefined) // false
isItFun=Boolean(NaN)    // false
isItFun=Boolean("test")  // true
isItFun=Boolean(100)    // true
isItFun=Boolean({  })  // true
isItFun=Boolean({ name:'test'})  // true
```
@snapend
@snap[south span-100]
@[1-3](You can initialize it without 'new' keyword)
@[5-6](Empty values are false by default)
@[7-8](0 as boolean is false. All other numbers will result in true)
@[9-11](Null, undefined, NaN will result in false)
@[12-16](All other values will result in true. Even empty object)
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
let isTest = new Boolean("test");
log(isTest); // [Boolean: true]
log(typeof(isTest)); // object
log(isTest.valueOf())  // true
log(typeof(isTest.valueOf())) //boolean
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

---

@snap[north text-06 span-100]
## Watch out for the Number! @emoji[ocean]
@snapend

@snap[midpoint span-50]
```typescript zoom-08
let decimal: number = 650
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;

let age = Number(35) // will create primitive number
console.log(typeof(age)) // number
console.log(age) // 35

let year = new Number(2020)
console.log(year) // [Number: 2020]
console.log(typeof(year)) // object

age = year // compilation error
year = age // ok
```
@snapend
@snap[south span-100]
@[1-5](All numbers in TypeScript are either floating point values or BigIntegers)
@[1](These floating point numbers get the type *number*)
@[5](While BigIntegers get the type *bigint*)
@[5](BigInt literals are _not available_ when targeting lower than _ES2020_)
@[2-4](In addition to hexadecimal and decimal literals, TypeScript also supports binary and octal literals introduced in ECMAScript 2015)
@[6-9](You can also create primitive number with glabal function _Number_)
@[11-13](The _Number_ is a wrapper object around number. It is created by using the syntax new Number(value). The objects have properties & methods)
@[15-16](You can assign primitive number to Number object, but not the other way around.)

@snapend

---

@snap[north text-06 span-100]
## Max, Min & Safe Values
@snapend

@snap[midpoint span-85]
```typescript zoom-08
console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER) // -9007199254740991

console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)); // true
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER+1)); // false

console.log(Number.MAX_VALUE) // 1.7976931348623157e+308
console.log(Number.MIN_VALUE) // 5e-324

console.log(Number.POSITIVE_INFINITY) // Infinity
console.log(Number.NEGATIVE_INFINITY) // -Infinity
console.log(Number.MAX_VALUE * 2) // Infinity

console.log(Number.isFinite(Number.POSITIVE_INFINITY)); // true
console.log(Number.isFinite(100)); // false
```
@snapend
@snap[south span-100 text-06]
@[1-5](The above limitations are due the fact that the Javascript stores the numbers as double-precision 64-bit number. Each number can be stored using the total 64-bit memory. Out of 64bits, one is used for the sign, 11 for the exponent and remaining 52 bits are used for the mantissa (significand))
@[1](The max integer that can be stored in 52 bits is _9007199254740991_. It is represented by *"MAX_SAFE_INTEGER"*)
@[2](The minimum value is _-9007199254740991_ and is represented by *"MIN_SAFE_INTEGER"*)
@[4-5](You can use the _Number.isSafeInteger_ method to check whether the number is safe.)
@[7](The largest number possible to represent using the number data type is _1.7976931348623157e+308_ and it is represented by _Number.MAX_VALUE_)
@[8](The lowest number is _Number.MIN_VALUE_)
@[10-12](Global Number object has *Infinity* property)
@[12](Infinity can result in many ways, for example multiplying Number.MAX_VALUE by 2 results in infinity.)
@[14-15](You can use the _Number.isFinite_ method to verify whether the number is finite.)

@snapend

---
@snap[north text-06 span-100]
## NaN @emoji[no_good]
@snapend

@snap[midpoint span-45]
```typescript zoom-06
console.log(Number('New10')) // NaN
console.log(typeof(NaN)) // number

console.log(parseInt("Google")) // NaN
console.log(Math.round("BigNumber")) // NaN
console.log(parseInt(undefined)) // NaN
console.log(0/0) // NaN
console.log(Infinity*0) // NaN
console.log(Number.NaN + 1) // NaN

let houseNumber = Number.NaN
let officeNumber = houseNumber
console.log(houseNumber == officeNumber) // false
console.log(houseNumber != officeNumber) // true

console.log(isNaN(NaN));    //true
console.log(isNaN("ABN"));    //true

console.log(Number.isNaN(NaN));      //true
console.log(Number.isNaN("ABN"));   //false

isNaN(true);  // false
isNaN(false); // false

```
@snapend
@snap[south span-100 text-06]
@[1-2](*NaN* in Typescript stands for *Not a Number*. It is the result of numerical operations, where result is not a *number*. It is the property of the global object.)
@[4-9](You can get *NaN* in multiple ways)
@[4](Trying to *parseInt* from string)
@[5](Trying to *Math.round* from string)
@[6](Trying to convert *undefined* to number)
@[7](Trying to divide zero by zero )
@[8](When you involve *Infinity*)
@[9](Or *NaN* itself)
@[11-14](Any comparison between the two *NaN*'s always results in false. NaN is *never equal to itself*)
@[16](You can check whether a valua is *NaN* by using global *isNaN* method)
@[17](But, if you use this function to check a _non-numeric_ value like _string_. Typescript compiler throws an _error_ here. But code compiles and isNaN tries to convert the “test” into a number, which results in a NaN value. Hence the output is true.)
@[19-20](You can also use the _Number.IsNaN_ method, But it _does not forcefully convert_ the parameter to a number. If the argument is not a number, then it results false.)
@[22-23](_Booleans_ are implemented as _numerical values_ with a single binary digit (i.e., 0 & 1). Hence they are treated as numbers.)
@snapend

---
@snap[north text-06 span-100]
## BigInt @emoji[bear]
@snapend

@snap[midpoint span-55]
```typescript zoom-06
let howMuchMoneyIwant = 9007199254740991n
console.log(typeof(howMuchMoneyIwant) // bigint

let howHardMyDaughterLikesMyKeys = BigInt(9007199254099);
console.log(typeof(howHardMyDaughterLikesMyKeys)) // bigint

let howManyStarsYouSee=9007199254740991n;
console.log(howManyStarsYouSee + 1n); //9007199254740992n
console.log(howManyStarsYouSee * 10n);     //90071992547409910n
console.log(howManyStarsYouSee / 5n);     //1801439850948198n

console.log(4n / 2n) //2n
console.log(5n / 2n) //2n  and not 2.5 

console.log(howManyStarsYouSee + 100); // Error

console.log(typeof(BigInt(100))) // bigint
console.log(typeof(Number(100n))) // number

console.log(1n < 2)     //true
console.log(2n > 1)     //true
console.log(2n > 2)     //false
console.log(2n >= 2)    //true
0n === 0   // false
0n == 0    // true

```
@snapend
@snap[south span-100 text-06]
@[1-2](The _bigint_ is a new _primitive_ type in Typescript. It is available only if you target _esnext_ in _tsconfig.json_. it represents the whole number. It can hold numbers _larger than 2^53 – 1)
@[4-5](You can also call global function *BigInt*)
@[1-5](The _bigint_ can handle the large values and _not limited_ as the _Number_ datatype, which has (*Number.MAX_SAFE_INTEGER*). BigInt is limited by the available memory of the host system)
@[7-10](The BigInt can be used with the following arithmetic operations _+_, _*_, _-_, _**_, _%_. Bitwise operators like _&_, _|_ , _^_ , _~_, _<<_ , _>>_, (except _>>>_ Zero fill right shift) operators. The unary operator _+_ is also not supported.)
@[12-13](The _/_ division operator rounds of the final result to the whole number)
@[15](bigint can not be mixed with operations where numbers are involved. Either you convert number to bigint or convert bigint to number.)
@[17](You can use the *BigInt* function to convert the _number_ to a _bigInt_)
@[18](You can use the *Number* function to convert the _bigInt_ to a _number_)
@[20-25](The comparison operators work well between _bigInt_ and a _number_)

@snapend

---
@snap[north text-06 span-100]
## Summary @emoji[zap]
@snapend

@snap[midpoint span-80 text-06]
@ul[list-spaced-bullets list-fade-fragments ]
- *number* is a primitive type in Typescript @emoji[white_check_mark]  
- Typescript also has *Number* object @emoji[white_check_mark]
- *Always* @emoji[exclamation] use primitive string @emoji[white_check_mark]
- _number_ is limited by *MAX_SAFE_INTEGER* and *MIN_SAFE_INTEGER*
- *Infinity* is a value greater then *MAX_SAFE_INTEGER*
- *NaN* means *Not a Number* and is the result of numerical operations, where result is _not_ a number
- *bigint* is another privitive type which is available in *esnext* target
- *bigint* is limited by the available memory of the host system
@ulend
@snapend

---
@snap[north text-06 span-100]
## Arrays
@snapend

@snap[midpoint span-65]
```typescript zoom-06
let scores: number = [10, 20, 30, 40, 50]
let validationResults: Array<boolean> = [false, true, false]
let failedTestNames: string = ['smoke', 'get_user', 'create_company']

scores.push(60) //  [10, 20, 30, 40, 50, 60]
scores[1] = 70 // [10, 70, 30, 40, 50, 60]
for (let i = 0; i < scores.length; i++) {
    console.log(scores[i]);     // Outputs 10 70 30 40 50 60
}
for (let score of scores) {
    console.log(score);     // Outputs 10 70 30 40 50 60
}
for (let score in scores) {
    console.log(score);     // Outputs 0 1 2 3 4 5
}
let clonedScores = [...scores] // 10 70 30 40 50 60
scores.push(80)
console.log(scores)  // 10 70 30 40 50 60 80
console.log(clonedScores) // 10 70 30 40 50 60

let initialScores :number[] = [10, 20];   
let updatedScores :number[] = [30, 50];   
let mergedScore = [...initialScores, ...updatedScores] // [10, 20, 30, 40]
```
@snapend
@snap[south span-100 text-06]
@[1-2](Array types can be written in one of two ways)
@[3](Arrays are *static*. This means that an array once initialized cannot be resized)
@[5-6](Array *element* values can be updated or modified but *cannot be deleted*)
@[7-9](You can iterate through array with traditional for loop)
@[9-12](When you iterate through array with for...of loop you get values of the array)
@[13-15](When you iterate through array with for...in loop you get @emojii[exclamation] keys(index) of the array)
@[15-19](In order to safely modify array values, you can clone it)
@[20-23](Arrays can be merged as well)
@snapend

---

@snap[north text-06 span-100]
## Summary @emoji[zap]
@snapend

@snap[midpoint span-80 text-06]
@ul[list-spaced-bullets list-fade-fragments ]
- *arrays* are static. This means that an array once initialized *cannot be resized*  
- Typescript checks type of element that you're trying to pass to array
- Array elements can be accessed by their index
- Arrays can be cloned or merged
- For...of loop returns values of the array
- For...in loop returns *indexes* of the array
@ulend
@snapend

---
 
@snap[north text-03 span-100]
## Questions @emoji[grey_question]
@snapend

@snap[midpoint]
![IMAGE](assets/img/question.gif)
@snapend

---
# Part 2
---
@snap[north text-06 span-100]
## Tuple @emoji[tulip]
@snapend

@snap[midpoint span-80]
```typescript zoom-09
let passedTests: [string, number] = ['Passed', 20] // ok
let failedTests: [string, number] = ['Failed', 20] // ok
let skippedTests: [string, number] = ['Skipped', '30'] // error
let skippedTests: [string, number] = [30, 'Skipped'] // error

type Point3D = [number, number, number]
let start: Point3D = [10, 20, 30]
let [x, y, z] = start // x = 10, y = 20, z = 30
let x = start[0] //x = 10
```
@snapend
@snap[south span-100 text-06]
@[1-2](Tuples are handy when we need to store different type values in a single variable.)
@[3-4](If we will try to pass wrong type of argument, or in incorrect order arguments - we will get an error)
@[6](Tuples are handy to describe some custom types)
@[7-8](You can use destruction to get values of the tuple)
@[9](Or you can access values by index)
@snapend

---
@snap[north text-06 span-100]
## Using Tuples in Rest Parameters @emoji[tulip]
@snapend

@snap[midpoint span-50]
```typescript zoom-07
type Point3D = [number, number, number]

const draw = (...point3D: Point3D) => {
    console.log(point3D)
}

let point: Point3D = [10, 20, 30]
draw(10, 20, 30) // [10, 20, 30]
draw(point[0], point[1], point[2]) // [10, 20, 30]
draw(...point) // [10, 20, 30]

const unsafeDraw = (point3D: number[]) => {
    console.log(point3D)
}
unsafeDraw([10, 20, 30]) // [10, 20, 30]
unsafeDraw([10, 20, 30, 40]) // [10, 20, 30, 40] :(
unsafeDraw([]) // [] :(

draw(...[]) // error
draw(...[10, 20, 30, 40]) // error
```
@snapend
@snap[south span-100 text-06]
@[1](Let's say we have Point3D type that represents a Tuple with 3 numbers)
@[3-5](We can define a function that uses rest parameter syntaxis and tuple type)
@[7-10](We can call this function in different ways, but spread operator works in the cleanest way)
@[12-14](But what if we gonna create same function in a more JS way? )
@[15-17](Then we'll be forced to check the lenght of the input array in the function itself @emoji[grin])
@[19-20](While Typescript won't let this happen with rest parametrized tuple! @emoji[heart_eyes])
@snapend

---
@snap[north text-06 span-100]
## Optional Tuple Elements @emoji[tulip]
@snapend

@snap[midpoint span-60]
```typescript zoom-07
type Point = [number, number?, number?]

const x: Point = [10]
const xy: Point = [10, 20]
const xyz: Point = [10, 20, 10]

console.log(x.length) // 1

type Point = [number, number?, number] // error

type TestScores = [string, ...number[]];
const thaliaTestScore = ["Thalia", ...[100, 98, 99, 100]];
console.log(thaliaTestScore); // [ 'Thalia', 100, 98, 99, 100 ]

const jamesTestScore = ["James", [100, 98, 99, 100]];
console.log(jamesTestScore); // [ 'James', [100, 98, 100]]
```
@snapend
@snap[south span-100 text-06]
@[1-5](We could create a generic Point tuple that could become two or three-dimensional depending on how many tuple elements are specified)
@[7](We can determine what kind of point we have based on the length of the tuple)
@[9](If we need to list multiple optional elements, they have to be listed with the postfix ? modifier on its type at the end of the tuple. An optional element cannot have required elements to its right but it can have as many optional elements as desired instead)
@[10-13](Last element of Tuple can be a rest element, *...element*. The one restriction for this rest element is that it has to be an array type)
@[14-16](Don't forget to add the _..._ operator to the array. Otherwise, the tuple will get the array as it second element and nothing else. The array elements won't spread out into the tuple:)
@snapend

---

@snap[north text-06 span-100]
## Summary @emoji[zap]
@snapend

@snap[midpoint span-80 text-06]
@ul[list-spaced-bullets list-fade-fragments ]
- *tuples* types allow you to express an array with a fixed number of elements whose types are known, but need not be the same 
- Typescript checks type of element that you're trying to pass to tuple
- Tuples with rest operator are very handy
- Tuples support optional elements
@ulend
@snapend

---

@snap[north text-06 span-100]
## Enum
@snapend

@snap[midpoint span-40]
```typescript zoom-07
enum Direction {
    Right = 1
    Left = 2
    Up = 3
    Down = 4
}
console.log(typeof(Direction)) // object
console.log(typeof(Direction)) // number

console.log(Direction.Right) // 1
console.log(Direction['Left']) // 2
console.log(Directions['3']) // Up

enum Direction {
    Right
    Left
    Up
    Down
}
console.log(Direction.Right) // 0
console.log(Direction['Left']) // 1
```
@snapend
@snap[south span-100 text-06]
@[1-6](*Enum* allows us to define the collection of related values to be used by name)
@[7-8](There are 3 types of enums: _numeric_, _string_, _Heterogeneous_ enums (both string & numbers))
@[10](We can reffer to the enum value by it's name)
@[11](Or in a bit different way of specifying name)
@[12](Or you can reference enum by it's value)
@[13-21](If you don't specify value for the enum, then it will be automatically assigned starting from 0)
@snapend

---

@snap[north text-06 span-100]
## Numeric enum
@snapend

@snap[midpoint span-30]
```typescript zoom-05
enum Direction {
 Right // 0
    Left // 1
    Up // 2
    Down // 3
}

enum Direction {
    Right = 2
    Left // 3
    Up // 4
    Down // 5
}

console.log(Direction[2]) // Right
console.log(Direction)
// Output
// {
//  '2': 'Right',
//  '3': 'Left',
//  '4': 'Up',
//  '5': 'Down',
//  Right: 2,
//  Left: 3,
//  Up: 4,
//  Down: 5,
// }

```
@snapend
@snap[south span-100 text-06]
@[1-6](The _Numeric enum_ stores the values as a number. You can define an enum without assigning a value as shown below. The Typescript automatically assigns the numeric values starting from 0.)
@[8-13](You can provide a starting number as shown in the example below. All the following elements with get automatically next number)
@[15](You would think that you can only  access enum value by it's name, but actually you can also get it by it's value)
@[16-30](Because this is how enum looks like when you log it's structure)
@snapend

---

@snap[north text-06 span-100]
## Computed Enum
@snapend

@snap[midpoint span-50]
```typescript zoom-07
enum VehicleType {
  Car=1,
  Plane,
  Train= 5 + VehicleType.Plane, // 7
  Bike = getRandomNumberBetween(10,20) // 11
}
 
console.log(VehicleType)
 
// Output:
// { '1': 'Car',
//    '2': 'Plane',
//    '7': 'Train',
//    '11': 'Bike',
//    Car: 1,
//    Plane: 2,
//    Train: 7,
//    Bike: 11 
//  }

```
@snapend
@snap[south span-100 text-06]
@[4](Enum can also include the members with computed values.)
@[5](Actually you can use any function)
@[7-30](As always, it will autogenerate next available numbers for the rest)
@snapend

---

@snap[north text-06 span-100]
## String Enum
@snapend

@snap[midpoint span-50]
```typescript zoom-07
enum VehicleType {
  Car="Car",
  Plane="Plane",
}
 
console.log(VehicleType.Car);      //Car
console.log(VehicleType["Car"]);   //Car

function printVehicle(v: Vehicle) {
    switch (val) {
        case VehcileType.Car:
          console.log("It is a Car");
          break;
        case VehcileType.Plane:
          console.log("It is a Plane.");
          break;
        default:
          console.log("No such vehicle");
          break;
      }
}

```
@snapend
@snap[south span-100 text-06]
@[1-4](We can also use the strings instead of numbers as values.The only difference is that the we must initialize the values.)
@[6-7](You can access it just like with Number Enums)
@[8-30](Enums help to clearly define what action need to be done based on Enum value)
@snapend

---

@snap[north text-06 span-100]
## Heterogeneous Enums
@snapend

@snap[midpoint span-50]
```typescript zoom-10
enum ShouldIUseThisFeature {
  No = 'NO',
  Yes = 1
}

```
@snapend
@snap[south span-100 text-06]
@[1-10](Technically enums can be mixed with string and numeric members, but it’s not clear why you would ever want to do so. Better not do that)
@snapend

---

@snap[north text-06 span-100]
## Const Enums
@snapend

@snap[midpoint span-50]
```typescript zoom-10
const enum VehicleType {
  Car,
  Plane,
  Train
}
 
console.log(VehcileType.Car)        //0
console.log(VehcileType["Car"])     //0
console.log(VehcileType["Plane"])   //1
console.log(VehcileType[0])         //ERROR
console.log(VehcileType[1])         //ERROR
```
@snapend
@snap[south span-100 text-06]
@[1-5](If an enum is prefixed with the keyword const, it doesn’t get transpiled. i.e. no javascript code is emitted. Instead, the compiler will replace the value of its member directly in the transpiled code, wherever they are used.)
@[7-15](Since they do no have runtime representation, you cannot use computed member)
@snapend

---

@snap[north text-06 span-100]
## Type checking
@snapend

@snap[midpoint span-40]
```typescript zoom-06
enum VehicleType {
  Car, Plane, Train
}
 
function describe(vehicle: VehicleType) {
  console.log(vehicle);
}
describe(VehicleType.Car)  // OK
describe(100)             // 100
describe("Test")          //Error

enum VehicleType {
  Car="C", Plane="P", Train="T"
}
 
function describe(vehicle: VehicleType) {
  console.log(vehicle);
}
 
someFn(VehicleType.Car)  //OK
describe(100)             //Error
describe("Test")          //Error
```
@snapend
@snap[south span-100 text-06]
@[1-8](The Typescript performs a _loose type checking_ when number members are involved. For example the describe accepts VehicleType as argument. But describe also accepts any number. )
@[9](Invoking _describe(100)_ with 100 as argument does not throw any errors.)
@[10](But if you will pass something that is *not a number*, then you will get an *error*)
@[11-30](But in case of _string_ enums it works as expected)
@snapend

---

@snap[north text-06 span-100]
## Summary @emoji[zap]
@snapend

@snap[midpoint span-80 text-06]
@ul[list-spaced-bullets list-fade-fragments ]
- *enum* types allows us to define the collection of related values to be used by name. 
- They make the code easier to read 
- Typescript checks type of element that you're trying to pass to tuple
- You may use them when you want to limit the values that a variable can take to a small set of possible values
- Javascript does not support enums, hence typescript creates runtime artifact to support them ( Except, *const enum* which do not have a runtime artifact).
- Enums can be _numeric_, _string_, _heterogeneous_. Please do _not_ use _heterogeneous_ enums
@ulend
@snapend

--- 

@snap[north text-06 span-100]
## null && undefined
@snapend

@snap[midpoint span-60]
```typescript zoom-05
// Not much else we can assign to these variables!
let name: undefined = undefined
let lastName: null = null

let age: number
console.log(age) // undefined
age = 20 // 20 
age = undefined // undefined

let total: number // undefined
total=null // null

let name: string;
name = "John Wick";       // ok
name = undefined;        // Type 'undefined' is not assignable to type 'string'  
name = null;             // Type 'null' is not assignable to type 'string'
  
let forecast: any
forecast = 24;               // ok
forecast = undefined;        // ok
forecast = null;             // ok
 
let phone: nul
phone = undefined;       // Type 'undefined' is not assignable to type 'null'
phone = null;            // ok
 
let result: undefined
result = undefined;         // ok
result = null;              // Type 'null' is not assignable to type 'undefined'.
```
@snapend
@snap[south span-100 text-06]
@[1-3](In TypeScript, both _undefined_ and _null_ actually have their own types named undefined and null respectively. Much like _void_, they’re not extremely useful on their own)
@[5-6](The Undefined means a variable has been declared but has not yet been assigned a value. The undefined variables do not have any value. It is an unintentional absence of any value)
@[7-8](We can also assign undefined value variables of any other types, except _never_)
@[10-12](_Null_ means an _empty_ or _non-existent_ value. The absence of value here is _intentional_. The TypeScript does not automatically make a variable null. We have to assign Null to variable to make it null)
@[13-30](Now, with _"strictNullChecks": true_ in _tsconfig.json_, the compiler raises the error when you assign undefined or null to any variables except any. Even assigning undefined to a null variable or vice versa also results in a compile-time error)
@snapend

---

@snap[north text-05 span-100]
## Checking for undefined and null @emoji[ok]
@snapend

@snap[midpoint span-90]
```typescript zoom-07
let age: number| null | undefined;
console.log(age)                     // undefined
console.log(typeof age)              // undefined
console.log(age == null)             // true // == operator returns true for null
console.log(age === null)            // false
console.log(age == undefined)        // true
console.log(age === undefined)       // true

age=null;
console.log(age)                     // null
console.log(typeof age)              // object
console.log(age==null)               // true
console.log(age===null)              // true
console.log(age==undefined)          // true   //  == operator returns true for undefined
console.log(age===undefined)         // false
```
@snapend
@snap[south span-100 text-06]
@[1-7](You can check for _undefined_ using the _typeof_ operator or by using the Equals Operator _==_ vs Strict Equals Operator _===_)
@[9-20](You _cannot_ use _typeof_ operator to check for null as it returns _object_. Hence you can either use the _==_ or _===_)
@snapend

---

@snap[north text-06 span-100]
## Summary @emoji[zap]
@snapend

@snap[midpoint span-80 text-06]
@ul[list-spaced-bullets list-fade-fragments ]
- The _undefined_ variables do not have any value. It is an unintentional absence of any value
- _Null_ means an empty or non-existent value. The absence of value here is intentional.
@ulend
@snapend

---

@snap[north text-05 span-100]
## Any @emoji[stars]
@snapend

@snap[midpoint span-40]
```typescript zoom-07
let stock          //inferred typing 
let reason: any    //explicit typing

let score: any
score = "100.5175";
score = { lakers: 90, goldenState: 95 }
score = 100.51575;

let { coolHack } from 'third-party-lib'
let maxValue: Any = coolHackValue  

```
@snapend
@snap[south span-100 text-06]
@[1-2](The typescript creates a variable as Any under the following circumstances: 1. If you do not declare the type and typescript does not infer the type from its initialization or from its usage - inferred typing. 2) You explicitly declare the type as Any  - explicit typing)
@[4-7](The Typescript compiler does _not_ make type checking on the variable of type _Any_.  When you define a variable as Any, you are basically opting out of type checking)
@[9-10](You can use _Any_ when you do not know the data type of the variable. This may be the case when you work with the third-party libraries and does not want the compiler to throw errors)
@snapend

---

@snap[north text-05 span-100]
## Void vs Never @emoji[no_entry]
@snapend

@snap[midpoint span-80]
```typescript zoom-09
function error(message: string): never {
  throw new Error(message);
}

// Function returning never must not have a reachable end point
function infiniteLoop(): never {
  while (true) {}
}

function log(msg: string): void {
    console.log(msg)
}  

```
@snapend
@snap[south span-100 text-06]
@[1-8](The _never_ type represents the type of values that _never occur_. For instance, never is the return type for a function expression or an arrow function expression that always throws an exception or one that never returns)
@[10-20](We use _void_ when the function _does return_ but _does not return a value_)
@[1-8](The _never_ return type when the function _does not return at all_)
@snapend

---

@snap[north text-05 span-100]
## Any vs Unknown @emoji[grey_question]
@snapend

@snap[midpoint span-60]
```typescript zoom-06
function prettyPrint(x: unknown): string {
  if (Array.isArray(x)) {
    return "[" + x.map(prettyPrint).join(", ") + "]"
  }
  if (typeof x === "string") {
    return `"${x}"`
  }
  if (typeof x === "number") {
    return String(x)
  } 
  return "etc."
}

import isArray from "isarray"

function prettyPrint(x: any): string {
  if (isArray(x)) { // whoops - this `isArray` is not a type guard!
    return "[" + x.mop(prettyPrint).join(", ") + "]"
  }
  /* snip */
  return "etc."
}

```
@snapend
@snap[south span-100 text-06]
@[1](Any value can be assigned to a variable of type _unknown_. So use unknown when a value might have any type, or when it is not convenient to use a more specific type)
@[1-12](You _cannot do much_ with an unknown value directly. But you can use _type guards_ to narrow the type and get accurate type-checking for blocks of code operating on narrowed types.)
@[14-30](The _isarray_ package does not include type definitions to turn the _isArray_ function into a _type guard_. But we might use isarray without realizing that detail. Because isArray is not a type guard, and we used any for the type of x, the type of x remains any in the if body. As a result, the compiler does not catch the typo in this version of prettyPrint.)
@snapend

---

@snap[north text-06 span-100]
## When use any, never, uknown @emoji[grey_question]
@snapend

@snap[midpoint span-80 text-06]
@ul[list-spaced-bullets list-fade-fragments ]
- Use _never_ in positions where there will not or should not be a value.
- Use _unknown_ where there will be a value, but it might have any type.
- _Avoid_ @emoji[exclamation] using _any_ unless you really need an unsafe escape hatch
@ulend
@snapend

---

@snap[north text-05 span-100]
## Symbol @emoji[symbols]
@snapend

@snap[midpoint span-70]
```typescript zoom-08
const head = Symbol()
const title = Symbol('title')
Symbol('title') === Symbol('title') // always false

console.log(title.description) // title
console.log(title.toString()) // Symbol(title)

var password = Symbol('password');
var person = {};
person['name'] = 'John Wick';
person[password] = 'superSecretPassword';
Object.keys(person); // -> [ 'name' ]
Object.getOwnPropertyNames(person); // -> [ 'name' ]
Object.getOwnPropertySymbols(person); // -> [ Symbol(name) ]
assert(Object.getOwnPropertySymbols(person)[0] === password);
```
@snapend
@snap[south span-100 text-06]
@[1](_Symbol_ is a primitive data type in JavaScript and TypeScript, which, amongst other things, can be used for object properties. Compared to number and string, symbols have some unique features that make them stand out.)
@[2](_Symbol_ has no constructor function. The parameter is an _optional_ description. By calling the factory function, _title_ is assigned the unique value of this freshly created symbol)
@[3](This _symbol_ is now unique, distinguishable from all other symbols and doesn’t clash with any other symbols that have the same description.)
@[5-6](The _description_ helps you to get info on the Symbol during development time)
@[8-13](In addition to that, _Symbols_ do not show up on an Object using _for...in_, _for...of_ or _Object.getOwnPropertyNames_)
@[14-15](The only way to get the _Symbols_ within an Object is _Object.getOwnPropertySymbols_)
@[14-15](This means _Symbols_ give a whole new sense of purpose to Objects - they provide a kind of _hidden under layer to Objects_ - not iterable over, not fetched using the already existing Reflection tools and guaranteed not to conflict with other properties in the object!)
@snapend

---

@snap[north text-03 span-100]
## What Symbols are, what Symbols aren’t.
@snapend
@snap[midpoint span-100 text-04]
@ul[list-spaced-bullets list-fade-fragments span-80]
- _Symbols will never conflict with Object string keys_. This makes them great for extending objects you’ve been given (e.g. as a function param) without affecting the Object in a noticeable way.
- _Symbols cannot be read using existing reflection tools_. You need the new _Object.getOwnPopertySymbols()_ to access an Object’s symbols, this makes Symbols great for _storing bits of information you don’t want people getting at through normal operation_. Using Object.getOwnPropertySymbols() is a pretty special use-case.  
- _Symbols are not private_. The other edge to that sword - all of the Symbols of an object can be gotten by using Object.getOwnSymbols() - not very useful for a truly private value. _Don’t try to store information you want to be really private in an Object using a symbol - it can be gotten!_
- _Enumerable Symbols can be copied to other objects using new methods like Object.assign_. If you try calling Object.assign(newObject, objectWithSymbols) all of the (enumerable) Symbols in the second param (objectWithSymbols) _will be copied to the first_ (newObject). If you don’t want this to happen, make them non-enumerable with _Object.defineProperty_
- _Symbols are not coercible into primitives_. If you try to coerce a Symbol to a primitive (+Symbol(), ''+Symbol(), Symbol() + 'foo') it will throw an Error. This prevents you accidentally _stringifying_ them when setting them as property names
- _Symbols are not always unique_. _Symbol.for()_ returns you a _non-unique_ Symbol. Don’t always assume the Symbol you have is unique, unless you made it yourself.
@ulend
@snapend

---

@snap[north text-03 span-100]
## Questions @emoji[grey_question]
@snapend

@snap[midpoint]
![IMAGE](assets/img/question.gif)
@snapend

---