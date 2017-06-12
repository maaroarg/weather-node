console.log('Starting app');

setTimeout(()=>{
    console.log('Inside 1st callback');
},2000);


setTimeout(()=>{
    console.log('Inside 2nd callback');
},0);

console.log('Finishing up!');