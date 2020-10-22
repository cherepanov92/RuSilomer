import cl from 'classnames';
import SettingsButton from './Icons/SettingsButton';
import {useEffect, useState} from 'react';

const CalculatorHeaderButtons = ({toggleSettingsPanel, stage}) => {

  const [isShowSettings, setShowSettings]= useState(stage);

  const handlerShowSettings = () => {
    toggleSettingsPanel();
  }

  useEffect(()=>{
    setShowSettings(stage);
  },[stage])

  return (
    <div className={cl("calculator-view-conrtol")}>
      <SettingsButton cssClass={isShowSettings === 'settings' ? "settings-button__show-out" : ""}
                      toggleClick={handlerShowSettings}
                      stateDisabled={isShowSettings === 'settings' ? true : false}/>
    </div>
  )
}

export default CalculatorHeaderButtons;