import {useState, useRef, useEffect} from 'react'
import cl from 'classnames'
import {useForm} from 'react-hook-form'
import VisibilityIcon from './Icons/VisibilityIcon'
import VisibilityHideIcon from './Icons/VisibilityHideIcon'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Modal from 'react-modal'
import Close_button from '../../Buttons/Close_button'
import {setUserLogIn} from '../../../actions/userLogIn'
import {connect} from 'react-redux'
import {useRouter} from 'next/router'

const schemaLog = yup.object().shape({
  // email: yup.string().email('Формат example@mail.com').required('Обязательное поле'),
  login: yup
    .string()
    .required('Обязательное поле')
    .matches(/[a-zA-Z]/gm, 'Только лат.буквы'),
  password: yup.string().required('Обязательное поле'),
})

const schemReg = yup.object().shape({
  // email: yup.string().email('Формат example@mail.com').required('Обязательное поле'),
  login: yup
    .string()
    .required('Обязательное поле')
    .matches(/[a-zA-Z]/gm, 'Только лат.буквы'),
  passwordR: yup
    .string()
    .required('Обязательное поле')
    .min(8, 'Минимум 8 символов.')
    .matches(/[a-zA-Z]/gm, 'Только лат.буквы'),
  passwordRR: yup
    .string()
    .required('Обязательное поле')
    .oneOf([yup.ref('passwordR')], 'Пароли должны совподать'),
})

const Account_Form = ({data, setRegistration, setLogIn, setIsAnimated, user, setUserLogIn}) => {
  const router = useRouter()
  const [clickedButton, setClickedButton] = useState('')
  const [showPassword, setShow] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [localModal, showlocalModal] = useState(false)
  const [localModalText, showLocalModalText] = useState('')
  const accountForm = useRef(null)
  const {register, handleSubmit, reset, errors} = useForm({
    mode: 'onChange',
    resolver: yupResolver(data.stage === 'logIn' ? schemaLog : schemReg),
  })

  const onSubmit = (formData) => {
    setIsLoading(true)
    if (data.stage === 'logIn') {
      ;(async function getData() {
        try {
          const res = await fetch(process.env.NEXT_PUBLIC_HOST2 + `/api/account/login/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              login: formData.login,
              password: formData.password,
            }),
          })
          if (res.status === 200) {
            setUserLogIn(formData.login)
            reset({login: '', password: ''})
            router.push('/')
          } else {
            showLocalModalText('Возникли проблемы, попробуйте ещё раз')
            showlocalModal(true)
          }
        } catch (err) {
          console.log('err ', err)
        } finally {
          setIsLoading(false)
        }
      })()
    } else {
      ;(async function getData() {
        try {
          const res = await fetch(process.env.NEXT_PUBLIC_HOST2 + `/api/account/register/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: formData.login,
              password: formData.passwordR,
              password_confirm: formData.passwordRR,
            }),
          })
          if (res.status === 201) {
            showLocalModalText('Вы успешно зарегестрировались')
            showlocalModal(true)
            reset({passwordR: '', passwordRR: ''})
          } else {
            showLocalModalText('Возникли проблемы, попробуйте ещё раз')
            showlocalModal(true)
          }
        } catch (err) {
          console.log('err ', err)
        } finally {
          setIsLoading(false)
        }
      })()
    }
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
      className={cl(
        'account__form'
        // data.animated ? 'account__form--out' : ''
      )}
    >
      <div className={cl('account-title')}>
        <span className="account-title__diclaimer">Русский Силомер</span>
        <h1 className={cl('account-title__h1', data.animated ? 'account-title__h1--out' : '')}>
          {data.stage === 'logIn' ? 'вход' : data.stage === 'registration' ? 'регистрация' : null}
        </h1>
      </div>
      <Modal
        isOpen={localModal}
        onRequestClose={() => showlocalModal(false)}
        contentLabel="Модальное окно с городами"
        overlayClassName={cl('modal-overlay')}
        portalClassName={'modal'}
        bodyOpenClassName={'body--modal-open'}
        className={'modal__city'}
        ariaHideApp={false}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
      >
        <Close_button
          cssClass={'modal__close-button'}
          toggleClick={() => showlocalModal(false)}
          titleButton="Закрыть окно"
        />
        <div className={cl('modal__title')}>{localModalText}</div>
        {data.stage === 'registration' ? (
          <button
            type="button"
            onClick={() => {
              showlocalModal(false)
              setLogIn()
            }}
            style={{margin: '20px auto'}}
            className={cl('account__button', 'formForAccount__submit')}
          >
            войти
          </button>
        ) : (
          ''
        )}
      </Modal>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cl('formForAccount', data.animated ? 'formForAccount--out' : '')}
      >
        <input
          name="login"
          id="login"
          type="text"
          ref={register()}
          className={cl('formForAccount__input', errors.login && 'formForAccount__input--error')}
        />
        <label htmlFor="login" className={cl('formForAccount__label')}>
          логин
        </label>
        {errors.login && (
          <span className={cl('formForAccount__errors')}>{errors.login?.message}</span>
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
            data.stage === 'logIn' && !isLoading
              ? 'вход'
              : data.stage === 'registration' && !isLoading
              ? 'регистрация'
              : 'авторизуюсь...'
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

const mapStateToProps = (state) => ({
  user: state.user,
})

const mapDispatchToProps = {
  setUserLogIn,
}

export default connect(mapStateToProps, mapDispatchToProps)(Account_Form)
