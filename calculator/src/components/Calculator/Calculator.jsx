import useCalculator from "./Calculator.hook";
import {CALCULATOR_ACTIONS} from "./Calculator.utils";
import './Calculator.styles.scss'

function Calculator() {
  const {handleClick, preResult, result} = useCalculator()

  return (<div className="container">
    <div className="calculator">
      <span className="pre-result">{preResult}</span>
      <input className="result" readOnly placeholder={'0'} value={result}/>

      {CALCULATOR_ACTIONS.map(action => {
        const {name, className} = action

        return (<div key={name} className={`keycap ${className ?? ''}`} onClick={() => handleClick(name)}>
          {name === 'Backspace' ? <i className="fa-solid fa-reply"/> : <i>{name}</i>}
        </div>)
      })}
    </div>
  </div>)
}

export default Calculator