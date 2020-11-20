import {useState, useRef, useEffect} from 'react'
import cl from 'classnames'

const Account_Enter = ({data, setRegistration, setLogIn, setIsAnimated}) => {
  const [clickedButton, setClickedButton] = useState('')
  const accountTitle = useRef(null)

  const handleLogIn = (event) => {
    event.preventDefault
    setIsAnimated()
    setClickedButton('logIn')
  }
  const handleRegistration = (event) => {
    event.preventDefault
    setIsAnimated()
    setClickedButton('registration')
  }

  useEffect(() => {
    const listener = () => {
      if (clickedButton === 'logIn') {
        setLogIn()
        setIsAnimated()
      } else if (clickedButton === 'registration') {
        setRegistration()
        setIsAnimated()
      }
    }
    accountTitle.current.addEventListener('animationend', listener)
    return () => accountTitle.current.removeEventListener('animationend', listener)
  }, [data.animated])

  return (
    <div className={cl('account__content')}>
      <div
        ref={accountTitle}
        className={cl(
          'account-title',
          data.stage === 'init' ? 'account-title--init' : null,
          data.animated ? 'account-title--out' : ''
        )}
      >
        <span className="account-title__diclaimer">Русский Силомер</span>
        <h1 className="account-title__h1">
          {data.content.h1}
          <span className="account-title__second-part">{data.content.h1Part}</span>
        </h1>
      </div>
      <div className={cl('account-description', data.animated ? 'account-description--out' : '')}>
        <p>{data.content.description}</p>
      </div>
      <div className={cl('account__button-wrap', data.animated ? 'account__button-wrap--out' : '')}>
        <button
          onClick={handleLogIn}
          className={cl('account__button')}
          title="Войти в личный кабинет"
        >
          вход
        </button>
        <button
          onClick={handleRegistration}
          className={cl('account__button')}
          title="Зарегестрироваться на сайте"
        >
          регистрация
        </button>
      </div>
    </div>
  )
}

export default Account_Enter
