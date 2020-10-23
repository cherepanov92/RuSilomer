import Post from '../../src/components/Templates/Post/Post';
import { connect } from 'react-redux';
import Programs from '../../src/components/Programs/Programs';

const Programmy_Page = ({ social, navShow }) => {
  const data = {
    seo: {
      title: 'Программы',
      description: 'Описание сайта.',
      url: 'https://rusilomer.ru/',
    },
    social: social || [],
    navShow: navShow,
    content: {
      h1: 'Программы',
      description:
        'Русский силомер поможет вам выйти на новый урвень спортивной силы и выносливости',
      programs: [
        {
          title: 'start +',
          description:
            'программа тренировок для начинающих спортсменов и желающих улучшить свои навыки в работе с турником',
          image: {
            src: '/images/main_first.jpeg',
            alt: 'Программы start +',
          },
          link: '/programmy/start',
        },
        {
          title: 'medium +',
          description:
            'программа тренировок для начинающих спортсменов и желающих улучшить свои навыки в работе с турником',
          image: {
            src: '/images/main_sec.jpeg',
            alt: 'Программы medium +',
          },
          link: '/programmy/medium',
        },
        {
          title: 'hard +',
          description:
            'программа тренировок для начинающих спортсменов и желающих улучшить свои навыки в работе с турником',
          image: {
            src: '/images/main_third.jpeg',
            alt: 'Программы hard +',
          },
          link: '/programmy/hard',
        },
      ],
    },
    image: {
      src: '/images/programmy.jpeg',
    },
  };

  return (
    <Post data={data}>
      <Programs programs={data.content.programs} />
    </Post>
  );
};

const mapStateToProps = (state) => ({
  navShow: state.nav.show,
});

export default connect(mapStateToProps, null)(Programmy_Page);
