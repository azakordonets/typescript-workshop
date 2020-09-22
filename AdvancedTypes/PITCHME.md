# Advanced Types in Typescript
---
@snap[north span-100 text-08]
## Interfaces
@snapend

@snap[midpoint span-100]
@ul[midpoint list-spaced-bullets text-07 span-100]
- Interface is a structure that defines the contract in your application
- It defines the syntax for classes to follow  
- Classes that are derived from an interface must follow the structure provided by their interface
- The TypeScript compiler does not convert interface to JavaScript. It uses interface for type checking. This is also known as "duck typing" or "structural subtyping"
@ulend
@snapend

---
@snap[north span-100 text-08]
## Let's start simple @emoji[pencil2]
@snapend

@snap[midpoint span-80]
```typescript
function print(person: { firstName: string }) {
  console.log(person.firstName)
}

print({ firstName: "John", lastName: "Wick" }) // ok
print({lastName: 'Wick'}) // error


interface Person {
    name: string
}
function print(person: Person) {
    console.log(person.name)
}

print({ firstName: "John", lastName: "Wick" }) // ok
print({lastName: 'Wick'}) // error
```
@snapend

@snap[south span-100]
@[1-5](As a *Person* interface we use here simple object that defines field names and their types. )
@[6](if we will try to pass an object that doesn't correspond to stated interface - typescript will show compilation error)
@[9-16](We can also explicitly specify interface using *interface* keyword)
@[17](The same way we will get an error if we will try to pass an object that doesn't match to *Person* interface)
@snapend

---
@snap[north span-100 text-08]
## Interface for classes
@snapend

@snap[west span-50]
```typescript zoom-08
interface IEmployee {
    code: number
    name: string
    getSalary: (number) => number
    getDepartmentID(): number
}
```
@snapend

@snap[east span-50]
```typescript zoom-06
class ITEmployee implements IEmployee {
    isFrontEnd: boolean
    code: number
    name: string
    getSalary(number): number {
        return this.isFrontEnd ? number * 2 : number * 3
    }

    getDepartmentID(): number {
        return 3
    }
}
```
@snapend

@snap[south span-70]
```typescript zoom-07
function logEmployeeDetails(employee: IEmployee) {
    const name = employee.name
    const departmentId = employee.getDepartmentID
    const salary = employee.getSalary(10)
    console.log(\`${name} from ${departmentId} has ${salary} salary\`)
}
```
@snapend

---
@snap[north span-100 text-08]
### Why would I need it @emoji[grey_question]
@snapend

@snap[midpoint span-50]
```typescript zoom-05
interface IStoreMechanism {
    store(name: string, path: string, payload: string): void
}

class S3StoringMechanism implements IStoreMechanism {
    store(name: string, path: string, payload: string) {
        // store using S3 aws sdk
    }
}

class LocalStoringMechanism implements IStoreMechanism {
    store(name: string, path: string, payload: string) {
        // store on local system
    }
}

class TestResultsProcessor {
    saveResult(storingMechanism: IStoreMechanism,
               name: string, path: string,
               payload: string) {
        storingMechanism.store(name, path, payload)
    }
}

const testResultProcessor = new TestResultsProcessor()
let s3 = new S3StoringMechanism()
testResultProcessor.saveResult(s3, 'smoke', '/', 'pass')
let local = new LocalStoringMechanism()
testResultProcessor.saveResult(local, 'smoke', '/', 'pass')
```
@snapend

@snap[south span-100]
@[1-3](Let's say we have a simple interface for storing some data)
@[5-16](And we have also 2 implementations of this interface *S3StoringMechanism* and *LocalStoringMechanism*)
@[17-23](If we define input parameter as *IStoringMechanism* interface)
@[25-40](Then we can actually use both of our implementations in the same method!)
@snapend

---
@snap[north span-100 text-08]
## Interfaces as Type
@snapend

@snap[midpoint span-80]
```typescript zoom-07
interface TestResult {
    name: string
    passed: number
    failed: number
}

let smoke: TestResult = {name: 'Smoke', passed: 10, failed: 2} // OK

let e2e: TestResult = {testName: 'E2E', passed: 10, failed: 2} // Compiler Error

let int: TestResult = {name: 'Int', passed: '10', failed: '2'} // Compiler Error 
```
@snapend

@snap[south span-100]
@[1-5](Interface in TypeScript can be used to define a type and also to implement it in the class.)
@[7](Here we define *smoke* Test Result with proper set of fields and their types)
@[9](If we try to pass a key that doesn't exist in *TestResult* interface - we'll get an _Compiler Error: 'testName' doesn't exist in type 'TestResult'_ error)
@[11](If we try to pass values that don't match key type - we'll get _Initializer type {name: string, passed: string, failed: string} is not assignable to variable type TestResult_ error)
@snapend

---
@snap[north span-100 text-08]
### Interfaces as Function Type
@snapend

@snap[midpoint span-80]
```typescript zoom-06
enum UserType {Regular, Admin, Partner}

interface UserCreationProcessor {
    (name: string, role?: UserType): User
}

function createUser(name: string): User {
    return userService.createUser(name)
}

function createUserWithRole(name: string, role: UserType): User {
    const user = this.createUser(name)
    userService.setRole(user.id, role)
    return user
}

function createApplication(createUser: UserCreationProcessor, userDetails: UserDetails) {
    const name = userDetails.name
    const role = userDetails.role
    const user = role === UserType.Regular ? createUser(name) : createUser(user, role)    
}

const userDetails = {name: 'John Wick', role: UserType.Regular}
const app = createApplication(createUser, userDetails) // ok
const app = createApplication(createUserWithRole, userDetails) // ok
```
@snapend

@snap[south span-100]
@[1-5](TypeScript interface is also used to define a *type of function*. This ensures the function signature)
@[7-15](Now we can define functions that correspond to the interface we defined)
@[17-21](We can now specify *interface* type as an input to the function where we want to use this predefined functions)
@[22-25](And we can use this functions as input parameters in the top function when we need it)
@snapend

---
@snap[north span-100 text-08]
### Interfaces for Array Type
@snapend

@snap[midpoint span60]
```typescript zoom-06
interface Scores {
    [index:number]:number
}

let matchScores: Scores = [10, 15, 30]
matchScores[0] // 10
matchScores[1] // 15

interface CarsList {
    [index:number]:{id: number, brand: string, color: string}}
}

const cars = [{id: 1, brand: 'Ford', color: 'Red'}, 
              {id: 2, brand: 'Honda', color: 'Black'}]

const ford = cars.find(car => car.brand === 'Ford')

interface Car {
    id: number, brand: string, color: string
}

interface CarsList {
    [index: number]: Car
}
```
@snapend

@snap[south span-100]
@[1-7](An interface can also define the type of an array where you can define the type of index as well as values.)
@[8-17](It can be handy when you want to specify a type for a list of some specific objects)
@[18-30](You can also use specific interface to define list of types)
@snapend

---
@snap[north span-100 text-08]
## Optional property @emoji[grey_question]
@snapend

@snap[midpoint span-40]
```typescript zoom-08
interface IEmployee {
    empCode: number
    empName: string
    empDept?: string
}

let steve: IEmployee = {   // OK
    empCode: 1,
    empName: "Steve"
}

let bill: IEmployee = {    // OK
    empCode:1,
    empName:"Bill",
    empDept:"IT"
}
```
@snapend

@snap[south span-100 text-06]
@[1-5](Sometimes, we may declare an interface with excess properties but may not expect all objects to define all the given interface properties. We can have optional properties, marked with a *"?"*. In such cases, objects of the interface may or may not define these properties.)
@[7-17](In the above example, *empDept* is marked with *?*, so objects of IEmployee may or may not include this property.)
@snapend

---
@snap[north span-100 text-08]
## Readonly properties @emoji[hammer]
@snapend

@snap[midpoint span-80]
```typescript zoom-08
interface Citizen {
    name: string
    readonly SSN: number
}

let citizen: Citizen  = { SSN: 110555444, name: 'James Bond' }

citizen.name = 'Steve Smith' // OK
citizen.SSN = '333666888' // Compiler Error
```
@snapend

@snap[south span-100]
@[1-5](TypeScript provides a way to mark a property as read only. This means that once a property is assigned a value, it cannot be changed!)
@[6-17](In the above example, the *SSN* property is *read only*)
@snapend

---
@snap[north span-100 text-08]
## Extending interfaces
@snapend

@snap[midpoint span-45]
```typescript zoom-08
interface IPerson {
    name: string
    gender: string
}

interface IEmployee extends IPerson {
    empCode: number
}

let bill:IEmployee = {
    empCode:1,
    name:"Bill",
    gender:"Male"
}
```
@snapend

@snap[south span-100]
@[1-20](Interfaces can extend *one or more* interfaces. This makes writing interfaces flexible and reusable.)
@snapend

---
@snap[north text-06 span-100]
## Summary @emoji[zap]
@snapend

@snap[midpoint span-100 text-06]
@ul[list-spaced-bullets list-fade-fragments ]
- Interface is a structure that defines the contract in your application  
- Using Interface you can define functions, arrays as types 
- Interfaces are very powerfull when it comes to unit testing
- We can define optional properties on an interface using *?* and read-only properties by using the *readonly* keyword in the property name 
- Interfaces can be extended to import properties of other interfaces using the *extends* keyword
@ulend
@snapend

---
@snap[north span-100 text-08]
## Functions
@snapend

@snap[midpoint span-60]
```typescript zoom-06
function log(msg: string): void {
    const time = \`${new Date().getHours()}:${new Date().getMinutes()}\`
    console.log(\`${time}: ${msg}\`)
}

log('Running Typescript') //Output: 15:55 Running TypeScript

let log = function(msg: string): void {
    // implementation
} 

function log(msg: string, format?: string): void {
    //implementation
}
log('Learning Typescript...') // Ok
log('Learning Typescript...', 'dd-MM-yyyy') // Ok
log('Learning Typescript...', 'ddMMyyyy', '2020') // Error

function log(msg: string, appender: string = 'Yay! ') {
    console.log(appender, msg)
}
log('Done') // Yay! Done
log('Failed', 'Oh no! :(' ) // Oh no! :( Failed 
```
@snapend

@snap[south span-100]
@[1-6](Functions are the primary blocks of any program. Functions can be named, when we declare it and call it by name)
@[7-11](Or they can be anonymous)
@[11-18](Functions can have *optional* parameters. The parameters that may or may not receive a value can be appended with a '?' to mark them as optional.)
@[19-25](Functions can have *default* parameter values)
@snapend

---
@snap[north span-100 text-08]
### Unions @emoji[link]
@snapend

@snap[midpoint span-60]
```typescript zoom-06
function padLeft(value: string, padding: any) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value
  }
  if (typeof padding === "string") {
    return padding + value
  }
  throw new Error(\`Expected string or number, got '${padding}'.\`)
}

padLeft("Hello world", 4) // returns "    Hello world" 
padLeft("Hello world", true) // error

function padLeft(value: string, padding: number | string) {
    // implementation
}

padLeft("Hello world", true) // Typescript complication error

type Padding = number | string
function(value: string, padding: Padding) ...

```
@snapend

@snap[south span-100]
@[1-9](Occasionally, you’ll run into a library that expects a parameter to be either a number or a string. For instance, take the following function)
@[11](And when you pass *number* or *string* to *padding* parameter things works fine)
@[12](But when you will pass something else, Typescript won't complain because *padding* has *any* type. So your own guard will throw the error)
@[14-16](But we can use *type union* by specifying *padding* type as *number | string*. This way of defining the type will tell Typescript that *padding* can be *either* number or string)
@[18](And now Typescript will catch this for you during compilation and not runtime!)
@[19-21](You can also use type aliases. They look very similar to interfaces, so it's recommended to prefer an interface to type alias.)
@snapend

---
@snap[north span-100 text-08]
### Unions with Common Fields @emoji[link] 
@snapend

@snap[midpoint span-40]
```typescript zoom-06
interface Bird {
  fly(): void
  layEggs(): void
}

interface Fish {
  swim(): void
  layEggs(): void
}

declare function getSmallPet(): Fish | Bird {}

let pet = getSmallPet()
pet.layEggs()

pet.swim() // error

```
@snapend

@snap[south span-100]
@[1-10](Let's imagine that we have two interfaces (_Bird_, _Fish_) that have a common method (_layEggs_))
@[11](And we have a function that will return an instance of _either Bird or Fish_)
@[13-14](Typescript will *allow* us to run a *common* _layEggs_ method on this instance)
@[16](But we won't be able to run a method that is specific to one of the interfaces, because Typescript doesn't know at this moment whether it's a _Bird_ or _Fish_)
@snapend

---
@snap[north span-100 text-08]
### Discriminating Unions @emoji[link] 
@snapend

@snap[midpoint span-40]
```typescript zoom-06
type NetworkLoadingState = {
  state: "loading"
}

type NetworkFailedState = {
  state: "failed"
  code: number
}

type NetworkSuccessState = {
  state: "success"
  response: {
    title: string
    duration: number
    summary: string
  }
}

// Create a type which represents only one of the above types
// but you aren't sure which it is yet.
type NetworkState =
  | NetworkLoadingState
  | NetworkFailedState
  | NetworkSuccessState

```
@snapend

@snap[south span-100]
@[1-17](A common technique for working with unions is to have a single field which uses literal types which you can use to let TypeScript narrow down the possible current type. For example, we’re going to create a union of three types which have a single shared field.)
@[19-25](When we create a variable that can potentially be one of this NetworkState interfaces, we only know that *state* field is the common one. )
@snapend

---
@snap[north span-100 text-08]
### Discriminating Unions @emoji[link] 
@snapend

@snap[midpoint span-80]
```typescript zoom-07
function networkStatus(state: NetworkState): string {
  state.code // will result in error

  switch (state.state) {
    case "loading":
      return "Downloading...";
    case "failed":      
      return \`Error ${state.code} downloading\`
    case "success":
      return \`Downloaded ${state.response.title} - ${state.response.summary}\`
  }
}

```
@snapend

@snap[south span-100]
@[1-2](Right now TypeScript does not know which of the three potential types state could be. Trying to access a property which isn't shared across all types will raise an error)
@[3-6](By switching on state, TypeScript can narrow the union down in code flow analysis)
@[5-7](The type must be NetworkFailedState here, so accessing the `code` field is safe)
@[8-9](In case of success we can get response details without compilation errors from Typescript)
@snapend

---
@snap[north span-100 text-08]
### Union Exhaustiveness checking @emoji[link] 
@snapend

@snap[midpoint span-80]
```typescript zoom-07
type NetworkFromCachedState = {
  state: "from_cache";
  id: string
  response: NetworkSuccessState["response"]
}

type NetworkState =
  | NetworkLoadingState
  | NetworkFailedState
  | NetworkSuccessState
  | NetworkFromCachedState;

function logger(s: NetworkState): string {
// Function lacks ending return statement and return type does not include 'undefined'.
  switch (s.state) {
    // ...
}
```
@snapend

@snap[south span-100]
@[1-6](Let's imagive that we have added one more variation of Networkstate - *NetworkFromCachedState*)
@[7-11](We would like the compiler to tell us when we don’t cover all variants of the discriminated union. For example, if we add NetworkFromCachedState to NetworkState, we need to update logger as well)
@[13-25](There are two ways to do this. The first is to turn on _--strictNullChecks_ and specify a return type.)
@[13-25](Because the switch is no longer exhaustive, TypeScript is aware that the function could sometimes return *undefined*. If you have an explicit return type string, then you will get an error that the return type is actually *string | undefined*)
@snapend

---
@snap[north span-100 text-08]
### Union Exhaustiveness checking @emoji[link] 
@snapend

@snap[midpoint span-68]
```typescript zoom-07
function assertNever(x: never): never {
  throw new Error("Unexpected object: " + x)
}

function logger(s: NetworkState): string {
  switch (s.state) {
    case "loading":
      return "loading request"
    case "failed":
      return \`failed with code ${s.code}\`
    case "success":
      return "got response"
    default: 
      return assertNever(s)
      // Argument of type 'NetworkFromCachedState'  
      // is not assignable to parameter of type 'never'.
  }
}
```
@snapend

@snap[south span-100]
@[1-3](The second method uses the *never* type that the compiler uses to check for exhaustiveness)
@[4-20](Here, *assertNever* checks that *s* is of type _never_ — the type that’s left after all other cases have been removed. If you forget a case, then s will have a _real type_ and you will get a type error.)
@[4-20](This method requires you to define an extra function, but it’s much more obvious when you forget it because the error message includes the missing type name.)
@snapend

---
@snap[north span-100 text-08]
### Intersection Types @emoji[negative_squared_cross_mark] 
@snapend

@snap[midpoint span-60]
```typescript zoom-06
interface ErrorHandling {
  success: boolean;
  error?: { message: string }
}

interface ArtworksData {
  artworks: { title: string }[]
}

interface ArtistsData {
  artists: { name: string }[]
}

type ArtworksResponse = ArtworksData & ErrorHandling
type ArtistsResponse = ArtistsData & ErrorHandling

const handleArtistsResponse = (response: ArtistsResponse) => {
  if (response.error) {
    console.error(response.error.message)
    return
  }

  console.log(response.artists)
}
```
@snapend

@snap[south span-100]
@[1-11](If we have networking requests with consistent error handling then it would be nice to have a separate common error type)
@[13-40](This is where types Intersection fits perfectly)
@[13-40](An _intersection_ type _combines_ multiple types into one. This allows you to _add together_ existing types to get a _single_ type that has all the features you need)
@snapend

---
@snap[north span-100 text-08]
### Generics 
@snapend

@snap[midpoint span-80]
```typescript zoom-07
const last = (arr: Array<number>): number => {
    return arr.[arr.length - 1]
}

const score = last([10, 20, 30]) // 30

const last = (arr: Array<string>): string => {
    return arr.[arr.length - 1]
}

const name = last ['John', 'Samanta'] // Samanta

const last = <T>(arr: T[]): T => {
    return [arr.length - 1]
}

const score = last([10, 20, 30]) // 30
const name = last ['John', 'Samanta'] // Samanta
const person = last([{name: 'John'}, {name: 'Samanta'}]) // {name: 'Samanta'}

```
@snapend

@snap[south span-100]
@[1-5](Let's say we need a function that will return last element of Array. We define a function and we say that we take array of numbers as input)
@[7-12](And now we need to do the same for array of strings)
@[1-12](Now we have two similar functions that differ only in type. What if we need to implement it for another 5-10 types? Writing same function over and over is not fun)
@[13-40](You can do that with Generics!)
@snapend

---
@snap[north span-100 text-08]
### Generic Classes 
@snapend

@snap[midpoint span-60]
```typescript zoom-07
class PrimitiveBox<T> {
  zeroValue: T
  add: (x: T, y: T) => T
}

let number = new PrimitiveBox<number>()
number.zeroValue = 0
number.add = function(x, y) {
  return x + y
}

let string = new PrimitiveBox<string>()
string.zeroValue = ''
string.add = function(x, y) {
  return x + y
}

console.log(string.add(string.zeroValue, "test")) // "test"

```
@snapend

@snap[south span-100]
@[1-5](Generic classes are useful when you want to write some simple wrapper that can be used on multiple types)
@[6-10](So now we can create representation of number instance)
@[11-18](Or string)
@[6-25](And they both works just fine. You can implement *add* value for any object and reuse this class)
@snapend

---
@snap[north span-100 text-08]
### Generic Constraints 
@snapend

@snap[midpoint span-100]
```typescript zoom-07
function loggingIdentity<T>(arg: T): T {
  console.log(arg.length) // error: 'length' does not exist on type 'T'
}

interface LengthWise {
  length: number;
}

function loggingIdentity<T extends LengthWise>(arg: T): T {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}

loggingIdentity(3) // Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.

loggingIdentity({ length: 10, value: 3 }) // ok

```
@snapend

@snap[south span-100]
@[1-3](If we try to to get some value from Generic, then we will get an error because typescript at this moment knows nothing about this type)
@[5-7](In order to explain Typescript which attributes should have our generic type we first create interface)
@[9-12](And then with *extends* keyword we can tell typescript which attributes our generic type should have)
@[14-16](This way Typescript will allow to pass only types that have *length* attribute)
@snapend

---
@snap[north span-100 text-08]
### Using Type Parameters in Generic Constraints 
@snapend

@snap[midpoint span-80]
```typescript zoom-08
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let person = { schoolScore: 100, highSchoolScore: 250, total: 350 };

getProperty(person, "total") // 350
getProperty(person, "universityScore"); // error
// Argument of type '"universityScore"' is not assignable to parameter 
// of type '"schoolScore" | "highSchoolScore" | "total".
```
@snapend

@snap[south span-100]
@[1-20](You can declare a type parameter that is constrained by another type parameter)
@[1-3](We’d like to get a property from an object given its name. We’d like to ensure that we’re not accidentally grabbing a property that does not exist on the obj, so we’ll place a constraint between the two types)
@[5-7](When we call *getProperty* function on *person* object with a key that *exists* in the object, we get a value)
@[8-10](But when we try to get a property that *doesn't exist* in the *person* object - we get an error. )
@snapend