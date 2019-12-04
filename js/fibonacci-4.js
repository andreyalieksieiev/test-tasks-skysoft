const fib = n => {
  let prev = 0; 
  let next = 1;
  for(let i = 0; i < n; i++){
    let temp = next;
    next = prev + next;
    prev = temp;
  }
  return prev;
}

// const fib = n => {
//   if(n <= 1){
//     return n;
//   }else{
//     return fib(n - 1) + fib(n - 2);
//   }
// }

// console.log(fib(8));

console.log('fibonacci : ', fib(8));