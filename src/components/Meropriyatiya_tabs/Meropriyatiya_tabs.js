import cl from 'classnames'
//import Search from '../Search/Search'
import Calendar from '../Calendar'
import {useState} from 'react'
import Meropriyatiya_item from './Meropriyatiya_item'
import moment from 'moment'
import {connect} from 'react-redux'
import {modalShowIn, modalHide} from '../../actions/toggleModal'
import Modal from 'react-modal'
import Close_button from '../Buttons/Close_button'
import ArrowDownIcon from './Icons/ArrowDownIcon'

const Meropriyatiya_tabs = ({events, event_city_list}) => {
  moment.locale('ru')
  const [eventsList, setEventsList] = useState(events)
  const [cityListToShow, setCityListToShow] = useState(event_city_list.slice(0, 4))
  const [cityListLast, setCityListLast] = useState(event_city_list.slice(5))
  const [activeCity, setActiveCity] = useState(event_city_list[0].city_slug)
  const [startEventsDate, setStartEventsDate] = useState(null)
  const [endEventsDate, setEndEventsDate] = useState(null)
  const [localModal, showlocalModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  let showEvent = true

  const isServer = () => {
    return typeof window === 'undefined'
  }

  const isMobile = () => {
    return window.innerWidth <= 768
  }

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
  }

  const toggleTabHandler = (e) => {
    if (eventsList.findIndex((item) => item.city === e.target.dataset.key) === -1) {
      setIsLoading(true)
      ;(async function getData() {
        try {
          const region = event_city_list.find((city) => city.city_slug === e.target.dataset.key)
          const resEvents = await fetch(
            process.env.NEXT_PUBLIC_HOST2 +
              `/api/event/city/get?city=${region.city_slug}&region=${region.region_slug}`
          )
          const eventsUpdate = await resEvents.json()
          setEventsList((prev) => [...prev, {city: region.city_slug, events: eventsUpdate}])
          setActiveCity(region.city_slug)
        } catch (err) {
          console.log('err ', err)
        } finally {
          setTimeout(setIsLoading(false), 1000)
        }
      })()
    } else {
      setActiveCity(e.target.dataset.key)
    }
  }

  const toggleTabHandlerMobile = (e) => {
    showlocalModal(true)
    let index = event_city_list.findIndex((item) => item.city_slug === activeCity)
    let newArr = [...event_city_list]
    newArr.splice(index, 1)
    setCityListLast(newArr)
  }

  return (
    <div className={cl('events-tabs', 'tabs')}>
      <div className={cl('events-tabs__calendar-wraper')} style={isLoading ? {opacity: 0.5} : {}}>
        <Calendar
          startDate={startEventsDate}
          endDate={endEventsDate}
          setStartDate={setStartEventsDate}
          setEndDate={setEndEventsDate}
          isLoading={isLoading}
        />
      </div>

      <div className={cl('events-tabs__controls-wraper')} style={isLoading ? {opacity: 0.5} : {}}>
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
                onClick={
                  isLoading
                    ? () => null
                    : !isServer() && isMobile()
                    ? toggleTabHandlerMobile
                    : toggleTabHandler
                }
              >
                {item.city}
                <ArrowDownIcon cssClass={cl('tabs-controls__icon')} />
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
                    className={cl('tabs-controls__item-modal')}
                    key={item.city_slug}
                    data-key={item.city_slug}
                    onClick={(event) => {
                      if (isLoading) {
                        return null
                      }

                      if (!isServer() && isMobile()) {
                        setCityListToShow((prev) => {
                          return [item]
                        })
                      } else {
                        if (cityListToShow.indexOf(item.city_slug) === -1) {
                          let arrnew = [...cityListLast]
                          let index = cityListLast.findIndex(
                            (city) => city.city_slug === item.city_slug
                          )
                          arrnew.splice(index, 1)
                          setCityListLast(arrnew)
                          setCityListToShow((prev) => [...prev, item])
                        }
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
              onClick={() => (isLoading ? null : showlocalModal(true))}
              className="tabs-controls__load"
            >
              Другой город &#10148;
            </button>
          )}
        </div>
      </div>

      <div className={cl('tabs-content', 'events-tabs__content-wraper')}>
        {eventsList.map((item, idx) => {
          return (
            <div
              className={cl(
                {'tabs-content__item--active': item.city === activeCity},
                'tabs-content__item'
              )}
              key={`events-${item.city}-${idx}`}
            >
              {isLoading ? (
                <div className="loader loaderBg loader--show">Loading...</div>
              ) : item.events !== undefined && item.events.length > 0 ? (
                item.events.map((event, index) => {
                  checkEventDate(event.eventDate)

                  if (showEvent) {
                    return (
                      <Meropriyatiya_item
                        city={item.city}
                        cssClass={index}
                        {...event}
                        key={`event-${event.id}`}
                      />
                    )
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
