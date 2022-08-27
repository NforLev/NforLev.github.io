
let currentMode = "idle"
let firstInput = ""
let secondInput = ""
let result = ""


//getElements
let equalbtn = document.getElementById("equal")
let clear = document.getElementById("clearAll")
let back = document.getElementById("back")
let resultDisplay = document.getElementById("result")
let memoryDisplay = document.getElementById("memoryDisplay")
    //operands
let multiply = document.getElementById("multi")
let divide = document.getElementById("divide")
let sum = document.getElementById("sum")
let minus = document.getElementById("minus")
    //numbers
let numBtns = document.querySelectorAll(".numbers")
numBtns.forEach(numBtns=> numBtns.addEventListener("click", input))

//listeners
clear.addEventListener("click", clearAll)
equalbtn.addEventListener("click", equal)
back.addEventListener("click", erase)


//onClick events
multiply.onclick = () => {
    equal()
    currentMode = "multiply"
    memoryDisplay.textContent="Multiply"
}

divide.onclick = () => {
    equal()
    currentMode = "divide"
    memoryDisplay.textContent="Divide"
 
}
sum.onclick = () => {
    equal()
    currentMode = "sum"
    memoryDisplay.textContent="Sum"
}
minus.onclick = () => {
    equal()
    currentMode = "minus"
    memoryDisplay.textContent="Minus"
}


//functions 
    //get first and second pair of numbers
function input (e){
    if (currentMode=="idle"){
         let firstNum = e.target.id
         firstInput += firstNum
         resultDisplay.textContent=firstInput.slice(0, 13)
    }else if (currentMode!="idle"){
         secondInput+=e.target.id
         resultDisplay.textContent=secondInput.slice(0, 13)
        }  
}
    //equal 
 function equal(){
    a=+firstInput.slice(0, 13)
    b=+secondInput.slice(0, 13)
    if (currentMode=="sum"){
        result= (a+b).toString()
        newNums()
    }else if (currentMode=="minus"){
        result=(a-b).toString()
        newNums()
    }else if (currentMode=="multiply"){
        result=(a*b).toString()
        newNums()
    }else if (currentMode=="divide"){
        if (b==0){
            result= ""
            resultDisplay.textContent="yeah sure"
        }
        else if (b!=0){
        result=(a/b).toString()
        newNums()}
    }
}
    //function to store results as first input number
function newNums(){
    resultDisplay.textContent = +parseFloat(result).toFixed(4)
    firstInput=result.toString()
    secondInput=""
    currentMode=""
    memoryDisplay.textContent=""
}

    //function to clear all
function clearAll(){
    firstInput=""
    secondInput=""
    result=""
    resultDisplay.textContent=""
    currentMode="idle"
    memoryDisplay.textContent=""
}

    //function to delete last input number
function erase(){
    if(firstInput!=""&&secondInput==""){
        let num = firstInput.toString()
        firstInput= num.slice(0, num.length -1)
        resultDisplay.textContent = firstInput
    } else if (firstInput!=""&&secondInput!=""){
        let num = secondInput.toString()
        secondInput= num.slice(0, num.length -1)
        resultDisplay.textContent = secondInput
    }
}

