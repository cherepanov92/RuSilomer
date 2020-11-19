import Post from '../../src/components/Templates/Post/Post'
import {connect} from 'react-redux'
import Exercises from '../../src/components/Exercises/Exercises'
import cl from 'classnames'

const About_Page = ({social, navShow}) => {
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
    },
    image: {
      src: '/images/main_first.jpeg',
    },
  }

  return <Post data={data}>dadds</Post>
}

// export async function getServerSideProps() {
//   const host = process.env.HOST
//   const version = process.env.VERSION

//   try {
//     const res = await fetch(host + '/api/event/type/' + version + '/get?id=1')
//     const exercises = await res.json()
//     return {
//       props: {
//         exercises,
//       },
//     }
//   } catch (err) {
//     return {
//       props: {},
//     }
//   }
// }

const mapStateToProps = (state) => ({
  navShow: state.nav.show,
})

export default connect(mapStateToProps, null)(About_Page)
