// function sum(a,b){
//   return a+b;
// }
//  let ans=sum(5,4);
//  console.log(ans);

function nsum(n){
 let answ=0;
 for(let i=0;i<=n;i++){
  answ=answ+i;
 }
 return answ;
}

const answ=nsum(100);
console.log(answ);
