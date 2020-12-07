import cl from 'classnames'
//import Search from '../Search/Search'
import Calendar from '../Calendar'
import {useState} from 'react'
import Meropriyatiya_item from '../Meropriyatiya_tabs/Meropriyatiya_item'
import moment from 'moment'
import {connect} from 'react-redux'
import {modalShowIn, modalHide} from '../../actions/toggleModal'
import Modal from 'react-modal'
import Close_button from '../../components/Buttons/Close_button'

const Meropriyatiya_tabs = ({events, event_city_list}) => {
  moment.locale('ru')
  const [cityListToShow, setCityListToShow] = useState(event_city_list.slice(0, 4))
  const [cityListLast, setCityListLast] = useState(event_city_list.slice(5))
  const [activeCity, setActiveCity] = useState(event_city_list[0].city_slug)
  const [startEventsDate, setStartEventsDate] = useState(null)
  const [endEventsDate, setEndEventsDate] = useState(null)
  const [localModal, showlocalModal] = useState(false)

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
      <div className={cl('events-tabs__controls-wraper')}>
        <Calendar
          startDate={startEventsDate}
          endDate={endEventsDate}
          setStartDate={setStartEventsDate}
          setEndDate={setEndEventsDate}
        />
        <ul className={cl('tabs-controls')}>
          {cityListToShow.map((item, idx) => {
            return (
              <li
                className={cl(
                  {'tabs-controls__item--active': item.city_slug === activeCity ? true : false},
                  'tabs-controls__item'
                )}
                key={item.city_slug + '-' + idx}
                data-key={item.city_slug}
                onClick={toggleTabHandler}
              >
                {item.city}
              </li>
            )
          })}
        </ul>
        <div className="tabs-controls__wrap">
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
            <div className={cl('modal__title')}>Другие города</div>

            <ul>
              {cityListLast.map((item, idx) => {
                return (
                  <li
                    className={cl('tabs-controls__item')}
                    key={item.city_slug}
                    data-key={item.city_slug}
                    onClick={(event) => {
                      if (cityListToShow.indexOf(item.city_slug) === -1) {
                        let arrnew = [...cityListLast]
                        let index = cityListLast.findIndex(
                          (city) => city.city_slug === item.city_slug
                        )
                        arrnew.splice(index, 1)
                        setCityListLast(arrnew)
                        setCityListToShow((prev) => [...prev, item])
                      }
                      toggleTabHandler(event)
                      showlocalModal(false)
                    }}
                  >
                    {item.city}
                  </li>
                )
              })}
            </ul>
          </Modal>
          {cityListLast.length > 0 && (
            <button
              disabled={false}
              onClick={() => showlocalModal(true)}
              className="tabs-controls__load"
            >
              Другой город &#10148;
            </button>
          )}
        </div>
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
