import Post from '../../src/components/Templates/Post/Post';
import {connect} from 'react-redux';

const Uprazhneniya_Page = ({social, navShow}) => {

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
    },
    image: {
      src: '/images/main_first.jpeg',
    }

  }

  return (
    <Post data={data}>
      <div>Here will be Post values</div>
    </Post>
  )
}

const mapStateToProps = state => ({
  navShow: state.nav.show,
});

export default connect(mapStateToProps, null)(Uprazhneniya_Page);