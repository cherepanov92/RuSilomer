import Post from '../../src/components/Templates/Post/Post';
import {connect} from 'react-redux';
import Exercises from '../../src/components/Exercises/Exercises';


const Uprazhneniya_Page = ({social, navShow, }) => {


  const data = {
    'seo': {
      title: 'Упражнения',
      description: 'Описание сайта.',
      url: 'https://rusilomer.ru/',
    },
    'social': social || [],
    'navShow': navShow,
    'content': {
      h1: 'Упражнения',
      description: 'Русский силомер включает в себя 14 упражнений различного характера для выполения на перекладине',
      exercises: [
        {
         group: 'для начинающих',
         elements: [
          {
          title:'подъем коленей в висе',
          link: 'uprazhneniya/#',
          number: '1',
          },
          {
            title:'перехват',
            link: 'uprazhneniya/#',
            number: '2',
          },
          {
            title:'подтягивание с рывком',
            link: 'uprazhneniya/#',
            number: '3',
          },
          {
            title:'подъем прямых ног к перекладине',
            link: 'uprazhneniya/#',
            number: '4',
          },
        ]
      },
      {
        group: 'для сильных',
        elements: [
          {
            title:'подъем с разгибом',
            link: 'uprazhneniya/#',
            number: '5',
          },
          {
            title:'армейское подтягивание',
            link: 'uprazhneniya/#',
            number: '6',
          },
          {
            title:'подтягивание с уголком / за голову',
            link: 'uprazhneniya/podtyagivanie-s-ugolkom',
            number: '7',
          },
          {
            title:'подъем переворотом',
            link: 'uprazhneniya/#',
            number: '8',
          },
        ]
      },
      {
        group: 'для сильнейших',
        elements: [
          {
            title:'выход на одну',
            link: 'uprazhneniya/#',
            number: '9',
          },
          {
            title:'выход на две',
            link: 'uprazhneniya/#',
            number: '10',
          },
          {
            title:'подтягивание на одной руке',
            link: 'uprazhneniya/#',
            number: '11',
          },
        ]
      }
    ]
    },
    image: {
      src: '/images/main_first.jpeg',
    }

  }

  return (
    <Post data={data}>
      <Exercises exercises={data.content.exercises} />
    </Post>
  )
}

const mapStateToProps = state => ({
  navShow: state.nav.show,
});

export default connect(mapStateToProps, null)(Uprazhneniya_Page);