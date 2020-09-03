const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
	calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
	number.addEventListener("click",(event) => {
		inputNumber(event.target.value)
		updateScreen(currentInput)
	})
})

let prevInput = '0'
let calculationOperator = ' '
let currentInput = '0'

const inputNumber = (number) => {
	if (currentInput === '0') {
		currentInput = number
	} else if (number==='.') {
		currentInput+=number
	}else if (currentInput.endsWith('.')) {
		currentInput+=number
	}else {
		currentInput += number
	}
}

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
	operator.addEventListener("click",(event) => {
		inputOperator(event.target.value)
	})
})

const inputOperator = (operator) => {
	prevInput = currentInput
	calculationOperator = operator
	currentInput = '0'
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', () => {
	inputNumber('.')
	updateScreen(currentInput)
})

const zero = document.querySelector('.zero-btn')

zero.addEventListener('click', () => {
	inputNumber('0')
	updateScreen(currentInput)
})

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
	calculate()
	updateScreen(currentInput)
	
})

const percent = document.querySelector('.percentage')

percent.addEventListener('click', () => {
	inputOperator('%')
	calculate()
	updateScreen(currentInput)
})

const calculate = () => {
	let result = 0
	switch(calculationOperator) {
		case '+':
			result = parseFloat(prevInput) + parseFloat(currentInput)
			break
		case '-':
			result = parseFloat(prevInput) - parseFloat(currentInput)
			break
		case '*':
			result = parseFloat(prevInput) * parseFloat(currentInput)
			break
		case '/':
			result = parseFloat(prevInput) / parseFloat(currentInput)
			break
		case '%':
			result = parseFloat(prevInput) / 100
			break
		default:
			return
	}
	currentInput = result.toString()
	calculationOperator = ' '

}

const allclear = document.querySelector('.all-clear')

allclear.addEventListener('click', ()=> {
	calculatorScreen.value = '0'
	currentInput = '0'
	prevInput = '0'
})
