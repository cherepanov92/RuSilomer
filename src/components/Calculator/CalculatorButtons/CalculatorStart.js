import cl from 'classnames';

const CalculatorStart = ({toggleClick, cssClass, buttonText = 'Начать'}) => {

  return (
    <button onClick={() => toggleClick()} className={cl(cssClass, "calculator-start")}>
      {buttonText}
    </button>
  )
}

export default CalculatorStart;