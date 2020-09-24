import Calculator from '../../src/components/Templates/Calculator/Calculator';

const Calculator_Page = ({social}) => {
  const data = {
    "seo": {
      title: 'Русский Силомер',
      description: 'Описание сайта.',
      url: 'https://rusilomer.ru/',
    },
    "social": social || [],

  }

  return (
    <Calculator data={data}>
      <div>Here will be calculator contain</div>
    </Calculator>
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
export default Calculator_Page;