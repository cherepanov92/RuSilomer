import cl from 'classnames';

const CalculatorStart = ({toggleClick, cssClass, buttonText, stateDisabled}) => {

  return (
    <button onClick={() => toggleClick()} className={cl(cssClass, "calculator-start")}
            disabled={stateDisabled ? 'disabled' : ''}>
      {buttonText}
    </button>
  )
}

export default CalculatorStart;