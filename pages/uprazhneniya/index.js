import Post from '../../src/components/Templates/Post/Post'
import {connect} from 'react-redux'
import Exercises from '../../src/components/Exercises/Exercises'
import cl from 'classnames'
import GeoLocation from '../../src/utils/GeoLocations'
import {setCityResolve, setCityReject, setCityDefault} from '../../src/actions/setCity'

const Uprazhneniya_Page = ({social, navShow, exercises}) => {
  const ex = exercises && exercises.message.event_type.exercise_list

  const spreadGroups = (ex, difficulty) => {
    const elements = []

    ex &&
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
      description:
        'Русский силомер включает в себя 11 упражнений различного характера для выполения на перекладине',
      url: 'https://rusilomer.ru/uprazhneniya',
    },
    social: social || [],
    navShow: navShow,
    content: {
      h1: 'Упражнения',
      // h2: 'три группы силы',
      // description_p:
      //   'Русский силомер включает в себя 11 упражнений различного характера для выполения на перекладине',
      description:
        'Русский силомер включает в себя 11 упражнений различного характера для выполения на перекладине',
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

export async function getServerSideProps({req}) {
  const host = process.env.HOST
  const version = process.env.VERSION

  // const cityDictionary = await GeoLocation(req.connection.remoteAddress, req.headers.cookie)

  // if (!cityDictionary['error']) {
  //   setCityResolve(cityDictionary['cityData'])
  // } else {
  //   setCityReject()
  // }

  try {
    const resEx = await fetch(host + '/api/event/type/' + version + '/get?id=1')
    const exercises = await resEx.json()
    const resSoc = await fetch(host + '/api/' + version + '/social/?format=json')
    const social = await resSoc.json()
    return {
      props: {
        exercises,
        social,
        // ip: req.connection.remoteAddress,
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
