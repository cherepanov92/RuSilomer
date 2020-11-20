import {useState, useRef, useEffect} from 'react'
import cl from 'classnames'
import {useForm} from 'react-hook-form'
import VisibilityIcon from './Icons/VisibilityIcon'
import VisibilityHideIcon from './Icons/VisibilityHideIcon'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schemaLog = yup.object().shape({
  email: yup.string().email('Формат example@mail.com').required('Обязательное поле'),
  password: yup.string().required('Обязательное поле'),
})

const schemReg = yup.object().shape({
  email: yup.string().email('Формат example@mail.com').required('Обязательное поле'),
  passwordR: yup
    .string()
    .required('Обязательное поле')
    .min(6, 'Минимум 6 символов.')
    .matches(/[a-zA-Z]/gm, 'Только лат.буквы'),
  passwordRR: yup
    .string()
    .required('Обязательное поле')
    .oneOf([yup.ref('passwordR')], 'Пароли должны совподать'),
})

const Account_Form = ({data, setRegistration, setLogIn, setIsAnimated}) => {
  const [clickedButton, setClickedButton] = useState('')
  const [showPassword, setShow] = useState(false)
  const accountForm = useRef(null)
  const {register, handleSubmit, errors} = useForm({
    resolver: yupResolver(data.stage === 'logIn' ? schemaLog : schemReg),
  })

  const onSubmit = (formData) => {
    console.log(formData)
  }

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
      } else if (clickedButton === 'registration') {
        setRegistration()
      }

      if (data.animated === true) {
        setIsAnimated()
      }
    }
    accountForm.current.addEventListener('animationend', listener)
    return () => accountForm.current.removeEventListener('animationend', listener)
  }, [data.animated])

  return (
    <div
      ref={accountForm}
      className={cl('account__form', data.animated ? 'account__form--out' : '')}
    >
      <div className={cl('account-title')}>
        <span className="account-title__diclaimer">Русский Силомер</span>
        <h1 className="account-title__h1">
          {data.stage === 'logIn' ? 'вход' : data.stage === 'registration' ? 'регистрация' : null}
        </h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={cl('formForAccount')}>
        <input
          name="email"
          id="email"
          type="text"
          ref={register()}
          className={cl('formForAccount__input', errors.email && 'formForAccount__input--error')}
        />
        <label htmlFor="email" className={cl('formForAccount__label')}>
          почта
        </label>
        {errors.email && (
          <span className={cl('formForAccount__errors')}>{errors.email?.message}</span>
        )}
        {data.stage === 'registration' ? (
          <>
            <input
              name="passwordR"
              id="passwordR"
              type="text"
              ref={register()}
              className={cl(
                'formForAccount__input',
                'formForAccount__input--mt',
                errors.passwordR && 'formForAccount__input--error'
              )}
            />
            <label htmlFor="passwordR" className={cl('formForAccount__label')}>
              пароль
            </label>
            {errors.passwordR && (
              <span className={cl('formForAccount__errors')}>{errors.passwordR?.message}</span>
            )}
            <input
              name="passwordRR"
              id="passwordRR"
              type="text"
              ref={register()}
              className={cl(
                'formForAccount__input',
                'formForAccount__input--mt',
                errors.passwordRR && 'formForAccount__input--error'
              )}
            />
            <label htmlFor="passwordRR" className={cl('formForAccount__label')}>
              повторите пароль
            </label>
            {errors.passwordRR && (
              <span className={cl('formForAccount__errors')}>{errors.passwordRR?.message}</span>
            )}
          </>
        ) : (
          <div className={cl('formForAccount__password-container')}>
            <input
              name="password"
              id="password"
              type={showPassword ? 'text' : 'password'}
              ref={register()}
              className={cl(
                'formForAccount__input',
                'formForAccount__input--mt',
                errors.password && 'formForAccount__input--error'
              )}
            />
            <input
              type="checkbox"
              name="showPassword"
              value="show"
              className={cl('formForAccount__checkbox-eye')}
              onClick={() => setShow((prev) => !prev)}
            />
            <VisibilityIcon
              className={cl(
                'formForAccount__checkbox-icon',
                showPassword ? 'formForAccount__checkbox-icon--hidden' : ''
              )}
            />
            <VisibilityHideIcon
              className={cl(
                'formForAccount__checkbox-icon',
                showPassword ? '' : 'formForAccount__checkbox-icon--hidden'
              )}
            />
            <label htmlFor="password" className={cl('formForAccount__label')}>
              пароль
            </label>
            {errors.password && (
              <span className={cl('formForAccount__errors')}>{errors.password?.message}</span>
            )}
          </div>
        )}

        <input
          type="submit"
          disabled={Object.keys(errors).length !== 0 ? true : false}
          value={
            data.stage === 'logIn' ? 'вход' : data.stage === 'registration' ? 'регистрация' : null
          }
          className={cl(
            'account__button',
            'formForAccount__submit',
            Object.keys(errors).length !== 0 ? 'account__button--disabled' : ''
          )}
        />
      </form>

      <div className={cl('account__bottom-offer')}>
        {data.stage === 'logIn' ? (
          <>
            <p>у вас нет личного кабинета?</p>
            <span>пройдите быструю </span>
            <button onClick={handleRegistration} className={cl('account__bottom-button')}>
              регистрацию
            </button>
          </>
        ) : data.stage === 'registration' ? (
          <>
            <p>у вас есть личный кабинет? </p>
            <button onClick={handleLogIn} className={cl('account__bottom-button')}>
              войдите
            </button>
            <span> в него</span>
          </>
        ) : null}
      </div>
    </div>
  )
}

export default Account_Form
