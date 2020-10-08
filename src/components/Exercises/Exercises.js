import Link from 'next/link';
import cl from 'classnames';
import {Number_1, Number_2, Number_3, Number_4, Number_5, Number_6, Number_7, Number_8,
  Number_9, Number_10, Number_11, Number_12, Number_13, Number_14} from './Numbers/Numbers';


const Exercises = ({exercises}) => {

  const numbers = {
    '1': Number_1,
    '2': Number_2,
    '3': Number_3,
    '4': Number_4,
    '5': Number_5,
    '6': Number_6,
    '7': Number_7,
    '8': Number_8,
    '9': Number_9,
    '10': Number_10,
    '11': Number_11,
    '12': Number_12,
    '13': Number_13,
    '14': Number_14,
};

  return(
    <>
    {exercises.map( item => {
      return(
        <div className="exercises" key={item.group}>
          <h2 className="exercises__group">{item.group}</h2>
          <ul className="number-list">
            {item.elements.map( element => {
                let Number = numbers[element.number];
              return(
                <li className="number-list__item" key={element.number}>
                  <Link href={element.link}>
                    <a className={cl("number-list__link-" + element.number, "number-list__link")} title={"Подробне про " + element.title}>
                      <span className={cl("number-list__number", "number-list__number-" + element.number)}><Number /></span>
                      {element.title}
                      </a>
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

export default Exercises;