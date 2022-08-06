
// declaration
const numButtons = document.querySelectorAll('.num');
const calcOutput = document.querySelector(".screen-output");
        calcOutput.textContent = "";
let number = "";
let initialNum, secondaryNum;
let hasDP = false;
// putting the number into the calc screen
// MAKE IT FOR FLOATS AS WELL
numButtons.forEach((button) =>{
    button.onclick = () => {
        
        number += button.textContent;
        
        // check length
        if (number.length > 11){
            alert("Input limit");
        } else {
        // output num 
       
        // number = parseInt(number); //converting number from string to int
        calcOutput.textContent = number;
        }


    }
});

let numContainer ={
    number: 0,
    numContainer: 0,
}
// add decimal pt
const decimalPt = document.querySelector("#decimalPoint");
decimalPt.onclick = () => { 
    if (hasDP){

    } else {
        hasDP = true;
        calcOutput.textContent += '.';
        return number += '.';

    }
}


// adding commas
        // function addComma(number){ 
            
        //     //convert number into an array
        //     const numArr  =  Array.from(String(number));

        //     if (numArr.length >= 4){
        //         for (let i = 3; i < numArr.length; i+=4){
        //             parseInt(secondaryNum)
        //             numArr.reverse().splice(i, 0, ",");
        //             console.log(numArr.reverse());
        //             // const numComma = numArr.join('')
        //             // numArr.reverse();
        //         }
                
        //         const numComma = numArr.join('');
        //         // return numComma;
        //         numContainer = {
        //             number: number,
        //             numberArr: numComma,
        //         }   
        //         return numContainer;
        //     } else{
        //         numComma = number;
        //     numContainer = {
        //             number: number,
        //             numberArr: numComma,
        //         } 
        //         // return numComma;
        //         return numContainer;
        //     }
            
        //     // console.log(numArr);
        // }




//declaration
const operators = document.querySelectorAll('.operator');
const calcInput = document.querySelector('.screen-calculations');

// operators.forEach((operator) => {
//     // operator.onclick = () => {
//     //     if (calcOutput.textContent === ""){
//     //         alert("Nothing to compute");
//     //         clearUpperScreen();
//     //     } else {parseInt(secondaryNum)

//     //     initialNum = calcOutput.textContent;
     
//     //     calcInput.textContent = `${initialNum} ${operator.textContent}`;
//     //     convert(initialNum);
//     //     number = "";
//     //     clearBottomScreen();
//         }
//     }
// });

// converting num 
convert = (initialNum) => {
    const numArr  =  Array.from((initialNum));
    console.log(numArr);
    const index = numArr.indexOf(",");
    numArr.splice(index,1);
    console.log(numArr);
};

parseInt(secondaryNum)
//operator
//puts the initial number into the 
operate = () => {
    if (calcOutput.textContent === ""){
        alert("Nothing to compute");
        clearUpperScreen();
    } else {
    initialNum = calcOutput.textContent;
    calcInput.textContent = `${initialNum} ${operator}`; //-----> putting this to addUpperScreen func

    // numContainer.number = initialNum;
    console.log(numContainer.number);
    console.log(`Secondary num: ${secondaryNum}`);
    number = "";

    hasDP = false;
    clearBottomScreen();
        
    
    }
};

let checkNum;
//getting operator 
const add = document.querySelector("#add");
const subtract = document.querySelector("#subtract");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");

let operator = "";

add.onclick = () =>{
    operator = "+";
    operate();

    calcInput.textContent =  addUpperScreen(initialNum, operator);
}

subtract.onclick = () =>{
    operator = "-";
    operate();

    calcInput.textContent =  addUpperScreen(initialNum, operator);
}
multiply.onclick = () =>{
    operator = "*";
    operate();
   
    calcInput.textContent =  addUpperScreen(initialNum, operator);
} 

divide.onclick = () =>{
    operator = "/";
    operate();

    calcInput.textContent =  addUpperScreen(initialNum, operator);
} 


userInput = ''; 
addUpperScreen = (initialNum, operator) =>{
    return userInput = `${initialNum} ${operator}`;
}
function clearBottomScreen(){
    calcOutput.textContent = "";
}

 function clearUpperScreen(){
    calcInput.textContent = "";
 }


 //declaration
 const allClear = document.querySelector('.all-clear');
 //clearing both screens
 allClear.onclick = () => {
  clearUpperScreen();
  clearBottomScreen();
  initialNum = 0;
  secondaryNum = 0;
  number = "";  
  hasDP = false;
 };


 //declaration
 const equalBtn = document.getElementById("equals");
 
 equalBtn.onclick = () => {
    computeContinue(initialNum);
    console.log('------------------------------')
    console.log(`Initial Num: ${initialNum}`);
    console.log(`Secondary Num: ${secondaryNum}`);
   
    // initialNum = calcOutput.textContent;
    // swap(initialNum);
 }
let i;
computeContinue = (initialNum) => {
    if (calcInput.textContent.includes("=")){

    } else {
       secondaryNum = calcOutput.textContent;
        if (secondaryNum === ''){
            calcOutput.textContent = `${initialNum}`
        } else {
            compute(initialNum,secondaryNum);

        calcInput.textContent = `${initialNum} ${operator} ${secondaryNum} =`;
        }

    
        // initialNum = calcOutput.textContent;
        
    }
   
}
 //computing num
compute = (initialNum,secondaryNum) =>{
    if (operator === "+"){
        output = parseFloat(initialNum) + parseFloat(secondaryNum);
        calcOutput.textContent = output; 
    }   else if(operator === "-"){
        output = parseInt(initialNum) - parseInt(secondaryNum);
        calcOutput.textContent = output; 
    }   else if(operator === "*"){
        output = parseInt(initialNum) * parseInt(secondaryNum);
        calcOutput.textContent = output; 
    }   else if(operator === "/"){
        output = parseInt(initialNum) / parseInt(secondaryNum);
        calcOutput.textContent = output; 
    }




        initialNum = output;
        return initialNum;
        // getInitialNum(output);
        // console.log(`Initial Num (COMP): ${initialNum}`);
   
 };


//declaration
const clear = document.querySelector("#c");
// remove one character from user input 

clear.onclick = () => {
    const number1 = calcOutput.textContent;
    const numArr = Array.from(String(number1));

    //removing last digit
    numArr.splice(numArr.length-1);
    //
    const realNum = numArr.join('');
    number = realNum;
    calcOutput.textContent = realNum;
}
