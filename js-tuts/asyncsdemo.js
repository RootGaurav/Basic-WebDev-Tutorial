
//promises and callbacks ....

// function asyncfunction1(){
//     return new Promise((resolve,reject)=>{

//         setTimeout(() => {
//             resolve("Data 1 fetched succesfully");
//         },4000);
//     });

// }
// function asyncfunction2(){
//     return new Promise((resolve,reject)=>{

//         setTimeout(() => {
//             resolve("Data 2 fetched succesfully");
//         },4000);
//     });

// }


//fetching together ...

// let d1=asyncfunction1();
// d1.then((res)=>{
//     console.log(res);

// }
// )

// let d2=asyncfunction2();
// d2.then((res)=>{
//     console.log(res);
// }
// )


///fetching one by one ...

// console.log("getting data 1 ... ");
// let d1 = asyncfunction1();
// d1.then((res) => {
//     console.log(res);
//     console.log("getting data 2 ... ");
//     let d2 = asyncfunction2();
//     d2.then((res) => {
//         console.log(res);
//     }
//     )

// }
// )

// function getdata(dataid)
// {
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             console.log("data",dataid);
//             res("success");
//         }, 2000);
//     });
// }


//promise chaining....( can be alternative for callabck hell)

// let p1=getdata(1);
// p1.then((res)=>{
//     console.log(res);
//     let p2=getdata(2);
//     p2.then((res)=>{
//         console.log(res);
//         let p3=getdata(3);
//         p3.then((res)=>{
//             console.log(res);
//         });
//     });
// });

// getdata(1).then((res)=>{
//     return getdata(2);
// })
// .then((res)=>{
//     return getdata(3);
// })
// .then((res)=>{
//     console.log(res);
// })


//async await 

// function getdata(dataid)
// {
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             console.log("data",dataid);
//             res("success");
//         }, 2000);
//     });
// }


// async function getalldata()
// {
//     await getdata(1);
//     await getdata(2);
//     await getdata(3);
// }
// getalldata()


// IIFE (immediatly automatically invoked)(used to avoid function call for await ..) ...

// (function (){

// })();


// (()=>{

// })();

// (async function(){})();