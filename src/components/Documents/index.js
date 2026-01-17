import {connect} from 'react-redux'
import cl from 'classnames'
import {getBasePath} from '../../utils/basePath'

const Documents = ({documents}) => {
  const basePath = getBasePath()
  
  const getDocumentLink = (link) => {
    if (link.startsWith('/')) {
      return `${basePath}${link}`
    }
    return link
  }

  return (
    <>
      <h2 className={cl('documnets-header')}>Документы и ссылки на видео</h2>
      <div className={cl('documnets')}>
        {documents.map((document) => {
          return (
            <div className={cl('documnets__item')} key={document.name}>
              <a
                className={cl('documnets__link')}
                href={getDocumentLink(document.link)}
                title={document.name}
                download={document.event === 'download'}
                target={document.event === 'watch' ? '_blank' : '_self'}
                rel={document.event === 'watch' ? 'noopener noreferrer' : ''}
              >
                <img src={`${getBasePath()}${document.image}`} alt={document.name} />
                <h3 className={cl('documnets__title')}>{document.name}</h3>
              </a>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default connect(null, null)(Documents)
