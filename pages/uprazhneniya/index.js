import Post from '../../src/components/Templates/Post/Post'
import {connect} from 'react-redux'
import Exercises from '../../src/components/Exercises/Exercises'
import cl from 'classnames'
import {socialData} from '../../src/utils/socialData'
import {exercisesData} from '../../src/utils/exercisesData'

const Uprazhneniya_Page = ({navShow}) => {
  const ex = exercisesData.message.event_type.exercise_list

  const spreadGroups = (ex, minPoints, maxPoints) => {
    const elements = []

    ex &&
      ex.map((item) => {
        if (item.points >= minPoints && item.points <= maxPoints) {
          elements.push(item)
        }
      })

    return elements
  }

  const data = {
    seo: {
      title: 'Упражнения',
      description:
        'Русский силомер включает в себя 11 упражнений различного характера для выполения на перекладине',
      url: 'https://rusilomer.ru/uprazhneniya',
    },
    social: socialData,
    navShow: navShow,
    content: {
      h1: 'Упражнения',
      description:
        'Русский силомер включает в себя 11 упражнений различного характера для выполения на перекладине',
      exercises: [
        {
          group: 'для начинающих',
          elements: spreadGroups(ex, 1, 4),
        },
        {
          group: 'для сильных',
          elements: spreadGroups(ex, 5, 8),
        },
        {
          group: 'для сильнейших',
          elements: spreadGroups(ex, 10, 30),
        },
      ],
    },
    image: {
      src: '/images/main_first.jpeg',
    },
    showPostPageTitle: true,
  }

  return (
    <Post data={data}>
      <div className={cl('exercises-wrap')}>
        <Exercises exercises={data.content.exercises} />
      </div>
    </Post>
  )
}

const mapStateToProps = (state) => ({
  navShow: state.nav.show,
})

export default connect(mapStateToProps, null)(Uprazhneniya_Page)
