// alert("Control Structure")

// control structure 


// //     if-else=>
// // 1. Check if a number is odd or even and print on console
// let num=+prompt ("Print any number");
// if (num%2==0){
//     console.log("Found a Even number");
// } else { 
//     console.log("Found a Odd number");
// }


// // 2. Find the largest of two number
    // function ok(num1,num2){
    // if(num1>num2) 
    // {console.log("num1 is greater than num2")
    // } else {
    // console.log("num1 is less than num2")
    // }}
    // ok(70,50);
      

// // 3. Perform arithmetic operations on two numbers
// let num1=10;
// let num2=11;{
// console.log("Addition is "+(num1+num2));
// console.log("Substraction is "+(num1-num2));
// console.log("Multiplication is  "+(num1*num2));
// console.log("Division is "+(num1/num2 ));
// }




// ---------------------------------------------------------------------------------------------

// For loop
// 1. Write a JS code to print numbers from 1 to 10
// for(let a=1; a<=10; a++)      // increment or decrement 
// {
//     console.log("Number print  "+(a));
// }

// 2. Write a JS code to find the power of a number using for loop

// function ok(a,b){
// let power=a;
// for(let num1 =1; num1 <b; num1++)    // increment or decrement 
// (power *=a);
// return power;
// }
// console.log(("Power of number  ")+ok(1,2));
// console.log(("Power of number  ")+ok(2,2));
// console.log(("Power of number  ")+ok(3,2));
// console.log(("Power of number  ")+ok(4,2));
// console.log(("Power of number  ")+ok(5,2));
// console.log(("Power of number  ")+ok(6,2));
// console.log(("Power of number  ")+ok(7,2));
// console.log(("Power of number  ")+ok(8,2));
// console.log(("Power of number  ")+ok(9,2));
// console.log(("Power of number  ")+ok(10,2));

// 3. Write a JS code to print Even numbers
// for(a=1; a<=10;a++){
//      if(a % 2 == 0){
//       console.log("Even numbers   "+(a));
//     }
// }

// ------------------------------------------------------------------------------------

// Create a simple calculator using switch statement

console.log();
let a = +prompt("Type first number");
let b = +prompt("Type second number");

 let operator=prompt(`disply the menu to user and accept the input as a sign (operator)menu =>
        +  addtion
        -  substraction
        *  multiplication
        /  divistion
        %  mod
        **  power`);
             switch(operator)
        {
        case '+':
        console.log("Addtion of two number  "+ (a+b));

        break;
        case '-':
        console.log("Substracrtion of two number  "+ (a-b));

        break;
        case '*':
        console.log("Multiplication of two number  "+ (a*b));

        break;
        case '/':
        console.log("Divistion of two number  "+ (a/b));

        break;
        case '%':
        console.log("Remainder of two number  "+ (a%b));

        break;
        case '**':
        console.log("power of two number   "+ (a**b));

        break;
        default:
        console.log("Please Type something ");
        }