import cl from 'classnames';
import Link from 'next/link';

const Programs = ({ programs }) => {
  return (
    <div className={cl('programs')}>
      {programs.map((program, index) => {
        return (
          <div className={cl('program')} key={index}>
            <picture>
              <img
                className={cl('program__image')}
                src={program.image.src}
                alt={program.image.alt}
                title={program.image.alt}
              />
            </picture>
            <Link href={program.link}>
              <a
                className={cl('program__link')}
                title={'Посмотреть подробнее про ' + program.title}
              >
                <span className={cl('program__disclaimer')}>
                  Программа тренировок
                </span>
                <h2 className={cl('program__title')}>{program.title}</h2>
              </a>
            </Link>
            <p className={cl('program__description')}>{program.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Programs;
