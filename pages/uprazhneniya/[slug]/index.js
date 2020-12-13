import Single_Exercises from '../../../src/components/Templates/Single_Exercises/Single_Exercises'
import AttentionIcon from '../../../src/components/Templates/Single_Exercises/Icons/AttentionIcon'
import {useRouter} from 'next/router'
import getWordForPoints from '../../../src/utils/WordForPoints'

const ExerciseView = ({item}) => {
  return (
    <div className="exercises-element">
      <picture className="exercises-element__picture">
        <img className="exercises-element__image" src={item.image} alt={item.name} />
      </picture>
      <div className="exercises-element__points">
        <span className="exercises-element__v">{item.points}</span>
        <span className="exercises-element__b">{getWordForPoints(item.points)}</span>
      </div>
      <div className="exercises-element__wrapper">
        <h1 className="exercises-element__title">{item.name}</h1>
        <div className="exercises-element__description">{item.description}</div>
        <div className="exercises-element__mistakes">
          <AttentionIcon cssClass="exercises-element__icon" />
          <span className="exercises-element__mistakes-text">{item.note}</span>
        </div>
      </div>
    </div>
  )
}

const Exercises_Single_Post = ({exercises}) => {
  const router = useRouter()
  const currentExId = router.asPath.split('/')[2]
  const currentEx = exercises.message.event_type.exercise_list[currentExId - 1]

  const sameEx = []
  currentEx &&
    exercises.message.event_type.exercise_list.map((item) => {
      if (item.points === currentEx.points && item.number !== currentEx.number) {
        sameEx.push(item)
      }
    })

  const data = {
    seo: {
      title: (currentEx && currentEx.name) || 'Упражнения',
      description: (currentEx && currentEx.description) || 'Упражнения',
      url: `https://rusilomer.ru${router.asPath}`,
    },
    image: {
      src: '/images/exercise_name.png',
    },
  }

  return (
    <Single_Exercises data={data}>
      {currentEx && (
        <>
          <ExerciseView item={currentEx} />
          {sameEx.length > 0 && (
            <>
              <h2 className="exercises-title">Похожие упражения (одинаковое число баллов)</h2>
              {sameEx.map((el) => {
                return <ExerciseView key={el.number} item={el} />
              })}
            </>
          )}
        </>
      )}
    </Single_Exercises>
  )
}

export async function getServerSideProps({req}) {
  const host = process.env.HOST
  const version = process.env.VERSION

  try {
    const resEx = await fetch(host + '/api/event/type/' + version + '/get?id=1')
    const exercises = await resEx.json()
    return {
      props: {
        exercises,
      },
    }
  } catch (err) {
    return {
      props: {},
    }
  }
}

export default Exercises_Single_Post
