//var

//var is function scoped
// {
//     var a=10;
//     console.log(a);
// }
// console.log(a);
// function heyy()
// {
// for(var i=10;i<14;i++)
// {
//     console.log(i); //print 10 11 12 13 }
// }
// console.log(i); //print 14 as i is function scoped
// }
// heyy();
//var adds itself to window object



//let and const

//let and const is braces scoped
// {
//     let a=10;
//     console.log(a);
// }
// console.log(a); //error gives as not defined
// function heyy()
// {
// for(let i=10;i<14;i++)
// {
//     console.log(i); //print 10 11 12 13 }
// }
// console.log(i); //gives error as i is braces scoped
// }
// heyy();
//let and const does't adds itself to window object


//browser context api (features provided by browser)

// contains 1.window  2.stack  3.heap memory
//Window Object
//it contains features that js does't have and js uses window object to use these features(browser provides).
//stack-LIFO.
//HEAP-data in program is stored in heap.



//Execution context

//imaginary box that stores context of a function 
//created whenever a function is called
//stores variables used there.
//stores child functions
//stores lexical environment.(which can be accessed and which not)
// function abcd()
// {
//     var a=12;
//     function greet()
//     {
//         var b=12;  //abcd() can't use b directly. (lexical environment)
//     }
// }



//how to copy reference values

// var a=[1,2,3,4,5];
// var d=[1,2,3,4,5];
// var b=a;
// var c=[...d]   //spread operator
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// b.pop();
// c.pop();
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d); //value not changed



//Truthy and Falsy

//falsy = 0 false undefined null NaN document.all
//Truthy = rest all



//forEach

//only runs with array 
// var a=[1,2,3,4,5];
// a.forEach(function(val)
// {
//     console.log(val+6);
// })



//forin

//for looping on objects
// var obj={
//     nam:"gaurav",
//     age:32,
//     city:"dehradun"
// }
// for(var key in obj)
// {
//     console.log(obj[key]);
// }



//Callback Functions

// setTimeout(function(){
// console.log("after 2 sec");
// },2000)



//First class functions

// var a=function() {console.log("heyyyy")};
// a();



//Arrays (behind the scenes)

// var arr=[1,2,3,4,5];
// //stored as
// // arr={0:1,1:2,3:4,3:4,4:5}
// arr[-1]=2;
// console.log(arr);
// console.log(Array.isArray([]));   //true
// console.log(Array.isArray({}));   //false

//Deleting object properties

// delete A.age; 