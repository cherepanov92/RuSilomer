import Calculator from '../../src/components/Templates/Calculator/Calculator'
import {exercisesData} from '../../src/utils/exercisesData'

const Calculator_Page = () => {
  const data = {
    seo: {
      title: 'Русский Силомер',
      description: 'Калькулятор упражнений.',
      url: 'https://rusilomer.ru/',
    },
    content: {
      exercises: exercisesData.message.event_type.exercise_list,
    },
    image: {
      src: 'kontakts.jpeg',
    },
  }

  return <Calculator data={data} />
}

export default Calculator_Page
