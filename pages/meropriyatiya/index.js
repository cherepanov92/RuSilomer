import Post from '../../src/components/Templates/Post/Post'
import {connect} from 'react-redux'
import Meropriyatiya_tabs from '../../src/components/Meropriyatiya_tabs/Meropriyatiya_tabs'
import GeoLocation from '../../src/utils/GeoLocations'
import {setCityResolve, setCityReject, setCityDefault} from '../../src/actions/setCity'

const Meropriyatiya_Page = ({social, navShow, events}) => {
  console.log(events)

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
      tag: '#Екатеринбург',
      event_city_list: events.event_city_list,
      events: [
        {
          city: {
            name: 'Тюмень',
            full_name: 'Тюмень (Тюменская область)',
            name_en: "Tyumen'",
            region_name: "Tyumenskaya oblast'",
          },

          items: [
            {
              eventTitle: 'Областное соревнование Тюмень',
              eventLink: '/meropriyatiya/Tyumen/sorevnovanie',
              eventImage: {
                src: '/images/main_first.jpeg',
                alt: 'Областное соревнование Тюмень',
              },
              eventDate: '29/12/2020',
            },
            {
              eventTitle: 'Областное соревнование Тюмень',
              eventLink: '/meropriyatiya/Tyumen/sorevnovanie',
              eventImage: {
                src: '/images/main_first.jpeg',
                alt: 'Областное соревнование Тюмень',
              },
              eventDate: '29/06/2020',
            },
            {
              eventTitle: 'Областное соревнование Тюмень',
              eventLink: '/meropriyatiya/Tyumen/sorevnovanie',
              eventImage: {
                src: '/images/main_first.jpeg',
                alt: 'Областное соревнование Тюмень',
              },
              eventDate: '29/12/2018',
            },
            {
              eventTitle: 'Областное соревнование Тюмень',
              eventLink: '/meropriyatiya/Tyumen/sorevnovanie',
              eventImage: {
                src: '/images/main_first.jpeg',
                alt: 'Областное соревнование Тюмень',
              },
              eventDate: '29/12/2018',
            },
            {
              eventTitle: 'Областное соревнование Тюмень',
              eventLink: '/meropriyatiya/Tyumen/sorevnovanie',
              eventImage: {
                src: '/images/main_first.jpeg',
                alt: 'Областное соревнование Тюмень',
              },
              eventDate: '29/12/2018',
            },
            {
              eventTitle: 'Областное соревнование Тюмень',
              eventLink: '/meropriyatiya/Tyumen/sorevnovanie',
              eventImage: {
                src: '/images/main_first.jpeg',
                alt: 'Областное соревнование Тюмень',
              },
              eventDate: '29/12/2018',
            },
          ],
        },
        {
          city: {
            name: 'Екатеринбург',
            full_name: 'Екатеринбург (Свердловская область)',
            name_en: 'Yekaterinburg',
            region_name: "Sverdlovskaya oblast'",
          },

          items: [
            {
              eventTitle: '',
              eventLink: '/meropriyatiya/Tyumen/sorevnovanie',
              eventImage: {
                src: '/images/main_first.jpeg',
                alt: 'Областное соревнование Тюмень',
              },
              eventDate: '29/12/2018',
            },
            {
              eventTitle: 'Областное соревнование Екатеринбург',
              eventLink: '/meropriyatiya/Tyumen/sorevnovanie',
              eventImage: {
                src: '/images/main_sec.jpeg',
                alt: 'Областное соревнование Екатеринбург',
              },
              eventDate: '29/12/2018',
            },
            {
              eventTitle: 'Областное соревнование Екатеринбург',
              eventLink: '/meropriyatiya/Tyumen/sorevnovanie',
              eventImage: {
                src: '/images/main_sec.jpeg',
                alt: 'Областное соревнование Екатеринбург',
              },
              eventDate: '',
            },
            {
              eventTitle: 'Областное соревнование Екатеринбург',
              eventLink: '/meropriyatiya/Tyumen/sorevnovanie',
              eventImage: '',
              eventDate: '29/12/2018',
            },
          ],
        },
        {
          city: {
            name: 'Челябинск',
            full_name: 'Челябинск (Челябинская область)',
            name_en: 'Chelyabinsk',
            region_name: "Chelyabinskaya oblast'",
          },

          items: [
            {
              eventTitle: 'Областное соревнование Тюмень',
              eventLink: '/meropriyatiya/Tyumen/sorevnovanie',
              eventImage: {
                src: '/images/main_first.jpeg',
                alt: 'Областное соревнование Тюмень',
              },
              eventDate: '29/12/2018',
            },
            {
              eventTitle: 'Областное соревнование Тюмень',
              eventLink: '/meropriyatiya/Tyumen/sorevnovanie',
              eventImage: {
                src: '/images/main_first.jpeg',
                alt: 'Областное соревнование Тюмень',
              },
              eventDate: '29/12/2018',
            },
            {
              eventTitle: 'Областное соревнование Тюмень',
              eventLink: '/meropriyatiya/Tyumen/sorevnovanie',
              eventImage: {
                src: '/images/main_first.jpeg',
                alt: 'Областное соревнование Тюмень',
              },
              eventDate: '29/12/2018',
            },
            {
              eventTitle: 'Областное соревнование Тюмень',
              eventLink: '/meropriyatiya/Tyumen/sorevnovanie',
              eventImage: {
                src: '/images/main_first.jpeg',
                alt: 'Областное соревнование Тюмень',
              },
              eventDate: '29/12/2018',
            },
            {
              eventTitle: 'Областное соревнование Тюмень',
              eventLink: '/meropriyatiya/Tyumen/sorevnovanie',
              eventImage: {
                src: '/images/main_first.jpeg',
                alt: 'Областное соревнование Тюмень',
              },
              eventDate: '29/12/2018',
            },
            {
              eventTitle: 'Областное соревнование Тюмень',
              eventLink: '/meropriyatiya/Tyumen/sorevnovanie',
              eventImage: {
                src: '/images/main_first.jpeg',
                alt: 'Областное соревнование Тюмень',
              },
              eventDate: '29/12/2018',
            },
          ],
        },
        {
          city: {
            name: 'Новосибирск',
            full_name: 'Новосибирск (Новосибирская область)',
            name_en: 'Novosibirsk',
            region_name: "Novosibirskaya oblast'",
          },

          items: [
            {
              eventTitle: '',
              eventLink: '/meropriyatiya/Tyumen/sorevnovanie',
              eventImage: {
                src: '/images/main_first.jpeg',
                alt: 'Областное соревнование Тюмень',
              },
              eventDate: '29/12/2018',
            },
            {
              eventTitle: 'Областное соревнование Екатеринбург',
              eventLink: '/meropriyatiya/Tyumen/sorevnovanie',
              eventImage: {
                src: '/images/main_sec.jpeg',
                alt: 'Областное соревнование Екатеринбург',
              },
              eventDate: '29/12/2018',
            },
            {
              eventTitle: 'Областное соревнование Екатеринбург',
              eventLink: '/meropriyatiya/Tyumen/sorevnovanie',
              eventImage: {
                src: '/images/main_sec.jpeg',
                alt: 'Областное соревнование Екатеринбург',
              },
              eventDate: '',
            },
            {
              eventTitle: 'Областное соревнование Екатеринбург',
              eventLink: '/meropriyatiya/Tyumen/sorevnovanie',
              eventImage: '',
              eventDate: '29/12/2018',
            },
          ],
        },
      ],
    },
    image: {
      src: '/images/main_third.jpeg',
    },
    showPostPageTitle: true,
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

  const cityDictionary = await GeoLocation(req.connection.remoteAddress, req.headers.cookie)

  if (!cityDictionary['error']) {
    setCityResolve(cityDictionary['cityData'])
  } else {
    setCityReject()
  }

  try {
    const resSoc = await fetch(host + '/api/' + version + '/social/?format=json')
    const social = await resSoc.json()
    const resEvents = await fetch(host + '/api/event/city/get')
    const events = await resEvents.json()
    return {
      props: {
        social,
        events,
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
})

export default connect(mapStateToProps, null)(Meropriyatiya_Page)
