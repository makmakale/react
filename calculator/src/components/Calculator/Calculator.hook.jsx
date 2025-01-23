import {useCallback, useEffect, useState} from "react";
import {calc, removeLastChar, replaceLast} from "./Calculator.utils";

export default function useCalculator() {
  const [currentValue, setCurrentValue] = useState('')
  const [nextValue, setNextValue] = useState('')
  const [operator, setOperator] = useState('')
  const [equal, setEqual] = useState(false)
  const [result, setResult] = useState('')

  function reset() {
    setCurrentValue('')
    setNextValue('')
    setOperator('')
    setEqual(false)
    setResult('')
  }

  const handleClick = useCallback(value => {
    switch (value) {
      case '+':
      case '-':
      case '*':
      case '/': {
        // If result is not empty and user set new action, first we need calculate previous action
        if (result) {
          const tmp = result
          reset()
          setCurrentValue(tmp)
          setOperator(value)
          break
        }

        // If result is empty and user set new action while we already set current and next values,
        // first we need calculate previous action
        if (currentValue && nextValue) {
          const res = eval(`${currentValue}${operator}${nextValue}`)
          setCurrentValue(res)
          setOperator(value)
          setNextValue('')
          break
        }

        // Otherwise, just set operator
        setOperator(value)

        break
      }

      case '=':
      case 'Enter': {
        if (!operator) break

        setEqual(true)

        // If result is not empty and user press Enter/=, set current value as result and repeat last action
        if (result) {
          setCurrentValue(result)
          setResult(calc(result, operator, nextValue ?? result))
        } else {
          if (!nextValue) {
            setNextValue(currentValue)
          }
          setResult(calc(currentValue, operator, nextValue ? nextValue : currentValue))
        }

        break
      }

      case 'C': {
        reset()

        break
      }

      case '.': {
        // Set 0 before dot if it's first character
        if (result || !currentValue) {
          reset()
          setCurrentValue('0.')
          break
        }

        // Ignore multiple dots in current value
        if (!operator && currentValue.includes('.')) {
          break
        }

        // Ignore multiple dots in next value
        if (operator && nextValue.includes('.')) {
          break
        }

        operator
          ? setNextValue(prev => prev ? prev + value : '0' + value)
          : setCurrentValue(prev => prev + value)

        break
      }

      case 'Backspace': {
        // If result is not empty, clear pre-result values
        if (result) {
          const tmp = result
          reset()
          setResult(tmp)
        }

        operator
          ? setNextValue(removeLastChar)
          : setCurrentValue(removeLastChar)

        break
      }

      default:
        if (isNaN(value)) {
          break
        }

        // If result is not empty and user press new number, reset all values and set current value with new value
        if (result) {
          reset()
          setCurrentValue(value)
          break
        }

        // If current value start with 0, avoid multiple zeros
        if (!operator && currentValue.startsWith('0') && !currentValue.startsWith('0.')) {
          setCurrentValue(replaceLast(currentValue, value))
          break
        }

        // If next value start with 0, avoid multiple zeros
        if (operator && nextValue.startsWith('0') && !nextValue.startsWith('0.')) {
          setNextValue(replaceLast(nextValue, value))
          break
        }

        operator
          ? setNextValue(prev => prev + value)
          : setCurrentValue(prev => prev + value)

    }
  }, [currentValue, nextValue, operator, result]);

  function getOperationLine() {
    if (!operator) {
      return ''
    }

    return `${currentValue}${operator}${nextValue}${equal ? '=' : ''}`
  }

  useEffect(() => {
    const handleKeyPress = (e) => handleClick(e.key)

    window.addEventListener('keyup', handleKeyPress)

    return () => {
      window.removeEventListener('keyup', handleKeyPress)
    }
  }, [handleClick]);

  return {
    handleClick,
    preResult: getOperationLine(),
    result: result || nextValue || currentValue
  }
}