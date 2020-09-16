import Calculator from '../../src/components/Templates/Calculator';

const Calculator_Page = () => {
  const seoProps = {
    title: 'Русский Силомер',
    description: 'Описание сайта.',
    url: 'https://rusilomer.ru/',
  }

  return (
    <Calculator seoProps={seoProps}>
      <div>Here will calculator content</div>
    </Calculator>
  )
}

export default Calculator_Page;