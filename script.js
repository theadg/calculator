

const numButtons = document.querySelectorAll('.num');
const calcOutput = document.querySelector(".screen-output");

let number = "";

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
        calcOutput.textContent = addComma(number);
        }


    }
});

// // adding commas
// function addComma(number){ 
    
//     //convert number into an array
//     const numArr  =  Array.from(String(number));

//     if (numArr.length >= 4){
//         for (let i = 3; i < numArr.length; i+=4){

//             numArr.reverse().splice(i, 0, ",");
//             console.log(numArr.reverse());
//             // const numComma = numArr.join('')
//             // numArr.reverse();
//         }
        
//         const numComma = numArr.join('');
//         return numComma;
//     } else{
//         numComma = number;
//         return numComma;
//     }
    
//     // console.log(numArr);
// }

// addComma();