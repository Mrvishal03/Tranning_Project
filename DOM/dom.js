 // DOM -> Document  Object Model
// console.log(document.all)
// const myLi = document.all[19]
// console.log(myLi)

// IDENTIFIER METHODS :-
// 1. getElementById()
// const myHeader = document.getElementById('header-title')
// console.log(myHeader)

// // 2. getElementsByClassName
// const listItems = document.getElementsByClassName('list-group-item')
// console.log(listItems)

// // 3. getElementsByTagName
// const myForms = document.getElementsByTagName('form')
// console.log(myForms)

// 4. querySelector(id/className/tagName)
// const myHeader = document.querySelector('form')
// console.log(myHeader)

// console.log( document.querySelector('.list-group-item') )

// 5. querySelectorAll
// console.log( document.querySelectorAll('.list-group-item') )


// DOM MANIPULATION METHODS / PROPERTIES :-
// const heading = document.querySelector('#header-title')

// 1. textContent -> text in b/w of the <> and </> of the elt
// heading.textContent = 'Welcome to DOM';

// 2. innerHTML -> 
// document.querySelector('#my-div').innerHTML = "<p>Hello...</p>"

// NOTE :- textContent & innerHTML both works the different way,
// textContent changes the text b/w <> & </> while innerHTML adds a child to the given element

// CSS with JavaScript (.style)
// const secondHeading = document.querySelector('#second-heading')

// // JS Function - setTimeOut()
// // Syntax -> setTimeOut( callfn, timeoutDelay (in ms) )
// setTimeout( () => {
//     secondHeading.style.backgroundColor = 'purple'
//     secondHeading.style.color = 'white'
//     secondHeading.style.padding = '10px'
//     secondHeading.style.textAlign = 'center'
// }, 3000)

// setTimeout(() => {
//     heading.innerHTML = "<h2>Welocme to DOM</h2>"
// }, 5000)

// document.getElementById('btn').textContent = 'Press'


// const listItems = document.getElementsByClassName('list-group-item');
// const listArray = []

// for(let i=0; i < listItems.length; i++) {
//     listArray.push(listItems[i])
// }

// console.log(listItems)
// // for(let i=0; i < listItems.length; i++) {
// //     // Odd Items
// //     if(i%2 == 0) {
// //         listItems[i].style.backgroundColor = '#f4f4f4'
// //     }    
// // }

// console.log(listArray)
// listArray.forEach( (item, index) => {
//     if(index%2 == 0) item.style.backgroundColor = '#f4f4f4'
// } )



// EVENTS IN DOM

// element.addEventListner( eventName, () => {} )
// element.addEventListner( eventName, fuctionName )

// document.getElementById('btn').addEventListener( 'click', (event) => {
//     console.log(event)
//     console.log('Button is clicked!')
// } )
// document.getElementById('btn').addEventListener( 'dblclick', () => {
//     console.log('Button is double clicked!')
// } )

// document.getElementById('submitBtn').addEventListener('click', (e) => {
//     e.preventDefault()
//     console.log('Subit Button was Clicked!')
// })

// document.getElementById('text-input').addEventListener('mouseenter', () => { console.log('Cursror entered the element') })
// document.getElementById('text-input').addEventListener('mouseleave', () => { console.log('Cursror left the element') })

 

// setTimeout( () => {
//     console.log('Callback was executed...')
// }, 3000 )
// console.log('Code after setTimeout')

// Keyboard Events

// document.getElementById('text-input').addEventListener('copy', () => { 
//     console.log('Data was Copied') })
// document.getElementById('text-input').addEventListener('cut', () => { 
//     console.log('data was cut') })
// document.getElementById('text-input').addEventListener('paste', () => { 
//     console.log('data was paste') })

//     document.getElementById('text-input').addEventListener('keyup', () => { 
//         console.log('Key Up') })

//         document.getElementById('text-input').addEventListener('keydown', () => { 
//             console.log('key down') })


//             document.getElementById('text-input').addEventListener('keypress', () => { 
//                 console.log('key pressed') })


// document.getElementById('text-input').addEventListener('keypress', (e) => { 
//  console.log(e.target.value) })



//  ALTERNATIVE
// document.getElementById('submitBtn').addEventListener('click', (e) => {
//     e.preventDefault()
//     console.log( document.getElementById('text-input').value )
// })
 
// FUN ACTIVITY
// document.querySelector('#container-box').addEventListener('mouseenter', (e) => {
//     console.log(e);
//     document.querySelector('#container-box').style.backgroundColor = `rgb(0, ${e.offsetX}, ${e.offsetY})`
// })
// document.querySelector('#container-box').addEventListener('mouseleave', (e) => {
//     document.querySelector('#container-box').style.backgroundColor = `rgb(100, ${e.offsetX}, ${e.offsetY})`   
// })



// DOM Relation
// DOM Traversal




// Sibling
// console.log(document.getElementById('head').previousElementSibling)



// console.log(document.getElementById('head').nextElementSibling)
  

// Item Lister application
document.getElementById('submitBtn').addEventListener('click', (e) => {
    e.preventDefault()
    const text = document.getElementById('text-input').value
    const newLi = document.createElement('li')
    newLi.textContent = text
    newLi.setAttribute('class', 'list-group-item')
    document.getElementById('items').appendChild(newLi)
})