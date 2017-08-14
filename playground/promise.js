//Promise
const asyncAdd = (a,b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof a === 'number' && typeof b === 'number'){
        resolve( a + b );
      }
      else{
        reject('Arguments must be numbers');
      }
    },1500);
  });
}

asyncAdd(20,20).then((res)=>{
  console.log(`RES! ${res}`);
  return asyncAdd(res,10);
}).then((res)=>{
  console.log('2nd Res!',res)
}).catch((errorMessage)=>{
  console.log(errorMessage);
});

// const somePromise = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     //resolve('Listo!');
//     reject('Nooop');
//   },3000);
// });
//
// //then recibe 2 parametros: callback OK y callback Error
// somePromise.then((message)=>{
//   console.log('Success:', message);
// },(errorMessage)=>{
//   console.log('Error!', errorMessage);
// });
