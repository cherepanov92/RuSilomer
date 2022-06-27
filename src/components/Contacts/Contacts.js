import cl from 'classnames'
import {connect} from 'react-redux'
import Phone from './Icons/Phone'
import Mail_Icon from './Icons/Mail_Icon'
import {getSocialImage} from '../Social/Social'
import DOMPurify from 'dompurify'

const Contacts = ({contacts, cityDictionary}) => {
  const currentCityContacts = contacts.find(
    (item) => item.cityDictionary.city_slug === cityDictionary.city_slug
  )

  const isServer = () => {
    return typeof window === 'undefined'
  }

  if (isServer()) {
    // const createDOMPurify = require('dompurify');
    // const { JSDOM } = require('jsdom');
    // const window = new JSDOM('').window;
    // const DOMPurify = createDOMPurify(window)
    // const cleanServerMap = (dirtyHTML) => {
    //   console.log('backend');
    //   return DOMPurify.sanitize(dirtyHTML);
    // }
  }

  const cleanMap = (dirtyHTML) => {
    if (!isServer()) {
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
              <div
                className={cl('organisation__map')}
                dangerouslySetInnerHTML={createMap(item.map)}
              ></div>
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

const mapStateToProps = (state) => ({
  cityDictionary: state.city.cityDictionary,
})

export default connect(mapStateToProps, null)(Contacts)
