import {useState, useEffect} from 'react'
import cl from 'classnames'
import Post_title from '../../Post_title/Post_title'

const Account_Enter = ({data, setRegistration, setLogIn}) => {
  const handleLogIn = (event) => {
    event.preventDefault
    setLogIn()
  }
  const handleRegistration = (event) => {
    event.preventDefault
    setRegistration()
  }
  return (
    <div className={cl('account__content')}>
      <div className="account-title">
        <span className="account-title__diclaimer">Русский Силомер</span>
        <h1 className="account-title__h1">
          {data.content.h1}
          <span className="account-title__second-part">{data.content.h1Part}</span>
        </h1>
      </div>
      <div className="account-description">
        <p>{data.content.description}</p>
      </div>
      <div className={cl('account__button-wrap')}>
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
