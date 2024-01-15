// print command
console.log('hello');
// variables
a=10;   //Non-declared variables
console.log(a);   
 var a=10;   //variable declaration
 console.log(a) //value is 10
 {
var a=90; //value to 90
console.log(a);
 }
 console.log(a);
 
 let b=24;
 console.log(b);
 {
 let b=23;
 console.log(b);
 }
 console.log(b);
 b=45;
 console.log(b);
 const v=56;
 {
    const v=78;
    console.log(v)
 }
 console.log(v)
//Datatypes
 console.log(typeof(v));
 let firstName='My name is Maya';
 console.log(typeof(firstName));

 let isavailable=true;
 console.log(typeof(isavailable));
//undefined
var t;
console.log(typeof(t));

var st='';
console.log(typeof(st));
//Arrays
let arr1=[1,2,3,4,'mridula'];
console.log(arr1[5]);
//js objects
let person={
   name:'Mridula',
   age:32,
   place:'Tvm'
}
console.log(person.place)
//use new keyboard in js
let car=new Object();
car.brand='Hyundai';
car.model='i10';
car.color='black';
console.log(car);
//Array of objects
var arr_obj=[{name:'maya',location:'kochi'},{name:'meera',location:'Tvm'}]
console.log(arr_obj[1].location);
//Operators
let tr=8
console.log(tr+=3)
//Increment operator
let inc=7;
let inc1=++inc;
console.log(inc1);
//Conditional statement
if(inc==inc1){
   console.log('The values are equal')
} else {
   console.log('The values are not equal')
}
//Logical operators
if((inc==inc1)&& (inc==89)){
   console.log('Both values are equal and it is 89')
}
else{
   console.log('The condition checked failed');
}
let re=90;
let ne=100;
let x=(ne-re)+(8**2);
console.log(x)
//Function
function addva1(ad1,ad2) {
   var sum=ad1+ad2;
   return sum;
}
var result=addva1(10,20); //Function call
console.log('The calculated sum is '+result);
//Looping statements 
// write a programe for printing the numbers from 1 to 10
for (let i = 1; i<=10; i++) {
   console.log(i+1);

}
//Create an array with 5 element
let arr3=['apple','orange','pear','grape','berry']
for (let i= 0; i < arr3.length; i++){
   console.log(arr3[i]);
}
// for of loop
for (item of arr3){
   console.log(item);
}
// for in loop
let person1={name:'joe',age:78,place:'tvm'}
for(item in person1){
   console.log(person1[item]);
}

//while loop
let j=1;
while (j<=10) {
   console.log(j);
   j++;
 }
 //do while 
 do{
   console.log(j);
   j++;
 } while (j<10);

