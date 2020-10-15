import cl from 'classnames';
import {useState, useEffect} from 'react';
import {validatorTextField, validatorDigitField} from '../Validators';
import moment from 'moment';

const FormCalculator = ({cssClass, toggleCancelClick, toggleReadyClick, togglePersonInfo}) => {
  let currentYear = new Date().getFullYear();
  const [personName, setPersonName] = useState({
            value: '',
            error: false,
            errorMessage: '',
        });
  const [personSecondName, setPersonSecondName] = useState({
            value: '',
            error: false,
            errorMessage: '',
        });
  const [birdtdayDay, setBirdtdayDay] = useState({
            value: '',
            error: false,
            errorMessage: '',
        });
  const [birdtdayMonth, setBirdtdayMonth] = useState({
            value: '',
            error: false,
            errorMessage: '',
        });
  const [birdtdayYear, setBirdtdayYear] = useState({
            value: '',
            error: false,
            errorMessage: '',
        });
  const [personSex, setPersonSex] = useState('man');
  const [formError, setFormError] = useState(true);
  
  /*
  * Я бы добавил  'debounce' или 'throttle' при валидации полей, чтобы не тринерить 1 инпут
  */

  const handlerChangeName = (event) => {
    let prevInputValue = event.target.value;
    setPersonName( prev => {
      return {
        ...prev,
        value: prevInputValue,
      }
    });
    try {
      validatorTextField(prevInputValue, [1,12]);
      setPersonName( prev => {
        return {
          ...prev,
          error: false,
          errorMessage: ''
        }
      });
    } catch (error) {
      setFormError(true);
      setPersonName( prev => {
        return {
          ...prev,
          error: true,
          errorMessage: error.message,
        }
      });
    }
  }

  const handlerChangeSecondName = (event) => {
    let prevInputValue = event.target.value;
    setPersonSecondName( prev => {
      return {
        ...prev,
        value: prevInputValue,
      }
    });
    try {
      validatorTextField(prevInputValue, [1,20]);
      setPersonSecondName( prev => {
        return {
          ...prev,
          error: false,
          errorMessage: ''
        }
      });
    } catch (error) {
      setFormError(true);
      setPersonSecondName( prev => {
        return {
          ...prev,
          error: true,
          errorMessage: error.message,
        }
      });
    }
  }

  const handlerChangeBirdtdayDay = (event) => {
    let prevInputValue = event.target.value;
    setBirdtdayDay( prev => {
      return {
        ...prev,
        value: prevInputValue,
      }
    });
    try {
      validatorDigitField(prevInputValue, [1,31]);
      setBirdtdayDay( prev => {
        return {
          ...prev,
          error: false,
          errorMessage: ''
        }
      });
    } catch (error) {
      setFormError(true);
      setBirdtdayDay( prev => {
        return {
          ...prev,
          error: true,
          errorMessage: error.message,
        }
      });
    }
  }

  const handlerChangeBirdtdayMonth = (event) => {
    let prevInputValue = event.target.value;
    setBirdtdayMonth( prev => {
      return {
        ...prev,
        value: prevInputValue,
      }
    });
    try {
      validatorDigitField(prevInputValue, [1,12]);
      setBirdtdayMonth( prev => {
        return {
          ...prev,
          error: false,
          errorMessage: ''
        }
      });
    } catch (error) {
      setFormError(true);
      setBirdtdayMonth( prev => {
        return {
          ...prev,
          error: true,
          errorMessage: error.message,
        }
      });
    }
  }

  const handlerChangeBirdtdayYear = (event) => {
    let prevInputValue = event.target.value;
    setBirdtdayYear( prev => {
      return {
        ...prev,
        value: prevInputValue,
      }
    });
    try {
      validatorDigitField(prevInputValue, [1900, currentYear]);
      setBirdtdayYear( prev => {
        return {
          ...prev,
          error: false,
          errorMessage: ''
        }
      });
    } catch (error) {
      setFormError(true);
      setBirdtdayYear( prev => {
        return {
          ...prev,
          error: true,
          errorMessage: error.message,
        }
      });
    }
  }

  useEffect(() => {
    if(!personName.error &&
       personName.value !== '' &&
       !personSecondName.error &&
       personSecondName.value !== '' &&
       !birdtdayDay.error &&
       birdtdayDay.value !== '' &&
       !birdtdayMonth.error &&
       birdtdayMonth.value !== '' &&
       !birdtdayYear.error &&
       birdtdayYear.value !== '' )
       {
        setFormError(false);
       }
  }, [personName, personSecondName, birdtdayDay, birdtdayMonth, birdtdayYear]);

  const handleSubmit = (e) => {
    if(!formError){
      e.preventDefault();
      toggleReadyClick();
      let birthday = moment(birdtdayDay.value +'/'+ birdtdayMonth.value +'/'+ birdtdayYear.value, 'DD/MM/YYYY');
      let age = moment().diff(birthday, 'years');
      togglePersonInfo(() => {
        return {
          name: personName.value,
          secondName: personSecondName.value,
          birdtdayDay: birdtdayDay.value,
          birdtdayMonth: birdtdayMonth.value,
          birdtdayYear: birdtdayYear.value,
          sex: personSex,
          age: age,
        }
      })
    }
  }

  const handleDecline = () => {
    setPersonName({
        value: '',
        error: false,
        errorMessage: '',
      }
    );
    setPersonSecondName({
        value: '',
        error: false,
        errorMessage: '',
      }
    );
    setBirdtdayDay({
        value: '',
        error: false,
        errorMessage: '',
      }
    );
    setBirdtdayMonth({
        value: '',
        error: false,
        errorMessage: '',
      }
    );
    setBirdtdayYear({
        value: '',
        error: false,
        errorMessage: '',
      }
    );
    setFormError(true);
    toggleCancelClick();
  }

  return(
    <>
    <form className={cl(cssClass, "calculator-form")}
          onSubmit={handleSubmit}
          onReset={handleDecline}>
    <div className="form-title">Введите информацию</div>
      <label className="calculator-form__text-label" htmlFor="personName">Имя</label>
      <input className={cl("calculator-form__text-field", personName.error ? "field--error": "")}
            type="text"
            id="personName"
            name="personName"
            onChange={handlerChangeName}
            value={personName.value}
            />
            {personName.error ?
            <span className="calculator-form__error-message">{personName.errorMessage}</span> :
            null
            }
      <label className="calculator-form__text-label" htmlFor="personSecondName">Фамилия</label>
      <input className={cl("calculator-form__text-field", personSecondName.error ? "field--error": "")}
            type="text"
            id="personSecondName"
            name="personSecondName"
            onChange={handlerChangeSecondName}
            value={personSecondName.value}
            />
            {personSecondName.error ?
            <span className="calculator-form__error-message">{personSecondName.errorMessage}</span> :
            null
            }
      <div className="calculator-form__birdtday-wrapper">
        <span className="calculator-form__birdtday-title">Дата рождения</span>
        <input className={cl("calculator-form__day-field", birdtdayDay.error ? "field--error": "")}
              type="text"
              name="birdtdayDay"
              placeholder="День"
              maxLength="2"
              onChange={handlerChangeBirdtdayDay}
              value={birdtdayDay.value}
              />
        <input className={cl("calculator-form__month-field", birdtdayMonth.error ? "field--error": "")}
              type="text"
              name="birdtdayMonth"
              placeholder="Мес"
              maxLength="2"
              onChange={handlerChangeBirdtdayMonth}
              value={birdtdayMonth.value}
              />
        <input className={cl("calculator-form__year-field", birdtdayYear.error ? "field--error": "")}
              type="text"
              name="birdtdayYear"
              placeholder="Год"
              maxLength="4"
              onChange={handlerChangeBirdtdayYear}
              value={birdtdayYear.value}
              />
              {birdtdayDay.error || birdtdayMonth.error || birdtdayYear.error ?
              <span className="calculator-form__error-message">{birdtdayDay.errorMessage ? birdtdayDay.errorMessage : null ||
                                                                birdtdayMonth.errorMessage ? birdtdayMonth.errorMessage : null ||
                                                                birdtdayYear.errorMessage ? birdtdayYear.errorMessage : null }</span> :
              null
              }
      </div>
      <div className="calculator-form__sex-wrapper">
          <span className="calculator-form__sex-title">Пол</span>
          <input id="sex-m"
                className="calculator-form__sex-input"
                type="radio"
                name="sex-person"
                checked={personSex === 'man'}
                onChange={() => setPersonSex('man')}
                value='man'/>
          <label className={cl("calculator-form__sex-label", personSex === 'man' ? "calculator-form__sex-label--active": "")}
                onClick={() => setPersonSex('man')}
                htmlFor="sex-m">Муж</label>
          <input id="sex-w"
                className="calculator-form__sex-input"
                type="radio"
                name="sex-person"
                onChange={() => setPersonSex('woman')}
                checked={personSex === 'woman'}
                value='woman'/>
          <label className={cl("calculator-form__sex-label", personSex === 'woman' ? "calculator-form__sex-label--active": "")}
                onClick={() => setPersonSex('woman')}
                htmlFor="sex-w">Жен</label>
      </div>
      <div className="calculator-form__setPerson-buttons">
        <button className="calculator-form__setPerson-accept"
                type="submit"
                disabled={formError ? true : false}>
          <svg width="29" height="25" viewBox="0 0 29 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.4696 21.0873L2.4753 11.3952C1.90904 10.785 0.990955 10.785 0.424695 11.3952C-0.141565 12.0054 -0.141565 12.9947 0.424695 13.6049L10.5747 24.5424C11.1894 25.2048 12.2031 25.1395 12.7402 24.4029L28.6901 2.52791C29.1849 1.84936 29.0755 0.867089 28.4458 0.333944C27.8161 -0.199202 26.9046 -0.0813289 26.4098 0.59722L11.4696 21.0873Z"/>
          </svg>
        </button>
        <button className="calculator-form__setPerson-decline"
                type="reset">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.0199 10L19.5811 2.43884C20.1396 1.88029 20.1396 0.977465 19.5811 0.418914C19.0225 -0.139638 18.1197 -0.139638 17.5612 0.418914L10 7.98007L2.43884 0.418914C1.88029 -0.139638 0.977465 -0.139638 0.418914 0.418914C-0.139638 0.977465 -0.139638 1.88029 0.418914 2.43884L7.98007 10L0.418914 17.5612C-0.139638 18.1197 -0.139638 19.0225 0.418914 19.5811C0.697475 19.8596 1.06318 19.9996 1.42888 19.9996C1.79458 19.9996 2.16028 19.8596 2.43884 19.5811L10 12.0199L17.5612 19.5811C17.8397 19.8596 18.2054 19.9996 18.5711 19.9996C18.9368 19.9996 19.3025 19.8596 19.5811 19.5811C20.1396 19.0225 20.1396 18.1197 19.5811 17.5612L12.0199 10Z"/>
            </svg>
        </button>
      </div>
    </form>
    </>
  )
}

export default FormCalculator;