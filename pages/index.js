import Main from '../src/components/Templates/Main/Main'
import {connect} from 'react-redux'
import Images_main from '../src/components/Images_main/Images_main'
import GeoLocation from '../src/utils/GeoLocations'
import {setCityResolve, setCityReject, setCityDefault} from '../src/actions/setCity'
import {setSocial} from '../src/actions/setSocial'

const Home = ({socialResponse, navShow, city}) => {
  const data = {
    seo: {
      title: 'Русский Силомер',
      description: 'Описание сайта.',
      url: 'https://rusilomer.ru/',
    },
    social: socialResponse || [],
    navShow: navShow,
    content: {
      h1: 'Объединимся,',
      h1Part: 'что бы победить!',
      images: {
        image_one: {
          src: '/images/main_first.jpeg',
          alt: 'Девушка на турнике',
          position: 'center center',
          size: 'cover',
        },
        image_two: {
          src: '/images/main_sec.jpeg',
          alt: 'Мужик на турнике',
          position: '70% center',
          size: 'cover',
        },
        image_three: {
          src: '/images/main_third.jpeg',
          alt: 'Спортсмен на турнике',
          position: 'center center',
          size: 'cover',
        },
      },
    },
  }

  return (
    <Main data={data}>
      <Images_main cssClass="main__item" images={data.content.images}>
        <div className="main-title">
          <h1 className="main-title__h1">
            {data.content.h1}
            <span className="main-title__second-part">{data.content.h1Part}</span>
          </h1>
        </div>
      </Images_main>
    </Main>
  )
}

export async function getServerSideProps({req}) {
  const host = process.env.HOST
  const version = process.env.VERSION

  const cityDictionary = await GeoLocation(req.connection.remoteAddress, req.headers.cookie)

  if (!cityDictionary['error']) {
    setCityResolve(cityDictionary['cityData'])
  } else {
    setCityReject()
  }

  try {
    const res = await fetch(host + '/api/' + version + '/social/?format=json')
    const socialResponse = await res.json()
    return {
      props: {
        socialResponse,
        ip: req.connection.remoteAddress,
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
  city: state.city,
  social: state.social,
})

const mapDispatchToProps = {
  setCityResolve,
  setCityReject,
  setCityDefault,
  setSocial,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
