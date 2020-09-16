import Main from '../src/components/Templates/Main';

const Home = ({social}) => {

  const data = {
    "seo": {
      title: 'Русский Силомер',
      description: 'Описание сайта.',
      url: 'https://rusilomer.ru/',
    },
    "social": social,

  }

  return (
    <Main data={data}>
      <div>Here will be main content</div>
    </Main>
  )
}

export async function getStaticProps() {
  const host = process.env.HOST
  const version = process.env.VERSION
  const res = await fetch(host + '/api/'+ version + '/social/?format=json');
  const social = await res.json();

  return {
    props: {
      social,
    },
  }
}

export default Home;