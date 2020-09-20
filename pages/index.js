import Main from '../src/components/Templates/Main';
import {connect} from 'react-redux';

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
      h1: 'Объединимся',
      h1Part: 'что бы победить!',
    }
    

  }

  return (
    <Main data={data}>
      <div className="main-title">
        <h1 className="main-title__h1">
          {data.content.h1},
          <span className="main-title__second-part">
            {data.content.h1Part}
          </span>
        </h1>
        <span className="main-title__disclaimer">Русский Силомер</span>
      </div>
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