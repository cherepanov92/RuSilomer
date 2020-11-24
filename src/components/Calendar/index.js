import cl from 'classnames'
import CalendarIcon from '../Buttons/CalendarIcon'
import {useState} from 'react'
import RangeCalendar from 'rc-calendar/lib/RangeCalendar'
import ruRU from 'rc-calendar/lib/locale/ru_RU'
import ModalComponent from '../Modal/ModalComponent'
import {connect} from 'react-redux'
import {modalShowIn, modalHide} from '../../actions/toggleModal'
import moment from 'moment'
import 'moment/locale/ru'
import Close_button from '../Buttons/Close_button'

const Calendar = ({modalShowIn, modalHide}) => {
  moment.locale('ru')

  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  const formatStr = 'DD.MM.YYYY'

  function myFormat(value) {
    return value ? value.format(formatStr) : ''
  }

  const toggleCalendarSelected = (value) => {
    setStartDate(myFormat(value[0]))
    setEndDate(myFormat(value[1]))
    modalHide()
    // toggleEventsDate[0](myFormat(value[0]))
    // toggleEventsDate[1](myFormat(value[1]))
  }

  const toggleCalendarClear = () => {
    setStartDate(null)
    setEndDate(null)
    // toggleEventsDate[0](null)
    // toggleEventsDate[1](null)
  }

  return (
    <>
      <ModalComponent>
        <>
          <h4 className="modal__title">Выберите дату</h4>
          <RangeCalendar
            prefixCls={'calendar-block'}
            locale={ruRU}
            showToday={false}
            showDateInput={false}
            onSelect={toggleCalendarSelected}
            onClear={toggleCalendarClear}
          />
        </>
      </ModalComponent>
      <button className={cl('calendar-btn')} onClick={modalShowIn}>
        <CalendarIcon cssClass="calendar-btn__icon" />
        {startDate && endDate ? (
          <>
            <span className={'selected-date__items'}>
              {startDate} - {endDate}{' '}
            </span>
            {/* <Close_button toggleClick={toggleCalendarClear} titleButton="Сбросить дату" /> */}
          </>
        ) : (
          <span className={'selected-date__placeholder'}>выберете дату</span>
        )}
      </button>
    </>
  )
}

const mapDispatchToProps = {
  modalShowIn,
  modalHide,
}

export default connect(null, mapDispatchToProps)(Calendar)
