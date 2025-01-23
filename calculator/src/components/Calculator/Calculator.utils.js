export const CALCULATOR_ACTIONS = [
    {name: 'C', className:'clear'},
    {name: 'Backspace', className:''},
    {name: '/', className:''},
    {name: '*', className:''},
    {name: '7', className:''},
    {name: '8', className:''},
    {name: '9', className:''},
    {name: '-', className:''},
    {name: '4', className:''},
    {name: '5', className:''},
    {name: '6', className:''},
    {name: '+', className:''},
    {name: '1', className:''},
    {name: '2', className:''},
    {name: '3', className:''},
    {name: '=', className:'equal'},
    {name: '0', className:'zero'},
    {name: '.', className:''},
]

export function replaceLast(str, value) {
    return str.replace(/.$/, value)
}

export function removeLastChar(str){
    return str.slice(0, -1)
}

export function calc(current, operator, next){
    return eval(`${current}${operator}${next}`)
}