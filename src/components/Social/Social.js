import IN from './Icons/IN'
import YT from './Icons/YT'
import VK from './Icons/VK'
import cl from 'classnames'

export function getSocialImage(abbr, cssClass = '') {
  switch (abbr) {
    case 'IN':
      return <IN cssClass={cssClass} />
    case 'YT':
      return <YT cssClass={cssClass} />
    case 'VK':
      return <VK cssClass={cssClass} />
    default:
      return <></>
  }
}

export function getSocialName(abbr) {
  let name

  switch (abbr) {
    case 'IN':
      name = 'Instagram'
      break
    case 'YT':
      name = 'Youtube'
      break
    case 'VK':
      name = 'Вконтакте'
      break
    default:
      name = ' '
  }

  return name
}

const Social = ({socialList}) => {
  if (socialList && socialList.length > 0) {
    return (
      <ul className="social">
        {socialList.map((item) => (
          <li key={item.socialName} className={cl('social__item')}>
            <a
              href={item.socialLink}
              className={cl('social__link')}
              title={'Перейти в ' + getSocialName(item.socialName)}
            >
              {getSocialImage(item.socialName)}
            </a>
          </li>
        ))}
      </ul>
    )
  } else {
    return <></>
  }
}

export default Social
