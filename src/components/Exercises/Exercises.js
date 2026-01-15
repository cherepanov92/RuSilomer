import Link from 'next/link'
import cl from 'classnames'
import {Number} from './Numbers/Numbers'

const Exercises = ({exercises}) => {
  return (
    <>
      {exercises.map((item) => {
        return (
          <div className="exercises" key={item.difficulty}>
            <ul className="number-list">
              {item.elements.map((element) => {
                return (
                  <li className="number-list__item" key={element.number}>
                    <Link
                      href={`/uprazhneniya/${element.number}`}
                      className={cl('number-list__link-' + element.number, 'number-list__link')}
                      title={`Подробне про "${element.name.toLowerCase()}"`}
                    >
                      <span
                        className={cl(
                          'number-list__number',
                          'number-list__number-' + element.number
                        )}
                      >
                        <Number number={element.number} />
                      </span>
                      <div className='exercises-name'>
                        {element.name.split(', ').map((item, index) => 
                          <span key={index} className={cl('exercises-name-item', 'exercises-name-item-' + element.number)}>{item}<br/></span>
                        )}
                      </div>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </>
  )
}

export default Exercises
