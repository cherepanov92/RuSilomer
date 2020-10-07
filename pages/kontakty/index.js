import Post from '../../src/components/Templates/Post/Post';
import {connect} from 'react-redux';
import Contacts from '../../src/components/Contacts/Contacts';

const Kontakty_Page = ({social, navShow}) => {

  const data = {
    'seo': {
      title: 'Контакты',
      description: 'Описание сайта.',
      url: 'https://rusilomer.ru/',
    },
    'social': social || [],
    'navShow': navShow,
    'content': {
      h1: 'Контакты',
      description: 'Свяжитесь с нами, задайте нам интересующие вопросы и мы поможем вам в организации или проведении соревнований',
      contacts:[{
        cityDictionary: {
          city: "Екатеринбург",
          city_slug: "Yekaterinburg",
          region_slug: "Sverdlovskaya oblast'",
        },
        organisations:[
         {
          pk: 12,
          name: 'Гимназия 99',
          addres: 'Проспект Лениня, 33',
          phone: ['+7 952 134 45 20', '+7 912 228 84 88'],
          email: 'main@rusilomer.ru',
          socials: [
            { socialName: 'YT',
              socialLink: 'youtube.com/russil'
            },
            { socialName: 'IN',
              socialLink: 'instagram.com/rusilomer'
            },
            { socialName: 'VK',
              socialLink: 'vk.com/russil'
            },
          ],
          map: '<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Af8e3dafdaceae4bbee8effe258c1c3ec6f6be833a914d23fda63ca9d73314cf5&amp;width=100%25&amp;height=350&amp;lang=ru_RU&amp;scroll=false"></script>'
         },
        ]
      },
    ]
    },
    image: {
      src: '/images/kontakts.jpeg',
    }

  }

  return (
    <Post data={data}>
      <Contacts contacts={data.content.contacts}/>
    </Post>
  )
}

const mapStateToProps = state => ({
  navShow: state.nav.show,
});

export default connect(mapStateToProps, null)(Kontakty_Page);