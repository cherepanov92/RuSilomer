import cl from 'classnames';
import { useState, useEffect, useRef } from 'react';


const CalculatorButtons = ({exercises, viewState, stageState, cssClass}) => {
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
                       animateButtons ? "fadeInDown" : "",
                       (stageState === "cancel" && animateButtons) ? "fadeInDown" : "")} ref={domButtons}>
      {exercises.map((item,index) => {
        return(
          <div className={cl("calculator-buttons__wrapper")} key={index}>
            <button className={cl("calculator-button")}>
              <picture className={cl("calculator-button__picture")}>
                <img className={cl("calculator-button__image")} src={item.image.src} alt={item.image.alt} />
              </picture>
              {viewState === 'list' ?
                <div className={cl("calculator-button__title")}>{item.title}</div>:
                null
              }
            </button>
          </div>
        )

      })

      }
    </div>
  )

}

export default CalculatorButtons;