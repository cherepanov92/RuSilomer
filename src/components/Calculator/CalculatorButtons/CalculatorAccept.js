import cl from 'classnames';

const  CalculatorAccept = ({cssClass}) => {

  return (
    <button className={cl(cssClass, "calculator-form__accept-button")}>
      <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd"
              clipRule="evenodd" 
              d="M13.4696 25.0873L4.4753 15.3952C3.90904 14.785 2.99095 14.785 2.42469 15.3952C1.85844 16.0054 1.85844 16.9947 2.42469 17.6049L12.5747 28.5424C13.1894 29.2048 14.2031 29.1395 14.7402 28.4029L30.6901 6.52791C31.1849 5.84936 31.0755 4.86709 30.4458 4.33394C29.8161 3.8008 28.9046 3.91867 28.4098 4.59722L13.4696 25.0873Z" fill="white"/>
      </svg>
    </button>
  )


}

export default CalculatorAccept;