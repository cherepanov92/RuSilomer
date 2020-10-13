import Calculator from '../../src/components/Templates/Calculator/Calculator';

const Calculator_Page = () => {
  const data = {
    "seo": {
      title: 'Русский Силомер',
      description: 'Описание сайта.',
      url: 'https://rusilomer.ru/',
    },
    "content": {
      exercises:[
        {
          title:'подъем коленей в висе',
          image:{
            src: '/images/calc_1.png',
            alt: 'подъем коленей в висе',
          },
          points:'1',
          gender: 'both'
        },
        {
          title:'подтягивание с рывком',
          image:{
            src: '/images/calc_2.png',
            alt: 'подтягивание с рывком',
          },
          points:'2',
          gender: 'both'
        },
        {
          title:'перехват',
          image:{
            src: '/images/calc_3.png',
            alt: 'перехват',
          },
          points:'3',
          gender: 'man'
        },
        {
          title:'подъем прямых ног к перекладине',
          image:{
            src: '/images/calc_4.png',
            alt: 'подъем прямых ног к перекладине',
          },
          points:'4',
          gender: 'woman'
        },
        {
          title:'подъем с разгибом',
          image:{
            src: '/images/calc_5.png',
            alt: 'подъем с разгибом',
          },
          points:'5',
          gender: 'woman'
        },
        {
          title:'армейское подтягивание',
          image:{
            src: '/images/calc_6.png',
            alt: 'армейское подтягивание',
          },
          points:'6',
          gender: 'man'
        },
        {
          title:'подтягивание с уголком',
          image:{
            src: '/images/calc_7.png',
            alt: 'подтягивание с уголком',
          },
          points:'7',
          gender: 'both'
        },
        {
          title:'подтягивание за голову',
          image:{
            src: '/images/calc_8.png',
            alt: 'подтягивание за голову',
          },
          points:'8',
          gender: 'both'
        },
        {
          title:'подъем переворотом',
          image:{
            src: '/images/calc_9.png',
            alt: 'подъем переворотом',
          },
          points:'9',
          gender: 'both'
        },
        {
          title:'выход на одну',
          image:{
            src: '/images/calc_10.png',
            alt: 'выход на одну',
          },
          points:'10',
          gender: 'both'
        },
        {
          title:'выход на две',
          image:{
            src: '/images/calc_11.png',
            alt: 'выход на две',
          },
          points:'11',
          gender: 'both'
        },
        {
          title:'подтягивание на одной руке',
          image:{
            src: '/images/calc_12.png',
            alt: 'подтягивание на одной руке',
          },
          points:'12',
          gender: 'both'
        },

      ]
    },
    image: {
      src: '/images/kontakts.jpeg',
    }
  }

  return (
    <Calculator data={data} />
  )
}

export default Calculator_Page;