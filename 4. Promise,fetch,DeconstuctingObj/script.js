

//Map Iteration for only Array(not for HTML collection)
// let fruits=["banana","apple","jackfruit","pineapple"]
// let newFruits = fruits.map((fruit)=>{
//    return `${fruit} modified`;
// }).filter((value)=>{
//    if (value=="banana modified")
//    {
//       return false;
//    }
//    else
//    {
//       return true;
//    }
// })
// console.log(newFruits);


//Fetch data from API

// let userPromise= fetch("https://randomuser.me/api");
// console.log(userPromise);
// userPromise.then((response)=>{
// return response.json();
// })
// .then((resData)=>{
// console.log(resData.results[0].name.first);
// console.log(resData.results[1].name.last);
// })
// Function myFunction(){
//     resolve({
// fName:'Apurva',
// lName:'Tejani',
//     })
    
// }
function resolve(){
    Obj({
        fName:'Apurva',
        lName:'Tejani',
            })
            
}
let promise= new Promise((resolve,reject) =>{
    setTimeout(resolve,5000);
})
promise.then((response) =>{
    console.log("here is the name after 5 sec");
    console.log(response);
})
console.log('first function');
