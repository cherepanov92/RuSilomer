import Main from '../src/components/Templates/Main';

const Home = () => {
  const seoProps = {
    title: 'Русский Силомер',
    description: 'Описание сайта.',
    url: 'https://rusilomer.ru/',
  }

  return (
    <Main seoProps={seoProps}>
      <div>Here will be main content</div>
    </Main>
  )
}

export default Home;