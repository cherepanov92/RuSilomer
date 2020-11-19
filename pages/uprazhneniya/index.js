import Post from '../../src/components/Templates/Post/Post'
import {connect} from 'react-redux'
import Exercises from '../../src/components/Exercises/Exercises'
import cl from 'classnames'

const Uprazhneniya_Page = ({social, navShow, exercises}) => {
  const ex = exercises.message.event_type.exercise_list

  const spreadGroups = (ex, difficulty) => {
    const elements = []

    ex.map((item) => {
      if (item.difficulty === difficulty) {
        elements.push(item)
      }
    })

    return elements
  }

  const data = {
    seo: {
      title: 'Упражнения',
      description: 'Описание сайта.',
      url: 'https://rusilomer.ru/',
    },
    social: social || [],
    navShow: navShow,
    content: {
      h1: 'Упражнения',
      h2: 'три группы силы',
      description_p:
        'Русский силомер включает в себя 14 упражнений различного характера для выполения на перекладине',
      description:
        'Русский силомер включает в себя 14 упражнений различного характера для выполения на перекладине',
      exercises: [
        {
          group: 'для начинающих',
          difficulty: 'easy',
          elements: spreadGroups(ex, 'easy'),
        },
        {
          group: 'для сильных',
          difficulty: 'normal',
          elements: spreadGroups(ex, 'normal'),
        },
        {
          group: 'для сильнейших',
          difficulty: 'hard',
          elements: spreadGroups(ex, 'hard'),
        },
      ],
    },
    image: {
      src: '/images/main_first.jpeg',
    },
  }

  return (
    <Post data={data}>
      <div className={cl('exercises-wrap')}>
        <Exercises exercises={data.content.exercises} />
      </div>
    </Post>
  )
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

const mapStateToProps = (state) => ({
  navShow: state.nav.show,
})

export default connect(mapStateToProps, null)(Uprazhneniya_Page)
