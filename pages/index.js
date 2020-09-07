import Main from '../components/Templates/Main';

const Home = () => {
  const seoProps = {
    title: 'Русский Силомер',
    description: 'Описание сайта.',
    url: 'https://rusilomer.ru/',
  }


  return (
    <Main seoProps={seoProps}>

      <h1 className="h1">d</h1>

    </Main>
  )
}

export default Home;