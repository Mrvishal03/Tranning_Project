//print values in the console:-
console.log('This is log!')
console.warn('This is warn!')
console.error('This is error!')

//Data Types:-
//1.Primitive Data Types:-

//a.Number
variable_one = 10000000
console.log(typeof variable_one)
console.log(variable_one);

//b.String  ('' : "" : ``)
variable_one = `Hello Js`
console.log(variable_one);
console.log(typeof variable_one)

//3.Boolean
variable_two = true
console.log(variable_two)

//4.null
variable_three = null
console.log(variable_three);
console.log(typeof variable_three)  //Object-> This is a mistake

//5.
variable_four = undefined
console.log(variable_four);
console.log(typeof variable_four)

//Conditional Statements:-
var demo = 10
if (demo >= 0) {
    console.log(demo + "is a +ve number")
}
else {
    console.log(demo + "is a -ve number")
}

//ES6 Syntax
// Condition ? TRUE : False
//Limitation :- TRUE /FALSE statements one -linear statement
demo2 = -10
demo2 >= 0 ? console.log(`${demo2} is a +ve number`) : console.log(`${demo2} is a -ve number`)


// Keywords let, var ,const 

flag = true 
if (flag)

{
    
    let a =100
    var b=200 
    const c = 300
    console.log(a)
    console.log(b)
    console.log(c)
     
     console.log(`THe value of a inside if-block is ${a}`)
}
else
{
    b=200
}
 


//LOOPs
//a.) For Loop:-
for(let i=0;i<4;i++)
{
    console.log(i)
}

let i=0
    while(i<10)
    {
        console.log(i)
        i +=1
    }
 
// Non-Primitive Data Types (Non-PDTs)
// a.) Arrays
// Contiguous | [ ]
// let numbers = [10, 20, 30, 40, 50]
// let arr = [];
// let arrObj = new Array(10);

// console.log(typeof(numbers))
// console.log(typeof(arr))
// console.log(typeof(arrObj))

// // for(let i=0; i < numbers.length; i++) {
// //     console.log(numbers[i])
// // }

// console.log(numbers)

// // Array Methods
// numbers.push(60)
// console.log(numbers)

// let myArr1 = [100, 200, 300, 400, 500]
// // let myArr2 = myArr1                             // THIS IS NOT A COPY MECH.
// // Array Spread Operators
// let myArr2 = [ ...myArr1 ]
// myArr1.push(-10)
// myArr2.push(1000)
// console.log(myArr1)                             // [100, 200, 300, 400, 500, -10]
// console.log(myArr2)                             // [100, 200, 300, 400, 500, 1000]

// // pop()
// myArr1.pop()
// console.log(myArr1)

// let deletedElement = myArr1.shift()
// console.log(myArr1)

// let newLength = myArr1.unshift(50);
// console.log(newLength)                          // 5
// console.log(myArr1)

// let num1 = [10, 20, 30, 40]
// let num2 = [100, 200, 300, 400, 500]
// let combinedArray = num2.concat(num1);
// console.log(combinedArray)                      //
// int[] arr = new int[10]; 

// let dummyArray = [10, "String", true, null, undefined, []]
// console.log(dummyArray)

// // let twoDArray = [ [10, 20, 30], [40, 50, 60], [70, 80, 90]]
// let twoDArray = [ [], [], [] ]
// console.log(twoDArray[1][1])


// 2. JS OBJECTS - {  } :-
// let myObj = { key1: value1, key2: value2 } 
let user = {
    name: 'User One', 
    email: 'userone@service.com',
    password: 'examplepwd',
    isEmployed: true,
    hobbies: ['Music', 'Reading Books', 'Travelling'],
    address: {
        street: 'Street - 1',
        city: 'Kharar',
        state: 'Punjab',
        pincodes: [1234, 5678]
    }
}

// let myObj = new Object()
// myObj.name = 'User One'
// myObj.email = 'userone@service.com'
// myObj.password = 'examplepwd'
// myObj.isEmployed = true
// myObj.hobbies = ['Music', 'Reading Books', 'Travelling']
// myObj.address = {
//     street: 'Street - 1',
//     city: 'Kharar',
//     state: 'Punjab',
//     pincodes: [1234, 5678]
// }
// console.log(myObj)

// console.log(`Hi, this is user ${myObj.name}, my email is ${myObj.email} & my password is ${myObj.password}`)
// console.log(myObj.hobbies[0])
// console.log(myObj.address.city)
// console.log(myObj.address.pincodes[1]);


// 3. Array of Objects :- [ {}, {}, {} ]
const users = [
    {
        name: 'User One', 
        email: 'userone@service.com',
        password: 'examplepwd',
        isEmployed: true,
        hobbies: ['Music', 'Reading Books', 'Travelling'],
        address: {
            street: 'Street - 1',
            city: 'Kharar',
            state: 'Punjab',
            pincodes: [1234, 5678]
        }
    },              // users[0].password ; users[0].address.pincodes[0]
    {
        name: 'User Two', 
        email: 'usertwo@service.com',
        password: 'examplepwd2',
        isEmployed: false,
        hobbies: ['Music', 'Travelling'],
        address: {
            street: 'Street - 2',
            city: 'Kharar',
            state: 'Punjab',
            pincodes: [1234, 5678]
        }
    }, 
    {
        name: 'User Three', 
        email: 'userthree@service.com',
        password: 'examplepwd3',
        isEmployed: true,
        hobbies: ['Reading Books', 'Travelling'],
        address: {
            street: 'Street - 3',
            city: 'Kharar',
            state: 'Punjab',
            pincodes: [1234, 5678]
        }
    }
]
console.log(users)

// 4. JSON (JavaScript Object Notation)
// JS -> interface -> JSON -> 2 functions.

// 1. stringify() -> AoO to JSON
const myJSONResponse = JSON.stringify(users);
console.log(myJSONResponse)

// 2. parse() -> JSON to AoO
const convertAoO = JSON.parse(myJSONResponse)
console.log(convertAoO)