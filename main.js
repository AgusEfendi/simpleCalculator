
const calculatorScreen =document.querySelector('.calculator-screen')
let prevNumber = ''
let culationOperator = ''
let currentNumber = '0'


const updateScreen = (number) => {
    calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        updateScreen(event.target.value)
    })
})



numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const inputNumber = (number) => {
    if(currentNumber === '0') {
        currentNumber = number
    } else{
        currentNumber += number
    }
}

const inputOperator = (operator) => {
    prevNumber = currentNumber
    calculationOperator = operator
    currentNumber = ''
}

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
        updateScreen(currentNumber)
        updateScreen(event.target.value)
    })
})



const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}




const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener("click", () => {
   clearAll()
   updateScreen(currentNumber)
})





// rumus
const calculate = () => {
    let result = ''
    switch(calculationOperator){
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = parseInt(prevNumber) + parseInt(currentNumber)
            break
        case "*":
            result = parseInt(prevNumber) * parseInt(currentNumber)
            break
        case "/":
            result = parseInt(prevNumber) / parseInt(currentNumber)
            break
        default:
            break
    }
    currentNumber = result
    calculationOperator = ''
}


const decimal = document.querySelector('.decimal')
inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}
decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})