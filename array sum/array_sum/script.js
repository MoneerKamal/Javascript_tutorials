// array
const arr =[1,2,3,4];//10


// using for

/* let sum=0;
for(var i in arr){
    sum+=arr[i];
}
for (let i=0,l=arr.length; i<l; i++) {
    sum+=arr[i];
 }  */

 // while
/*  let sum=0 , i=-1;
 while(++i<arr.length){
    sum+=arr[i];
 } */

/*  let sum=0;
 arr.forEach(each=>{
sum+=each;
 }); */

 // using reduce

 /* const sum=arr.reduce((accumulator,a)=>accumulator+a,0); */

 const sum= arr.reduce(add,0);
 function add(acc,v){
    return acc+v;
 }

document.getElementById("result").innerHTML=sum;