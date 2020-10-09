import Single_Exercises from '../../../src/components/Templates/Single_Exercises/Single_Exercises';

const Exercises_Single_Post = () => {

  const data = {
    'seo': {
      title: 'подтягивание с уголком / за голову',
      description: 'подтягивание с уголком / за голову',
      url: 'https://rusilomer.ru/uprazhneniya/podtyagivanie-s-ugolkom',
    },
    'exercise': [
      {
        h1: 'подтягивание с уголком',
        image : {
          src: '/images/exercise_name.png',
          alt: 'подтягивание с уголком',
        },
        description: 'Поднять прямые ноги под углом 90 градусов и выполнить в этом положении подтягивание',
        mistakes: 'Если ноги в момент подтягивания опускаются ниже горизонтали, то упражнение засчитывается как “Армейское подтягивание” ',
        points: '7',
      },
      {
        h1: 'подтягивание за голову',
        image : {
          src: '/images/exercise_name2.png',
          alt: 'подтягивание за головум',
        },
        description: 'Сгибание и разгибание рук, одновременно, без рывков и раскачивания, до касания перекладины задней частью шеи',
        mistakes: 'Любой рывок, либо сгибание ног в момент подтягивания считаются помощью в выполнении упражнения и засчитываются как “Подтягивания с рывком”',
        points: '7',
      },
    ],
    'image': {
      src: '/images/exercise_name.png',
    }

  }


  return (
    <Single_Exercises data={data}>
      {data.exercise ? data.exercise.map((item, index) => {
        return(
          <div className="exercises-element" key={index}>
            <picture className="exercises-element__picture">
              <img className="exercises-element__image" src={item.image.src} alt={item.image.alt} />
            </picture>
            <div className="exercises-element__points">
              <span className="exercises-element__v">{item.points}</span>
              <span className="exercises-element__b">баллов</span>
            </div>
            <div className="exercises-element__wrapper">
              <h1 className="exercises-element__title">{item.h1}</h1>
              <div className="exercises-element__description">{item.description}</div>
              <div className="exercises-element__mistakes">{item.mistakes}</div>
            </div>
          </div>
        )
      }):<></>}

    </Single_Exercises>
  )
}



export default Exercises_Single_Post;