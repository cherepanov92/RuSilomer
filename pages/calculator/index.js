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
          pk:1,
          title:'подъем коленей в висе',
          image:{
            src: '/images/calc_1.png',
            alt: 'подъем коленей в висе',
          },
          points:'3',
          gender: 'both'
        },
        {
          pk:2,
          title:'подтягивание с рывком',
          image:{
            src: '/images/calc_2.png',
            alt: 'подтягивание с рывком',
          },
          points:'3',
          gender: 'both'
        },
        {
          pk:3,
          title:'перехват',
          image:{
            src: '/images/calc_3.png',
            alt: 'перехват',
          },
          points:'3',
          gender: 'man'
        },
        {
          pk:4,
          title:'подъем прямых ног к перекладине',
          image:{
            src: '/images/calc_4.png',
            alt: 'подъем прямых ног к перекладине',
          },
          points:'5',
          gender: 'man'
        },
        {
          pk:5,
          title:'подъем с разгибом',
          image:{
            src: '/images/calc_5.png',
            alt: 'подъем с разгибом',
          },
          points:'5',
          gender: 'man'
        },
        {
          pk:6,
          title:'армейское подтягивание',
          image:{
            src: '/images/calc_6.png',
            alt: 'армейское подтягивание',
          },
          points:'5',
          gender: 'man'
        },
        {
          pk:7,
          title:'подтягивание с уголком',
          image:{
            src: '/images/calc_7.png',
            alt: 'подтягивание с уголком',
          },
          points:'7',
          gender: 'both'
        },
        {
          pk:8,
          title:'подтягивание за голову',
          image:{
            src: '/images/calc_8.png',
            alt: 'подтягивание за голову',
          },
          points:'7',
          gender: 'both'
        },
        {
          pk:9,
          title:'подъем переворотом',
          image:{
            src: '/images/calc_9.png',
            alt: 'подъем переворотом',
          },
          points:'10',
          gender: 'both'
        },
        {
          pk:10,
          title:'выход на одну',
          image:{
            src: '/images/calc_10.png',
            alt: 'выход на одну',
          },
          points:'10',
          gender: 'both'
        },
        {
          pk:11,
          title:'выход на две',
          image:{
            src: '/images/calc_11.png',
            alt: 'выход на две',
          },
          points:'10',
          gender: 'both'
        },
        {
          pk:12,
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