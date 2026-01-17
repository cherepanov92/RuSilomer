import cl from 'classnames'
import {useState, useEffect, useRef} from 'react'
import getWordForPoints from '../../../utils/WordForPoints'
import {getBasePath} from '../../../utils/basePath'

const CalculatorSingleButton = ({item, viewState, stageState, togglePoints}) => {
  const [clicks, setClicks] = useState(+0)

  const handlerButtonClick = () => {
    if (stageState === 'start') {
      setClicks((prev) => prev + 1)
      togglePoints((prev) => +item.points + prev)
    }
  }

  useEffect(() => {
    if (stageState === 'ready') {
      setClicks(+0)
    }
  }, [stageState])

  return (
    <button className={cl('calculator-button')} onClick={handlerButtonClick}>
      {viewState.points ? (
        <span
          className={cl(
            'calculator-button__points',
            item.points > 9 ? 'calculator-button__points-lg' : ''
          )}
        >
        <b>
          {!viewState.icons && `№ ${item.number}:  `}
          {viewState.icons || viewState.text ? '+' : ''}
          {item.points}
        </b>
          {viewState.icons && !viewState.text ? '' : `${getWordForPoints(+item.points)}`}
      </span>
      ) : null}
      {viewState.icons ? (
        <picture className={cl('calculator-button__picture')}>
          {item.img && (
            <img className={cl('calculator-button__image')} src={`${getBasePath()}${item.img}`} alt={item.name} />
          )}
        </picture>
      ) : null}
      {viewState.text ? <div className={cl('calculator-button__title')}>{item.name}</div> : null}
      {stageState === 'start' && clicks !== 0 ? (
        <span className={cl('calculator-button__clicks')}>{clicks}</span>
      ) : null}
    </button>
  )
}

const CalculatorButtons = ({exercises, viewState, stageState, togglePoints}) => {
  const [animateButtons, setAnimatedButtons] = useState(false)
  const domButtons = useRef(null)
  const {points, icons, text} = viewState
  let exercisesList = []

  useEffect(() => {
    setAnimatedButtons(true)
    const listener = () => setAnimatedButtons(false)
    if (domButtons.current) {
      domButtons.current.addEventListener('animationend', listener)
      return () => {
        if (domButtons.current) {
          domButtons.current.removeEventListener('animationend', listener)
        }
      }
    }
  }, [viewState, stageState])

  return (
    <div
      className={cl(
        stageState === 'settings' ? 'calculator-buttons--hidden' : '',
        stageState !== 'start' && animateButtons ? 'fadeInDown' : '',
        'calculator-buttons'
      )}
      ref={domButtons}
    >
      {exercises.map((item, index) => {
        if (points && !icons && !text) {
          if (!exercisesList.includes(item.points)) {
            exercisesList.push(item.points)
            return (
              <div className={cl('calculator-buttons__wrapper')} key={item.number}>
                <CalculatorSingleButton
                  item={item}
                  viewState={viewState}
                  stageState={stageState}
                  togglePoints={togglePoints}
                />
              </div>
            )
          } else {
            return null
          }
        } else {
          return (
            <div className={cl('calculator-buttons__wrapper')} key={index}>
              <CalculatorSingleButton
                item={item}
                viewState={viewState}
                stageState={stageState}
                togglePoints={togglePoints}
              />
            </div>
          )
        }
      })}
    </div>
  )
}

export default CalculatorButtons
