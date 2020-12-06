import cl from 'classnames'
//import Search from '../Search/Search'
import Calendar from '../Calendar'
import {useState} from 'react'
import Meropriyatiya_item from '../Meropriyatiya_tabs/Meropriyatiya_item'
import moment from 'moment'
import {connect} from 'react-redux'
import {modalShowIn, modalHide} from '../../actions/toggleModal'
import ModalComponent from '../Modal/ModalComponent'

const Meropriyatiya_tabs = ({events, modalShowIn, modalHide}) => {
  moment.locale('ru')

  const [searchRegion, setSearchRegion] = useState('')

  const [activeCity, setActiveCity] = useState(events[0].city.name_en)
  const [startEventsDate, setStartEventsDate] = useState(null)
  const [endEventsDate, setEndEventsDate] = useState(null)

  let showEvent = true

  let checkEventDate = (date) => {
    if (startEventsDate && endEventsDate) {
      let dateToCheck = moment(date, 'DD/MM/YYYY')
      let dateStart = moment(startEventsDate, 'DD.MM.YYYY')
      let dateEnd = moment(endEventsDate, 'DD.MM.YYYY')

      if (startEventsDate == endEventsDate) {
        showEvent = dateToCheck.isSame(dateStart)
      } else {
        showEvent = dateToCheck.isBetween(dateStart, dateEnd)
      }

      return showEvent
    }

    return (showEvent = true)
  }

  const toggleTabHandler = (e) => {
    setActiveCity(e.target.dataset.key)
  }

  return (
    <div className={cl('events-tabs', 'tabs')}>
      {/* <ModalComponent>
        <>
          <h4 className="modal__title">Выберите город</h4>
        </>
      </ModalComponent> */}

      <div className={cl('events-tabs__controls-wraper')}>
        <Calendar
          startDate={startEventsDate}
          endDate={endEventsDate}
          setStartDate={setStartEventsDate}
          setEndDate={setEndEventsDate}
        />
        <ul className={cl('tabs-controls')}>
          {events.map((item) => {
            return (
              <li
                className={cl(
                  {'tabs-controls__item--active': item.city.name_en === activeCity ? true : false},
                  'tabs-controls__item'
                )}
                key={item.city.name_en}
                data-key={item.city.name_en}
                onClick={toggleTabHandler}
              >
                {item.city.name}
              </li>
            )
          })}
        </ul>
        {/* <div className="tabs-controls__wrap">
          {true && (
            <button disabled={false} onClick={modalShowIn} className="loadMore">
              Другой город
            </button>
          )}
        </div> */}
      </div>

      <div className={cl('tabs-content', 'events-tabs__content-wraper')}>
        {events.map((item) => {
          return (
            <div
              className={cl(
                {'tabs-content__item--active': item.city.name_en === activeCity ? true : false},
                'tabs-content__item'
              )}
              key={item.city.name_en}
            >
              {item.items !== undefined ? (
                item.items.map((event, index) => {
                  checkEventDate(event.eventDate)
                  if (showEvent) {
                    return <Meropriyatiya_item {...event} key={index} />
                  }
                })
              ) : (
                <div className="event-wrong">
                  <h2 className="event-wrong__title">Ничего не найдено</h2>
                  <div className="event-wrong__description">
                    Попробуйте выбрать другой город или дату
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  modalShowIn,
  modalHide,
}

export default connect(null, mapDispatchToProps)(Meropriyatiya_tabs)
