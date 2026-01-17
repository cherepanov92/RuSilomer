import cl from 'classnames'
import {connect} from 'react-redux'
import {useState, useEffect, useRef} from 'react'
import Phone from './Icons/Phone'
import Mail_Icon from './Icons/Mail_Icon'
import {getSocialImage} from '../Social/Social'
import DOMPurify from 'dompurify'
import {getBasePath} from '../../utils/basePath'

const MapWithLoader = ({mapHtml, createMap, mapKey}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const contentRef = useRef(null)
  const mapPath = `${getBasePath()}/images/map.svg`

  useEffect(() => {
    const container = contentRef.current
    if (!container) return

    const img = container.querySelector('img')
    if (!img) {
      setIsLoaded(true)
      return
    }

    if (img.complete) {
      setIsLoaded(true)
      return
    }

    const handleLoad = () => setIsLoaded(true)
    img.addEventListener('load', handleLoad)
    img.addEventListener('error', handleLoad)

    return () => {
      img.removeEventListener('load', handleLoad)
      img.removeEventListener('error', handleLoad)
    }
  }, [mapHtml])

  return (
    <div
      className={cl('organisation__map', isLoaded && 'organisation__map--loaded')}
      style={{backgroundImage: `url(${mapPath})`}}
    >
      <div
        ref={contentRef}
        className={cl('organisation__map-content')}
        dangerouslySetInnerHTML={createMap(mapHtml)}
      ></div>
    </div>
  )
}

const Contacts = ({contacts}) => {
  const currentCityContacts = contacts && contacts.length > 0 ? contacts[0] : null

  const cleanMap = (dirtyHTML) => {
    if (typeof window !== 'undefined') {
      return DOMPurify.sanitize(dirtyHTML)
    }
    return dirtyHTML
  }

  const createMap = (map) => {
    return {__html: cleanMap(map)}
  }

  return (
    <div className={cl('contacts')}>
      {currentCityContacts ? (
        currentCityContacts.organisations.map((item) => {
          return (
            <div className={cl('organisation')} key={item.pk}>
              <MapWithLoader
                mapHtml={item.map}
                createMap={createMap}
                mapKey={item.pk}
              />
              <div className={cl('organisation__contacts')}>
                {item.phone ? (
                  <div className={cl('contacts__wrapper')}>
                    <Phone cssClass={cl('contacts__icon')} />
                    <div className={cl('contacts__text')}>
                      {item.phone.map((el, index) => {
                        return (
                          <a className={cl('contacts__links')} href={'tel:' + el} key={index}>
                            {el}
                          </a>
                        )
                      })}
                    </div>
                  </div>
                ) : (
                  <></>
                )}

                {item.email ? (
                  <div className={cl('contacts__wrapper')}>
                    <Mail_Icon cssClass={cl('contacts__icon')} />
                    <div className={cl('contacts__text')}>
                      <a className={cl('contacts__links')} href={'mailto:' + item.email}>
                        {item.email}
                      </a>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                {item.socials ? (
                  item.socials.map((sc) => {
                    return (
                      <div className={cl('contacts__wrapper')} key={sc.socialName}>
                        {getSocialImage(sc.socialName, 'contacts__icon')}
                        <div className={cl('contacts__text')}>
                          <a className={cl('contacts__links')} href={sc.socialLink} target="_blank">
                            {sc.socialLinkName}
                          </a>
                        </div>
                      </div>
                    )
                  })
                ) : (
                  <></>
                )}
              </div>
            </div>
          )
        })
      ) : (
        <div>
          <h2>Контактов не найдено</h2>
        </div>
      )}
    </div>
  )
}

export default connect(null, null)(Contacts)
