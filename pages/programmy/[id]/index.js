import Post from '../../../src/components/Templates/Post/Post'
import {connect} from 'react-redux'
import GeoLocation from '../../../src/utils/GeoLocations'
import {setCityResolve, setCityReject, setCityDefault} from '../../../src/actions/setCity'

const Programmy_Individual_Page = ({social, navShow}) => {
  const data = {
    seo: {
      title: 'Программы',
      description: 'Описание сайта.',
      url: 'https://rusilomer.ru/',
    },
    social: social || [],
    navShow: navShow,
    content: {
      h1: 'Программа упражения',
      h2: 'Скоро мы добавим программы упражнений',
      description_p:
        'Русский силомер включает в себя 14 упражнений различного характера для выполения на перекладине',
      description:
        'Русский силомер включает в себя 14 упражнений различного характера для выполения на перекладине',
      programs: [],
    },
    image: {
      src: '/images/programmy.jpeg',
    },
    showPostPageTitle: true,
  }

  return (
    <Post data={data}>
      <div style={{minHeight: '200px'}}></div>
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
    const resSoc = await fetch(host + '/api/' + version + '/social/?format=json')
    const social = await resSoc.json()
    return {
      props: {
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

export default connect(mapStateToProps, null)(Programmy_Individual_Page)
