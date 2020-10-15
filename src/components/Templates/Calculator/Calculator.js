import { NextSeo } from 'next-seo';
import cl from 'classnames';
import Backgound_wrapper from '../../Backgound_wrapper/Backgound_wrapper';
import Close_button from '../../Buttons/Close_button';
import CalculatorHeaderButtons from '../../Calculator/CalculatorHeaderButtons/CalculatorHeaderButtons';
import CalculatorStart from '../../Calculator/CalculatorButtons/CalculatorStart';
import CalculatorButtons from '../../Calculator/CalculatorButtons/CalculatorButtons';
import FormCalculator from '../../Calculator/FormCalculator/FormCalculator';
// import IconPause from '../../Calculator/CalculatorButtons/Icons/IconPause';
import {useRouter} from 'next/router';
import {useState} from 'react';

const Calculator = ({children, ...props}) => {
  const router = useRouter();
  const [view, setView] = useState('grid');
  /*stage: init, prepare, cancel, ready, start, finished */
  const [stage, setStage] = useState('init');
  const [personInfo, setPersonInfo] = useState({});
  const [timer, setTimer] = useState(+6);
  const [miliseconds, setMiliseconds] = useState(+1000);
  const [totalPoints, setTotalPoints] = useState(+0);
  const [exercisesList, setExercisesList] = useState([]);
  const { data } = props;

  const collectData = () => {
    const initDate = new Date();
    console.log(JSON.stringify({
        "person":personInfo,
        "totalPoints":totalPoints,
        "exercisesList":exercisesList,
        "date": initDate,
          }));
  }

  const handlerSendData = () => {
    setTimer(+6);
    setMiliseconds(+1000);
    collectData();
    setPersonInfo({});
    setTotalPoints(+0);
    setExercisesList([]);
  }

  const handlerCountDown = () => {
    const initDate = new Date();
    const initTime = initDate.getTime() + timer * 1000;
    let StartCountDown = setInterval(function() {
      let curDate = new Date();
      let difference = initTime - curDate.getTime();
      if (difference > 0) {
        let ms = difference % 1000;
        difference -=ms;
        setMiliseconds(Math.floor(ms/10))
        difference = Math.floor(difference/1000);
        let s = difference % 60;
        if(s < 10){
          s = '0' + s;
        }
        setTimer(s);
      } else {
            clearTimeout(StartCountDown);
            setStage('finished');
      }
    }, 10);
  }

  return (
    <>
    <NextSeo
      title = {data.seo.title}
      description = {data.seo.description}
      canonical = {data.seo.url}
      openGraph = {{
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
        <div className={cl("header-calculator",
                           (stage === 'start' || stage === 'pause' || stage === 'resume') ? "header-calculator--hidden" : "" )}>
          <CalculatorHeaderButtons toggleGridChangeView={() => {setView('grid')}}
                                   toggleListChangeView={() => {setView('list')}}
                                   viewState={view}
                                   cssClass={cl(stage === 'prepare' ? "calculator-view-conrtol--showOut" : "",
                                                stage === 'start' ? "calculator-view-conrtol--hidden" : ""  )}/>
          <Close_button cssClass={cl("close-button--white")}
                        toggleClick={() => {setStage('init'); router.back()}}
                        titleButton="Вернуться на сайт"/>
        </div>
          <main className={cl("calculator--"+ view, "calculator--stage-"+ stage, "main", "calculator")}>
            {children}
            <button className={cl("person",
                              (stage !== 'prepare' && stage !== 'init' && stage !== 'cancel') ? "person--show": "")}
                    title="Изменить данные"
                    onClick={() => {if(stage === 'ready') {return setStage('prepare') }}}>
                                 <span className={cl("person__name")}>{personInfo ? personInfo.name : null} {personInfo ? personInfo.secondName : null}</span>
                                 <span className={cl("person__separator")}>/</span>
                                 <span className={cl("person__age")}>{personInfo ? personInfo.age : null}</span>
                               </button>
            <div className={cl("calculator__counter-wraper",
                              (stage !== 'prepare' && stage !== 'init' && stage !== 'cancel') ? "calculator__counter-wraper--show": "")}>
                                <div className={cl("calculator__timer")}>
                                  <span className={cl("calculator__timer-numbers")}>{timer}.{miliseconds === 1000 ? '00' : miliseconds}</span>
                                  <span className={cl("calculator__timer-dimension")}> сек</span>
                                  <span className={cl("calculator__timer-description")}>время</span>
                                </div>
                                <div className={cl("calculator__counter")}>
                                  <span className={cl("calculator__total-points")}>{totalPoints}</span>
                                  <span className={cl("calculator__counter-description")}>сумма баллов</span>
                                </div>
                               </div>
            <CalculatorButtons exercises={data.content.exercises}
                               viewState={view}
                               stageState={stage}
                               gender={personInfo.sex}
                               togglePoints={setTotalPoints}
                               toggleExercisesList={setExercisesList}
                               cssClass={cl(stage === 'prepare' ? "calculator-buttons--hidden" : "")}/>
            <FormCalculator cssClass={cl(stage === 'prepare' ? "calculator-form--showIn" : "" )}
                            toggleCancelClick={() => setStage('cancel')}
                            toggleReadyClick={() => setStage('ready')}
                            togglePersonInfo={setPersonInfo}/>
            <CalculatorStart toggleClick={() => {
                                switch(stage){
                                  case 'init':
                                    setStage('prepare')
                                    break;
                                  case 'cancel':
                                    setStage('prepare')
                                    break;
                                  case 'ready':
                                    setStage('start')
                                    handlerCountDown();
                                    break;
                                  case 'finished':
                                    handlerSendData();
                                    setStage('init')
                                    break;
                                  default:
                                    break;
                                }}}
                             buttonText={stage === 'ready' ? 'Старт' : 
                                         stage === 'finished' ? 'Отправить' : 'Начать'}
                                        //  stage === 'start' ? <IconPause /> : 'Начать'}
                             cssClass={cl(stage === 'prepare' || stage === 'start' ? "calculator-start--showOut" : "" )}/>
          </main>
      </Backgound_wrapper>
    </>
  )
}

export default Calculator;