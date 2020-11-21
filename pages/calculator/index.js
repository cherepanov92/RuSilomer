import {resolveMotionValue} from 'framer-motion'
import Calculator from '../../src/components/Templates/Calculator/Calculator'

const Calculator_Page = ({exercises}) => {
  const data = {
    seo: {
      title: 'Русский Силомер',
      description: 'Описание сайта.',
      url: 'https://rusilomer.ru/',
    },
    content: {
      exercises: exercises ? exercises.message.event_type.exercise_list : [],
    },
    image: {
      src: 'kontakts.jpeg',
    },
  }

  return <Calculator data={data} />
}

export async function getServerSideProps() {
  const host = process.env.HOST
  const version = process.env.VERSION

  try {
    const res = await fetch(host + '/api/event/type/' + version + '/get?id=1')
    const exercises = await res.json()
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

export default Calculator_Page
