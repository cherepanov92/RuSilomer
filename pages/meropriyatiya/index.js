import Post from '../../src/components/Templates/Post/Post'
import {connect} from 'react-redux'
import Meropriyatiya_tabs from '../../src/components/Meropriyatiya_tabs/Meropriyatiya_tabs'
import GeoLocation from '../../src/utils/GeoLocations'
import {setCityResolve, setCityReject, setCityDefault} from '../../src/actions/setCity'

const Meropriyatiya_Page = ({navShow, social, events, regions}) => {
  const data = {
    seo: {
      title: 'Мероприятия',
      description: 'Описание сайта.',
      url: 'https://rusilomer.ru/',
    },
    social: social || [],
    navShow: navShow,
    content: {
      h1: 'Мероприятия',
      description:
        'Мы регулярно проводим соревнования и мероприятия по поддержке, обучению и помощи в необходимом для участников',
      // tag: '#Екатеринбург',
      event_city_list: regions.event_city_list || [],
      events: events || [],
    },
    image: {
      src: '/images/main_third.jpeg',
    },
    showPostPageTitle: false,
  }

  return (
    <Post data={data}>
      <Meropriyatiya_tabs
        events={data.content.events}
        event_city_list={data.content.event_city_list}
      />
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
    const resRegion = await fetch(host + '/api/event/city/get')
    const regions = await resRegion.json()
    const city = regions.event_city_list[0].city_slug
    const region = regions.event_city_list[0].region_slug
    const resEvents = await fetch(host + `/api/event/city/get?city=${city}&region=${region}`)
    const events = await resEvents.json()
    const eventsList = [{city: city, events: events}]
    return {
      props: {
        social,
        events: eventsList,
        regions,
        // ip: req.connection.remoteAddress,
      },
    }
  } catch (err) {
    console.log('err ', err)
    return {
      props: {},
    }
  }
}

const mapStateToProps = (state) => ({
  navShow: state.nav.show,
})

export default connect(mapStateToProps, null)(Meropriyatiya_Page)
