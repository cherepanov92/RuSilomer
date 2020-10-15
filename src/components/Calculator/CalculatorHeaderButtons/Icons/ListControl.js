import cl from 'classnames';

const ListControl = ({cssClass, toggleClick, stateDisabled}) => {

  const handlerButtonClick = () => {
    toggleClick();
  }

  return (
    <button onClick={handlerButtonClick} className={cl("list-control", cssClass)} disabled={stateDisabled ? 'disabled' : ''}>
      <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="7.2" height="7.2" rx="3.6"/>
        <rect y="8.40002" width="7.2" height="7.2" rx="3.6"/>
        <rect y="16.8" width="7.2" height="7.2" rx="3.6"/>
        <rect x="8" width="15" height="7" rx="3.5"/>
        <rect x="8" y="8" width="15" height="8" rx="4"/>
        <rect x="8" y="17" width="15" height="7" rx="3.5"/>
      </svg>
    </button>
  )
}

export default ListControl;