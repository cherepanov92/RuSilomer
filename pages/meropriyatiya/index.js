import Post from '../../src/components/Templates/Post/Post'
import {connect} from 'react-redux'
import Meropriyatiya_tabs from '../../src/components/Meropriyatiya_tabs/Meropriyatiya_tabs'

const Meropriyatiya_Page = ({social, navShow}) => {
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
  }

  return (
    <Post data={data}>
      <Meropriyatiya_tabs events={data.content.events} />
    </Post>
  )
}

const mapStateToProps = (state) => ({
  navShow: state.nav.show,
})

export default connect(mapStateToProps, null)(Meropriyatiya_Page)
