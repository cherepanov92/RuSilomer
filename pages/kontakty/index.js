import Post from '../../src/components/Templates/Post/Post'
import {connect} from 'react-redux'
import Contacts from '../../src/components/Contacts/Contacts'
import {socialData} from '../../src/utils/socialData'

const Kontakty_Page = ({navShow}) => {
  const fetchedData = {
    seo: {
      title: 'Контакты',
      description: 'Рксский Силомер.',
      url: 'https://rusilomer.ru/kontakty',
    },
    content: {
      h1: 'Контакты',
      description:
        'Свяжитесь с нами, задайте нам интересующие вопросы и мы поможем вам в организации или проведении соревнований',
      h2: 'мы всегда на связи',
      description_p:
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
              phone: ['+7 912 228 84 88'],
              email: 'mail@rusilomer.ru',
              socials: [
                {socialName: 'YT', socialLinkName: 'www.youtube.com/rusilomer', socialLink: 'https://www.youtube.com/channel/UC7-mZAaY8DWf1SUD1lFCjVA/featured'},
                {socialName: 'VK', socialLinkName: 'vk.com/rusilomer', socialLink: 'https://vk.com/rusilomer'},
              ],
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
    showPostPageTitle: true,
  }

  const data = {
    seo: fetchedData.seo,
    social: socialData,
    navShow: navShow,
    content: fetchedData.content,
    image: fetchedData.image,
    showPostPageTitle: true,
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

export default connect(mapStateToProps, null)(Kontakty_Page)
