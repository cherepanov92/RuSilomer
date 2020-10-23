import { NextSeo } from 'next-seo';
import cl from 'classnames';
import Backgound_wrapper from '../../Backgound_wrapper/Backgound_wrapper';
import Close_button from '../../Buttons/Close_button';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const Single_Exercises = ({ children, ...props }) => {
  const router = useRouter();
  const { data } = props;

  const transition = {
    duration: 0.6,
    ease: [0.43, 0.13, 0.23, 0.96],
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

      <Backgound_wrapper cssClass="background-wrapper--blue">
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={main}
        >
          <div className="header-exercises">
            <Close_button
              cssClass={cl('close-button--white')}
              toggleClick={() => router.push('/uprazhneniya')}
              titleButton="Посмотреть все упражнения"
            />
          </div>

          <main className={cl('main', 'single-exercises')}>{children}</main>
        </motion.div>
      </Backgound_wrapper>
    </>
  );
};

export default Single_Exercises;
