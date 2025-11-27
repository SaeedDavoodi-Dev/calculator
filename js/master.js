const inp = document.querySelector('.calc>input')
const btn = document.querySelectorAll('button')
let num1 = 0
let num2 = 0
let operator = ''
let resetInput = false

function num(s) {
    let temp = s.innerText

    if (resetInput) {
        inp.value = temp
        resetInput = false
    } else {
        inp.value = inp.value == '0' ? temp : inp.value + temp
    }
}


function _op(s) {
    let opTemp = s.innerText

    if (opTemp == '=') {
        calculate()
        return
    }

    if (opTemp == '%') {
        inp.value = (parseFloat(inp.value) / 100).toString()
        return
    }

    if (operator != '') {
        calculate()
    }

    num1 = parseFloat(inp.value)
    operator = opTemp
    resetInput = true
}

function calculate() {
    if (operator == '') return
    num2 = parseFloat(inp.value)

    let result = 0
    switch (operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num1 / num2; break;
        default: result = num2
    }
    inp.value = result.toString()

    num1 = result
    operator = ''
    resetInput = true
}

function _clear(s) {
    let _cd = s.innerText

    if (_cd == 'AC') {
        inp.value = '0'
        num1 = 0
        num2 = 0
        operator = ''
        resetInput = false
    } else if (_cd == 'Del') {
        if (inp.value.length > 1) {
            inp.value = inp.value.slice(0, -1)
        } else {
            inp.value = '0'
        }
    }
}

btn.forEach((val) => {
    val.addEventListener('mousedown', () => {
        val.style.transform = 'perspective(800px) translateZ(-50px)'
    })
})
btn.forEach((val) => {
    val.addEventListener('mouseup', () => {
        val.style.transform = 'perspective(800px) translateZ(0)'
    })
})