import { NextSeo } from 'next-seo';
import cl from 'classnames';
import Backgound_wrapper from '../../Backgound_wrapper/Backgound_wrapper';
import Close_button from '../../Buttons/Close_button';
import CalculatorHeaderButtons from '../../Calculator/CalculatorHeaderButtons/CalculatorHeaderButtons';
import CalculatorStart from '../../Calculator/CalculatorButtons/CalculatorStart';
import CalculatorButtons from '../../Calculator/CalculatorButtons/CalculatorButtons';
import FormCalculator from '../../Calculator/FormCalculator/FormCalculator';
import {useRouter} from 'next/router';
import {useState} from 'react';
import moment from 'moment';

const Calculator = ({children, ...props}) => {
  const router = useRouter();
  const momentTimer = moment.duration(1, 'seconds');
  const [view, setView] = useState('grid');
  /*stage: init, prepare, cancel, ready, start, paused, finished */
  const [stage, setStage] = useState('init');
  const [personInfo, setPersonInfo] = useState({});
  const [timer, setTimer] = useState(1);
  const [totalPoints, setTotalPoints] = useState(0);
  const { data } = props;
  console.log(momentTimer.milliseconds());
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

        <div className="header-calculator">
          <CalculatorHeaderButtons
                toggleGridChangeView={() => {setView('grid')}}
                toggleListChangeView={() => {setView('list')}}
                viewState={view}
                cssClass={cl(stage === 'prepare' ? "calculator-view-conrtol--showOut" : "" )}
          />
          <Close_button cssClass={cl("close-button--white")}
                        toggleClick={() => router.back()}
                        titleButton="Вернуться на сайт"/>
        </div>

          <main className={cl("calculator--"+ view, "calculator--stage-"+ stage, "main", "calculator")}>
            {children}
            <div className={cl("person",
                              (stage !== 'prepare' && stage !== 'init' && stage !== 'cancel') ? "person--show": "")}>
                                 <span className={cl("person__name")}>{personInfo ? personInfo.name : null} {personInfo ? personInfo.secondName : null}</span>
                                 <span className={cl("person__separator")}>/</span>
                                 <span className={cl("person__age")}>{personInfo ? personInfo.age : null}</span>
                               </div>
            <div className={cl("calculator__counter-wraper",
                              (stage !== 'prepare' && stage !== 'init' && stage !== 'cancel') ? "calculator__counter-wraper--show": "")}>
                                <div className={cl("calculator__timer")}>
                                  <span className={cl("calculator__timer-numbers")}>{timer}</span>
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
                                    break;
                                  default:
                                    break;
                                }}}
                             cssClass={cl(stage === 'prepare' ? "calculator-start--showOut" : "" )}/>
          </main>

      </Backgound_wrapper>

    </>
  )
}

export default Calculator;