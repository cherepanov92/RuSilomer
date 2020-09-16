import Calculator from '../../src/components/Templates/Calculator';

const Calculator_Page = ({social}) => {
  const data = {
    "seo": {
      title: 'Русский Силомер',
      description: 'Описание сайта.',
      url: 'https://rusilomer.ru/',
    },
    "social": social,

  }

  return (
    <Calculator data={data}>
      <div>Here will be main content</div>
    </Calculator>
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

export default Calculator_Page;