import cl from 'classnames';

const GridControl = ({cssClass, toggleClick, stateDisabled}) => {

const handlerButtonClick = () => {
  toggleClick();
}

  return (
    <button onClick={handlerButtonClick} className={cl("grid-control", cssClass)} disabled={stateDisabled ? 'disabled' : ''}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="7.2" height="7.2" rx="3.6"/>
        <rect y="8.40002" width="7.2" height="7.2" rx="3.6"/>
        <rect y="16.8" width="7.2" height="7.2" rx="3.6"/>
        <rect x="8.3999" width="7.2" height="7.2" rx="3.6"/>
        <rect x="8.3999" y="8.40002" width="7.2" height="7.2" rx="3.6"/>
        <rect x="8.3999" y="16.8" width="7.2" height="7.2" rx="3.6"/>
        <rect x="16.8" width="7.2" height="7.2" rx="3.6"/>
        <rect x="16.8" y="8.40002" width="7.2" height="7.2" rx="3.6"/>
        <rect x="16.8" y="16.8" width="7.2" height="7.2" rx="3.6"/>
      </svg>
    </button>
  )
}

export default GridControl;