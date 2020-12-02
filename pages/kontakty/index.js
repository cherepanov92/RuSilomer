import Post from '../../src/components/Templates/Post/Post'
import {connect} from 'react-redux'
import Contacts from '../../src/components/Contacts/Contacts'
import GeoLocation from '../../src/utils/GeoLocations'
import {setCityResolve, setCityReject, setCityDefault} from '../../src/actions/setCity'

const Kontakty_Page = ({social, navShow, fetchedData}) => {
  const data = {
    seo: fetchedData.seo || {
      title: 'Контакты',
      description: 'Описание сайта.',
      url: 'https://rusilomer.ru/kontakty',
    },
    social: social || [],
    navShow: navShow,
    content: fetchedData.content || {
      h1: 'Контакты',
      description:
        'Свяжитесь с нами, задайте нам интересующие вопросы и мы поможем вам в организации или проведении соревнований',
    },
    image: fetchedData.image || {
      src: '/images/kontakts.jpeg',
    },
  }

  return (
    <Post data={data}>
      <Contacts contacts={data.content.contacts} />
    </Post>
  )
}

const mapStateToProps = (state) => ({
  navShow: state.nav.show,
})

export async function getServerSideProps({req}) {
  const fetchedData = {
    seo: {
      title: 'Контакты',
      description: 'Описание сайта.',
      url: 'https://rusilomer.ru/kontakty',
    },
    content: {
      h1: 'Контакты',
      description:
        'Свяжитесь с нами, задайте нам интересующие вопросы и мы поможем вам в организации или проведении соревнований',
      contacts: [
        {
          cityDictionary: {
            city: 'Екатеринбург',
            city_slug: 'Yekaterinburg',
            region_slug: "Sverdlovskaya oblast'",
          },
          organisations: [
            {
              pk: 12,
              name: 'Гимназия 99',
              addres: 'Проспект Лениня, 33',
              phone: ['+7 952 134 45 20', '+7 912 228 84 88'],
              email: 'main@rusilomer.ru',
              socials: [
                {socialName: 'YT', socialLink: 'youtube.com/russil'},
                {socialName: 'IN', socialLink: 'instagram.com/rusilomer'},
                {socialName: 'VK', socialLink: 'vk.com/russil'},
              ],
              // map: '<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Af8e3dafdaceae4bbee8effe258c1c3ec6f6be833a914d23fda63ca9d73314cf5&amp;width=100%25&amp;height=350&amp;lang=ru_RU&amp;scroll=false"></script>'
              map:
                '<a href="https://yandex.ru/maps/?um=constructor%3Af8e3dafdaceae4bbee8effe258c1c3ec6f6be833a914d23fda63ca9d73314cf5&amp;source=constructorStatic" target="_blank"><img src="https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3Af8e3dafdaceae4bbee8effe258c1c3ec6f6be833a914d23fda63ca9d73314cf5&amp;width=600&amp;height=280&amp;lang=ru_RU" alt="" style="border: 0;" /></a>',
            },
          ],
        },
      ],
    },
    image: {
      src: '/images/kontakts.jpeg',
    },
  }

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
    return {
      props: {
        fetchedData,
        social,
        ip: req.connection.remoteAddress,
      },
    }
  } catch (err) {
    return {
      props: {},
    }
  }
}

export default connect(mapStateToProps, null)(Kontakty_Page)
