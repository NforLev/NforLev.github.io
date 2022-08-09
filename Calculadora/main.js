
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
let btn1 = document.getElementById("1")
let btn2 = document.getElementById("2")
let btn3 = document.getElementById("3")
let btn4 = document.getElementById("4")
let btn5 = document.getElementById("5")
let btn6 = document.getElementById("6")
let btn7 = document.getElementById("7")
let btn8 = document.getElementById("8")
let btn9 = document.getElementById("9")
let btn0 = document.getElementById("0")
let btnComa = document.getElementById(".")

//onClick
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

//listeners
btn1.addEventListener("click", input)
btn2.addEventListener("click", input)
btn3.addEventListener("click", input)
btn4.addEventListener("click", input)
btn5.addEventListener("click", input)
btn6.addEventListener("click", input)
btn7.addEventListener("click", input)
btn8.addEventListener("click", input)
btn9.addEventListener("click", input)
btn0.addEventListener("click", input)
clear.addEventListener("click", clearAll)
btnComa.addEventListener("click", input)
equalbtn.addEventListener("click", equal)
back.addEventListener("click", erase)

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

memoryDisplay.innerText=""

//function to undo last input number
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

