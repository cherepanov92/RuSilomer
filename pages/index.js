import Main from '../src/components/Templates/Main';
import {connect} from 'react-redux';

const Home = ({social, navShow}) => {

  const data = {
    "seo": {
      title: 'Русский Силомер',
      description: 'Описание сайта.',
      url: 'https://rusilomer.ru/',
    },
    "social": social || [],
    'navShow': navShow,

  }

  return (
    <Main data={data}>
      <div>Here will be main content</div>
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