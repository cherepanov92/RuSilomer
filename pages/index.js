import Main from '../src/components/Templates/Main';
import {connect} from 'react-redux';
import Images_main from '../src/components/Images_main/Images_main';

const Home = ({social, navShow}) => {

  const data = {
    'seo': {
      title: 'Русский Силомер',
      description: 'Описание сайта.',
      url: 'https://rusilomer.ru/',
    },
    'social': social || [],
    'navShow': navShow,
    'content': {
      h1: 'Объединимся,',
      h1Part: 'что бы победить!',
      images: {
        image_one: {
          src:'/images/main_first.jpeg',
          alt:'Девушка на турнике',
          position: 'center center',
          size: 'cover',
        },
        image_two: {
          src:'/images/main_sec.jpeg',
          alt:'Мужик на турнике',
          position: '70% center',
          size: 'cover',
        },
        image_three: {
          src:'/images/main_third.jpeg',
          alt:'Спортсмен на турнике',
          position: 'center center',
          size: 'cover',
        },
      },
    }
    

  }

  return (
    <Main data={data}>
      <Images_main images={data.content.images}>
      <div className="main-title">
        <h1 className="main-title__h1">
          {data.content.h1}
          <span className="main-title__second-part">
            {data.content.h1Part}
          </span>
        </h1>
      </div>
      </Images_main>
    </Main>
  )
}

/*
export async function getServerSideProps() {
    const host = process.env.HOST;
    const version = process.env.VERSION;

    try {
      const res = await fetch(host + '/api/'+ version + '/social/?format=json');
      const social = await res.json();
      return {
        props: {
          social,
        },
      }
    } catch(err) {
        return {
          props: {},
        }
    }
}
*/

const mapStateToProps = state => ({
  navShow: state.nav.show,
});

export default connect(mapStateToProps, null)(Home);