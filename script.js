
// declaration
const numButtons = document.querySelectorAll('.num');
const calcOutput = document.querySelector(".screen-output");
        calcOutput.textContent = "";
let number = "";
let initialNum, secondaryNum;
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
        calcOutput.textContent = (addComma(number).numberArr);
        }


    }
});

let numContainer ={
    number: 0,
    numContainer: 0,
}
// adding commas
function addComma(number){ 
    
    //convert number into an array
    const numArr  =  Array.from(String(number));

    if (numArr.length >= 4){
        for (let i = 3; i < numArr.length; i+=4){

            numArr.reverse().splice(i, 0, ",");
            console.log(numArr.reverse());
            // const numComma = numArr.join('')
            // numArr.reverse();
        }
        
        const numComma = numArr.join('');
        // return numComma;
        numContainer = {
            number: number,
            numberArr: numComma,
        }   
        return numContainer;
    } else{
        numComma = number;
       numContainer = {
            number: number,
            numberArr: numComma,
        } 
        // return numComma;
        return numContainer;
    }
    
    // console.log(numArr);
}




//declaration
const operators = document.querySelectorAll('.operator');
const calcInput = document.querySelector('.screen-calculations');

// operators.forEach((operator) => {
//     // operator.onclick = () => {
//     //     if (calcOutput.textContent === ""){
//     //         alert("Nothing to compute");
//     //         clearUpperScreen();
//     //     } else {

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


//operator
operate = () => {
    if (calcOutput.textContent === ""){
        alert("Nothing to compute");
        clearUpperScreen();
    } else {

    initialNum = calcOutput.textContent;
 
    calcInput.textContent = `${initialNum} ${operator}`;

    initialNum = numContainer.number;
    console.log(initialNum);
    number = "";
    clearBottomScreen();
    }
};
//getting operator 
const add = document.querySelector("#add");
let operator = ""

add.onclick = () =>{
    operator = "+";
    operate();
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
  number = "";  
 };


 //declaration
 const equalBtn = document.getElementById("equals");

 equalBtn.onclick = () => {
    secondaryNum = calcOutput.textContent;
    compute(initialNum,secondaryNum);
    
 }


 //computing num
compute = (initialNum,secondaryNum) =>{
    if (operator === "+"){
        output = parseInt(initialNum) + parseInt(secondaryNum);
        calcOutput.textContent = output;
    }
 };