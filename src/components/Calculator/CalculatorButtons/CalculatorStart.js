import cl from 'classnames';

const CalculatorStart = ({toggleClick, cssClass}) => {

  return (
    <button onClick={() => toggleClick()} className={cl(cssClass, "calculator-start")}>
      Начать
    </button>
  )
}

export default CalculatorStart;