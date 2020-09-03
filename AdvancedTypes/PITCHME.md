# Advanced Types in Typescript
---
# Part 1
---
@snap[north span-100 text-08]
## Interfaces
@snapend

@snap[midpoint span-100]
@ul[midpoint list-spaced-bullets text-07 span-100]
- Interface is a structure that defines the contract in your application
- It defines the syntax for classes o follow  
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