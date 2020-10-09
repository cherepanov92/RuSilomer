import cl from 'classnames';

const Close_button = ({cssClass, toggleClick, titleButton = ''}) => {

const toggleCloseHandler = () => {
  toggleClick();
}

return(

  <button className={cl(cssClass, "close-button", )}
          type="button"
          title={titleButton}
          onClick={toggleCloseHandler}>
    <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd"
            clipRule="evenodd"
            d="M10.8179 9L17.623 2.19496C18.1257 1.69226 18.1257 0.879719 17.623 0.377022C17.1203 -0.125674 16.3077 -0.125674 15.805 0.377022L9 7.18207L2.19496 0.377022C1.69226 -0.125674 0.879719 -0.125674 0.377022 0.377022C-0.125674 0.879719 -0.125674 1.69226 0.377022 2.19496L7.18206 9L0.377022 15.805C-0.125674 16.3077 -0.125674 17.1203 0.377022 17.623C0.627728 17.8737 0.956859 17.9997 1.28599 17.9997C1.61512 17.9997 1.94425 17.8737 2.19496 17.623L9 10.8179L15.805 17.623C16.0557 17.8737 16.3849 17.9997 16.714 17.9997C17.0431 17.9997 17.3723 17.8737 17.623 17.623C18.1257 17.1203 18.1257 16.3077 17.623 15.805L10.8179 9Z" 
            />
      </svg>
  </button>
)

}

export default Close_button;