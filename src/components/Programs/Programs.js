import cl from 'classnames'
import Link from 'next/link'

const Programs = ({programs}) => {
  return (
    <div className={cl('programs')}>
      {programs.map((program, index) => {
        return (
          <Link href={program.link} key={index}>
            <a
              className={cl('program', 'program__link')}
              title={'Посмотреть подробнее про ' + program.title}
            >
              <div className={cl('')}>
                <picture className={cl('program__picture')}>
                  <img
                    className={cl('program__image')}
                    src={program.image.src}
                    alt={program.image.alt}
                    title={program.image.alt}
                  />
                  <span className={cl('program__line')}></span>
                </picture>

                <span className={cl('program__disclaimer')}>Программа тренировок</span>
                <h2 className={cl('program__title')}>{program.title}</h2>

                <p className={cl('program__description')}>{program.description}</p>
              </div>
            </a>
          </Link>
        )
      })}
    </div>
  )
}

export default Programs
