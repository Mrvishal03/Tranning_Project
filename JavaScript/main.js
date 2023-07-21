 //print values in the console:-
 console.log('This is log!')
 console.warn('This is warn!')
 console.error('This is error!')

 //Data Types:-
 //1.Primitive Data Types:-

 //a.Number
 variable_one=10000000
 console.log(typeof variable_one)
 console.log(variable_one);

 //b.String  ('' : "" : ``)
 variable_one= `Hello Js`
 console.log(variable_one);
 console.log(typeof variable_one)

 //3.Boolean
 variable_two=true
 console.log(variable_two)
 
 //4.null
 variable_three=null
 console.log(variable_three);
 console.log(typeof variable_three)  //Object-> This is a mistake
 
 //5.
 variable_four=undefined
 console.log(variable_four);
 console.log(typeof variable_four)
 
 //Conditional Statements:-
    var demo =10
    if(demo>=0)
    {
    console.log(demo + "is a +ve number")
    }
    else
    {
        console.log(demo + "is a -ve number")
    }

    //ES6 Syntax
    // Condition ? TRUE : False
    //Limitation :- TRUE /FALSE statements one -linear statement
    demo2 = -10
demo2 >= 0 ? console.log(`${demo2} is a +ve number`) : console.log(`${demo2} is a -ve number`)