
// calls resolve after 3 seconds
// function waitFor3S(resolve){
//   setTimeout(resolve,3000);
// }
// function main(){
//   console.log("main is called");
// }
// waitFor3S(main);


// function setTimeoutPromisified(ms){
//   let p= new Promise(resolve => setTimeout(resolve, ms)); // object of the promise class
//   return p;
// }
// function callback(){
//   console.log("3 seconds have passed");
// }
// setTimeoutPromisified(3000).then(callback);



function random(resolve){ // resolve is also a function
  setTimeout(resolve, 3000);
}

let p = new Promise(random); // supposed to return something eventually


//using the eventual value returned by the promise
function callback(){
  console.log("promise succeded");
}
p.then(callback);
