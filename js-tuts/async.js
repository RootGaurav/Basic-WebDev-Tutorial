//Async= all at once
//async code is used to tackle the situations where we dont know how much a function or line of code will take to executeor process a request.
//Async ex:-setTimeout,setInterval,promises,fetch,axios,XMLHttpRequest;
//sync =one after another
//sync ex:-all except async ones.


//Async

// setTimeout(callback,timeinmilisecons)
// console.log("hello 1");
// console.log("hello 2");
// setTimeout(function(){console.log("async func");},2000); // callback functions.
// console.log("hello 3");
// console.log("hello 4");




//promises

//pending,resolve,reject
// var ans=new Promise((res,rej)=>{
//     if(true) return res();
//     else return rej();
// })
// ans.then(function(){console.log("resolved");})
// .catch(function(){console.log("reject");})
// //Que :- user will ask for a number between 0 se 9 and if the number is below 5 resolve else reject.
// var a;
// var ans=new Promise((res,rej)=>{a=Math.floor(Math.random()*10);
// if(a<5) return res();
// else return rej();
// }) 
// ans .then(function(){
//     console.log("below",a);
// })
// .catch(function(){console.log("above",a);})
// var ans=new Promise(function(res,rej){return res("resolved");})
// ans.then(function(data){console.log(data);})
// .catch(console.log("haehaj"))



//Async await

//abcd();
// async function abcd(){
//     await fetch('')
// }
//to avoid using then in promises
// function abcd()
// {
//     fetch('https://randomuser.me/api/')
//     .then(function(raw){
//     return raw.json();
// })
// .then(function(data){
//     console.log(data);
// })
// }
// async function abcd()
// {
//    let raw=await fetch('https://randomuser.me/api/');
//    let ans=await raw.json();
//    console.log(ans);

// }
// abcd();
//update