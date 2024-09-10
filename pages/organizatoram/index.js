import Post from '../../src/components/Templates/Post/Post'
import {connect} from 'react-redux'
import GeoLocation from '../../src/utils/GeoLocations'
import {setCityResolve, setCityReject, setCityDefault} from '../../src/actions/setCity'
import Documents from '../../src/components/Documents'

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
      h1: 'Организаторам',
      h2: 'Скоро мы добавим программы упражнений',
      description_p:
        'Русский силомер включает в себя 14 упражнений различного характера для выполения на перекладине',
      description:
        'Положение о соревнованиях, протоколы соревнований, система РС в таблице и другие полезные документы и материалы',
      documents: [
        {
          name: 'Стандарт проведения турнира «Русский силомер»',
          link: '/documents/STANDART_PROVEDENIYA_TURNIRA_RUSSKIY_SILOMER.pdf',
          image: '/images/documents__icon.png',
          event: 'download',
        },
        {
          name: 'Положение о соревнованиях "Сила РДШ" 2018-2019',
          link: '/documents/Polozenie SilaRDSh 2018-19.pdf',
          image: '/images/documents__icon.png',
          event: 'download',
        },
        {
          name: 'Презентация Русского силомера',
          link: '/documents/Prezentatsia_RS (11) 2.pdf',
          image: '/images/documents__icon.png',
          event: 'download',
        },
        {
          name: 'Система РС в таблице',
          link: '/documents/Sistema_RS_v_tablitse.pdf',
          image: '/images/documents__icon.png',
          event: 'download',
        },
        {
          name: '11 упражнений Русского силомера',
          link: 'https://www.youtube.com/watch?v=ojtYDZE3jR8&amp;t=17s',
          image: '/images/documents__icon--youtube.png',
          event: 'watch',
        },
        {
          name: 'Итоговый протокол',
          link: '/documents/Itogovii_protokol.pdf',
          image: '/images/documents__icon.png',
          event: 'download',
        },
        {
          name: 'Правила регистрации школы на сайте рдш.рф',
          link: '/documents/Pravila_registratsii_shkoly_na_sayte_rdsh.pdf',
          image: '/images/documents__icon.png',
          event: 'download',
        },
        {
          name: 'Протокол соревнований',
          link: '/documents/Tablitsa_podscheta_ballov_v_RS.pdf',
          image: '/images/documents__icon.png',
          event: 'download',
        },
        {
          name:
            'Как организовать соревнования в школе (интервью с основателем русского силомера Пыжьяновым И.В.)',
          link: 'https://www.youtube.com/watch?v=qoEGUx0SgSk',
          image: '/images/documents__icon--youtube.png',
          event: 'watch',
        },
        {
          name: 'Пособие для волонтеров',
          link: 'https://www.youtube.com/watch?v=zDWOBMK1qcU&amp;t=2s',
          image: '/images/documents__icon--youtube.png',
          event: 'watch',
        },
        {
          name: 'Вебинар Русского силомера 16.11.2017',
          link: 'https://youtu.be/tiaJxbhmukU',
          image: '/images/documents__icon--youtube.png',
          event: 'watch',
        },
      ],
    },
    image: {
      src: '/images/programmy.jpeg',
    },
    showPostPageTitle: false,
  }

  return (
    <Post data={data}>
      <Documents documents={data.content.documents} />
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
