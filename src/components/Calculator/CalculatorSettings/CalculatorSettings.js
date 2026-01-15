import cl from 'classnames'
import {useState, useEffect, useRef} from 'react'

const CheckBox = ({text, value, showState, toggle, disabled = false}) => {
  const [isChecked, setChecked] = useState(showState)

  const toggleView = () => {
    toggle((prev) => !prev)
    setChecked((prev) => !prev)
  }

  return (
    <>
      <input
        type="checkbox"
        className={cl('calculator-settings__input')}
        id={value}
        name={value}
        onChange={toggleView}
        value={value}
        disabled={disabled}
      />
      <label
        className={cl(
          'calculator-settings__label',
          isChecked ? 'calculator-settings__label--active' : '',
          disabled ? 'calculator-settings__label--opacity' : ''
        )}
        htmlFor={value}
      >
        {text}
      </label>
    </>
  )
}

const CalculatorSettings = ({className, showProps, setError}) => {
  const {points, icons, text} = showProps
  const [showError, setShowError] = useState(false)
  const [errorText, setErrorText] = useState('')
  const domError = useRef(null)
  let width = 375

  if (process.browser) {
    width = window && window.innerWidth
  }

  useEffect(() => {
    if (!points[0] && !icons[0] && !text[0]) {
      setError(true)
      setShowError(true)
      setErrorText('Выберите хотя бы один из вариантов отображения')
    } else if (!points[0] && !icons[0]) {
      setError(true)
      setShowError(true)
      setErrorText('Нельзя выбрать только описание')
    } else {
      setError(false)
      setShowError(false)
    }
  }, [points[0], icons[0], text[0]])

  useEffect(() => {
    const listener = () => {
      if (!showError) {
        setErrorText('')
      }
    }
    if (domError.current) {
      domError.current.addEventListener('animationend', listener)
      return () => {
        if (domError.current) {
          domError.current.removeEventListener('animationend', listener)
        }
      }
    }
  }, [showError])

  return (
    <div className={cl('calculator-settings', className)}>
      <h2 className={cl('calculator-settings__title')}>Настройки</h2>
      <div className={cl('calculator-settings__view-control')}>
        <div className={cl('calculator-settings__wrapper')}>
          <CheckBox
            text="Показывать баллы"
            value="pointsView"
            showState={points[0]}
            toggle={points[1]}
          />
        </div>
        <div className={cl('calculator-settings__wrapper')}>
          <CheckBox
            text="Показывать иконки"
            value="iconsView"
            showState={icons[0]}
            toggle={icons[1]}
            disabled={text[0] && width < 375}
          />
        </div>
        <div className={cl('calculator-settings__wrapper')}>
          <CheckBox
            text="Показывать описание"
            value="textView"
            showState={text[0]}
            toggle={text[1]}
            disabled={icons[0] && width < 375}
          />
        </div>
      </div>
      <div
        className={cl(
          showError ? 'calculator-settings__error--show' : 'calculator-settings__error--hidden',
          'calculator-settings__error'
        )}
        ref={domError}
      >
        {errorText}
      </div>
    </div>
  )
}

export default CalculatorSettings
