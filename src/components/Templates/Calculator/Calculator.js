import {NextSeo} from 'next-seo'
import cl from 'classnames'
import Backgound_wrapper from '../../Backgound_wrapper/Backgound_wrapper'
import Close_button from '../../Buttons/Close_button'
import CalculatorHeaderButtons from '../../Calculator/CalculatorHeaderButtons/CalculatorHeaderButtons'
import CalculatorStart from '../../Calculator/CalculatorButtons/CalculatorStart'
import CalculatorButtons from '../../Calculator/CalculatorButtons/CalculatorButtons'
import CalculatorSettings from '../../Calculator/CalculatorSettings/CalculatorSettings'
import {useRouter} from 'next/router'
import {useState, useEffect} from 'react'
import Cookies from 'universal-cookie'
import {motion} from 'framer-motion'

const Calculator = ({children, ...props}) => {
  const router = useRouter()
  const [view, setView] = useState('list')
  const [isShowPoints, setShowPoints] = useState(true)
  const [isShowIcons, setShowIcons] = useState(false)
  const [isShowText, setShowText] = useState(false)
  /*stage: ready, settings, start, finished */
  const [stage, setStage] = useState('ready')
  const [timer, setTimer] = useState(+60)
  const [miliseconds, setMiliseconds] = useState(+1000)
  const [totalPoints, setTotalPoints] = useState(+0)
  const [error, setError] = useState(false)
  const cookies = new Cookies()

  const transition = {
    duration: 0.6,
    ease: [0.43, 0.13, 0.23, 0.96],
  }

  const calculator = {
    visible: {opacity: 1, y: '0', transition},
    hidden: {opacity: 0, y: '-100%', transition},
  }

  const {data} = props

  useEffect(() => {
    if (isShowIcons && !isShowText) {
      setView('grid')
    } else if (isShowIcons && isShowText && !isShowPoints) {
      setView('list')
    } else if (isShowIcons && isShowText && isShowPoints) {
      setView('list-points')
    } else if (!isShowIcons && isShowText && isShowPoints) {
      setView('list-points-reverse')
    } else {
      setView('list')
    }
  }, [isShowPoints, isShowIcons, isShowText])

  const handlerSendData = () => {
    setTimer(+60)
    setMiliseconds(+1000)
    setTotalPoints(+0)
  }

  const handlerCountDown = () => {
    const initDate = new Date()
    const initTime = initDate.getTime() + timer * 1000
    let StartCountDown = setInterval(function () {
      let curDate = new Date()
      let difference = initTime - curDate.getTime()
      if (difference > 0) {
        let ms = difference % 1000
        difference -= ms
        let msToShow = Math.floor(ms / 10)
        if (msToShow < 10) {
          msToShow = '0' + msToShow
        }
        setMiliseconds(msToShow)
        difference = Math.floor(difference / 1000)
        let s = difference % 60
        if (s < 10) {
          s = '0' + s
        }
        setTimer(s)
      } else {
        clearTimeout(StartCountDown)
        setStage('finished')
        setTimer('00')
        setMiliseconds('00')
      }
    }, 10)
  }

  return (
    <>
      <NextSeo
        title={data.seo.title}
        description={data.seo.description}
        canonical={data.seo.url}
        openGraph={{
          url: data.seo.url,
          title: data.seo.title,
          description: data.seo.description,
          images: [
            {
              url: 'https://rusilomer.ru/assets/images/header__logo.png',
              width: 900,
              height: 800,
              alt: data.seo.title,
            },
          ],
          site_name: 'rusilomer.ru',
        }}
      />

      <Backgound_wrapper cssClass="background-wrapper--blue">
        <motion.div initial="hidden" animate="visible" exit="hidden" variants={calculator}>
          <div
            className={cl(
              'header-calculator',
              stage === 'start' || stage === 'pause' || stage === 'resume'
                ? 'header-calculator--hidden'
                : ''
            )}
          >
            <CalculatorHeaderButtons
              toggleSettingsPanel={() => {
                setStage('settings')
              }}
              stage={stage}
            />
            <Close_button
              cssClass={cl('close-button--white')}
              toggleClick={() => {
                setStage('ready')
                if (cookies.get('visit') === 'calculator') {
                  router.back()
                } else {
                  router.push('/')
                }
              }}
              titleButton="Вернуться на сайт"
            />
          </div>
          <main
            className={cl(
              'calculator--' + view,
              'calculator--stage-' + stage,
              'main',
              'calculator'
            )}
          >
            {children}

            <div
              className={cl(
                'calculator__counter-wraper',
                stage !== 'settings' ? 'calculator__counter-wraper--show' : ''
              )}
            >
              <div className={cl('calculator__timer')}>
                <span className={cl('calculator__timer-numbers')}>
                  {timer}.{miliseconds === 1000 ? '00' : miliseconds}
                </span>
                <span className={cl('calculator__timer-dimension')}> сек</span>
                <span className={cl('calculator__timer-description')}>время</span>
              </div>
              <div className={cl('calculator__counter')}>
                <span className={cl('calculator__total-points')}>{totalPoints}</span>
                <span className={cl('calculator__counter-description')}>сумма баллов</span>
              </div>
            </div>
            <CalculatorSettings
              className={cl(stage === 'settings' ? 'calculator-settings--show' : '')}
              showProps={{
                points: [isShowPoints, setShowPoints],
                icons: [isShowIcons, setShowIcons],
                text: [isShowText, setShowText],
              }}
              setError={setError}
            />
            <CalculatorButtons
              exercises={data.content.exercises}
              viewState={{
                points: isShowPoints,
                icons: isShowIcons,
                text: isShowText,
              }}
              stageState={stage}
              togglePoints={setTotalPoints}
            />
            <CalculatorStart
              toggleClick={() => {
                switch (stage) {
                  case 'ready':
                    setStage('start')
                    handlerCountDown()
                    break
                  case 'settings':
                    setStage('ready')
                    break
                  case 'finished':
                    handlerSendData()
                    setStage('ready')
                    break
                  default:
                    break
                }
              }}
              buttonText={
                stage === 'ready'
                  ? 'Старт'
                  : stage === 'settings'
                  ? 'Сохранить'
                  : stage === 'finished'
                  ? 'Заново'
                  : 'Начать'
              }
              cssClass={cl(
                stage === 'start' ? 'calculator-start--showOut' : '',
                error ? 'calculator-start--disabled' : ''
              )}
              stateDisabled={error}
            />
          </main>
        </motion.div>
      </Backgound_wrapper>
    </>
  )
}

export default Calculator
