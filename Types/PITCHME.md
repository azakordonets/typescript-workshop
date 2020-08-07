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