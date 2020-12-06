import Main from '../src/components/Templates/Main/Main'
import {connect} from 'react-redux'
import Post_title from '../src/components/Post_title/Post_title'

const Page404 = ({navShow, city, social}) => {
  const data = {
    seo: {
      title: 'Русский Силомер',
      description: 'Описание сайта.',
      url: 'https://rusilomer.ru/',
    },
    social: social || [],
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
      <div className="title-404">
        <h1 className="title-404__h1">404</h1>
      </div>
      <Post_title
        h1="Страница не найдена"
        description="возможно, она была перемещена или был просто не верно указан адрес"
      />
      <span className="main-title__second-part">{data.content.h1Part}</span>
    </Main>
  )
}

const mapStateToProps = (state) => ({
  navShow: state.nav.show,
  city: state.city,
  social: state.social,
})

export default connect(mapStateToProps, null)(Page404)
