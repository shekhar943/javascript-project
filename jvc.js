  //this is all the javascript console api
         // console.log("hello world")
         //console.alert("hello shekhar");
         //consloe.warn("hello world")
         //console.error("this is a error")
          // console.log("hello shekhar",4+6,"anethor log");

//variables in js : store the vaule in container 

/*var num1=50;
var num2=50;
console.log(num1+num2);*/

/*
//data types in javascript

//number
var num1=50;
var num2=50;
//string 

var str1="  daravath";
var str2="shekhar";

//object
var markes={
    shekhar:99,
    ram:90,
    gopi:21
}
console.log(markes)
*/

//var arr=[10,20,30,40];
//console.log(arr);


//function
/*
function avg(a,b){
    return (a+b)/2;
}
var c1=avg(10,20);
var c2=avg(30,30)
console.log(c1,c2)
*/

/*//const : it can be used fixed values 
//let ,,var
//var arr=[1,2,3,4,5,6,7];
//console.log(arr);
for(var i=0;i<arr.length;i++){
     // console.log(arr[i]);
}

//arr.forEach(function(element)
{
  //  console.log(element)
})///*/


//DOM DOCUMENT OBJECT MODEL

let ele=document.getElementById('click');
console.log(ele);

let elecls=document.getElementsByClassName('container');
console.log(elecls)
console.log(ele.innerHTML);



function clicked(){
  console.log('this is a button')
}