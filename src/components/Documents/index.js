import {connect} from 'react-redux'
import cl from 'classnames'

const Documents = ({documents}) => {
  return (
    <>
      <h2 className={cl('documnets-header')}>Документы и ссылки на видео</h2>
      <div className={cl('documnets')}>
        {documents.map((document) => {
          return (
            <div className={cl('documnets__item')}>
              <a
                className={cl('documnets__link')}
                href={document.link}
                title={document.name}
                download={document.event === 'download' ? true : false}
                target={document.event === 'watch' ? '_blank' : '_self'}
                rel={document.event === 'watch' ? 'noopener noreferrer' : ''}
              >
                <img src={document.image} alt={document.name} />
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
