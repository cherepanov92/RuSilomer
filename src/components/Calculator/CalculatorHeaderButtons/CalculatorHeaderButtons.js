import cl from 'classnames';
import GridControl from './Icons/GridControl';
import ListControl from './Icons/ListControl';
import {useEffect, useState} from 'react';

const CalculatorHeaderButtons = ({toggleGridChangeView, toggleListChangeView, viewState, cssClass}) => {

  const [currentCssClass, setcurrentCssClass]= useState(viewState);

  useEffect(()=>{
    switch(viewState) {
      case 'grid':
        setcurrentCssClass('grid-control--active');
        break;
      case 'list':
        setcurrentCssClass('list-control--active');
        break;
      default:
        setcurrentCssClass('');
    }
  }, [viewState])

  const handlerGridChangeView = () => {
    toggleGridChangeView();
  }
  const handlerListChangeView = () => {
    toggleListChangeView();
  }

  return (
    <div className={cl(cssClass, "calculator-view-conrtol")}>
      <GridControl cssClass={viewState === 'grid' ? currentCssClass : ''}
                   toggleClick={handlerGridChangeView}
                   stateDisabled={cssClass? true: false}/>
      <ListControl cssClass={viewState === 'list' ? currentCssClass : ''}
                   toggleClick={handlerListChangeView}
                   stateDisabled={cssClass? true: false}/>
    </div>
  )
}

export default CalculatorHeaderButtons;