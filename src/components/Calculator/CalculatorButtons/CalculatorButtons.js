import cl from 'classnames';
import { useState, useEffect, useRef } from 'react';


const CalculatorSingleButton = ({item, viewState, stageState, togglePoints, toggleExercisesList}) => {
  const [clicks, setClicks]= useState(+0);

  const handlerButtonClick = () => {
    if (stageState === 'start') {
      setClicks(prev => prev + 1)
      togglePoints(prev => +item.points + prev)
      toggleExercisesList(prev => {
        return prev.concat([item.pk]);
      })

    }
  }
  useEffect(()=>{
    if (stageState === 'init') {
      setClicks(+0);
    }
  },[stageState])

  return(
    <button className={cl("calculator-button")}
            onClick={handlerButtonClick}>
        <picture className={cl("calculator-button__picture")}>
        <img className={cl("calculator-button__image")} src={item.image.src} alt={item.image.alt} />
        </picture>
        {viewState === 'list' ?
          <div className={cl("calculator-button__title")}>{item.title}</div> :
          null}
        {stageState === 'start' &&  clicks !== 0 ?
          <span className={cl("calculator-button__clicks")}>{clicks}</span> :
          null}
    </button>
  )
}


const CalculatorButtons = ({exercises, viewState, stageState, gender, cssClass, togglePoints, toggleExercisesList}) => {
  const [animateButtons, setAnimatedButtons] = useState(false);
  const domButtons = useRef(null);
  useEffect(() => {
    setAnimatedButtons(true);
    domButtons.current.addEventListener('animationend', () => {
      setAnimatedButtons(false)
    });
  }, [viewState, stageState])

  return(
    <div className={cl(cssClass, "calculator-buttons",
                       (stageState !== "start" && animateButtons ) ? "fadeInDown" : "",
                       (stageState === "cancel" && animateButtons) ? "fadeInDown" : "")} ref={domButtons}>
      {exercises.map((item,index) => {
        if(stageState === 'ready' || stageState === 'start') {
          return(item.gender === 'both' || gender === item.gender ?
            <div className={cl("calculator-buttons__wrapper")} key={index}>
              <CalculatorSingleButton item={item}
                                      viewState={viewState}
                                      stageState={stageState}
                                      togglePoints={togglePoints}
                                      toggleExercisesList={toggleExercisesList}
                                      />
            </div> :
            null
          )
        }

        return(
          <div className={cl("calculator-buttons__wrapper")} key={index}>
            <CalculatorSingleButton item={item}
                                    viewState={viewState}
                                    stageState={stageState}/>
          </div>
        )

      })

      }
    </div>
  )

}

export default CalculatorButtons;