import Footer from '../../Footer/Footer';
import { NextSeo } from 'next-seo';
import cl from 'classnames';
import Backgound_wrapper from '../../Backgound_wrapper/Backgound_wrapper';
import Header from '../../Header/Header';
import { motion } from 'framer-motion';

const Single_Post = ({ children, ...props }) => {
  const { data } = props;
  const transition = {
    duration: 0.6,
    ease: [0.43, 0.13, 0.23, 0.96],
  };

  const header = {
    visible: { opacity: 1, transition },
    hidden: { opacity: 0, transition },
  };

  const footer = {
    visible: { opacity: 1, y: 0, transition },
    hidden: { opacity: 0, y: '100%', transition },
    exit: { opacity: 0, y: '-100%', transition },
  };

  const main = {
    visible: { opacity: 1, x: 0, transition },
    hidden: { opacity: 0, x: '-100%', transition },
    exit: { opacity: 0, x: '100%', transition },
  };

  return (
    <>
      <NextSeo
        title={data.seo.title}
        description={data.seo.description}
        canonical={data.seo.url}
        openGraph={{
          url: data.seo.url,
          title: data.seo.title,
          description: data.seo.description,
          images: [
            {
              url: 'https://rusilomer.ru/assets/images/header__logo.png',
              width: 900,
              height: 800,
              alt: data.seo.title,
            },
          ],
          site_name: 'rusilomer.ru',
        }}
      />

      <Backgound_wrapper>
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={header}
        >
          <Header />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={main}
        >
          <main
            className={cl(
              {
                'main--hidden': data.navShow === 'show_in' ? true : false,
              },
              'main',
              'single-post'
            )}
          >
            <picture>
              <img
                className={cl('single-post__image')}
                src={data.image.src}
                alt={data.image.alt}
              />
            </picture>
            {children}
          </main>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={footer}
        >
          <Footer cssClasses="post__footer" socialList={data.social} />
        </motion.div>
      </Backgound_wrapper>
    </>
  );
};

export default Single_Post;
