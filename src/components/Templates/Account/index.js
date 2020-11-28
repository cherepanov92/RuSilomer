import Footer from '../../Footer/Footer'
import {NextSeo} from 'next-seo'
import cl from 'classnames'
import Backgound_wrapper from '../../Backgound_wrapper/Backgound_wrapper'
import Header from '../../Header/Header'
import {motion} from 'framer-motion'

const Account = ({children, ...props}) => {
  const {data} = props
  const transition = {
    duration: 0.6,
    ease: [0.43, 0.13, 0.23, 0.96],
  }

  const header = {
    visible: {opacity: 1, transition},
    hidden: {opacity: 0, transition},
  }

  const footer = {
    visible: {opacity: 1, y: 0, transition},
    hidden: {opacity: 0, y: '100%', transition},
    exit: {opacity: 0, y: '-100%', transition},
  }

  const main = {
    visible: {opacity: 1, x: 0, transition},
    hidden: {opacity: 0, x: '-100%', transition},
    exit: {opacity: 0, x: '100%', transition},
  }

  return (
    <>
      <NextSeo
        title={data.seo.title}
        description={data.seo.description}
        canonical={data.seo.url}
        noindex={true}
        nofollow={true}
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
        <div className={cl('account__background-cover')}>
          <img alt="Вход в личный кабинет" src={data.image.src} className={cl('account__image')} />
          {data.stage === 'init' ? (
            <>
              <div
                className={cl(
                  'account__blue-rectangele',
                  data.animated ? 'account__blue-rectangele--out' : ''
                )}
              ></div>
              <div
                className={cl(
                  'account__black-rectangele-top',
                  data.animated ? 'account__black-rectangele-top--out' : ''
                )}
              ></div>
              <div
                className={cl(
                  'account__black-rectangele-bottom',
                  data.animated ? 'account__black-rectangele-bottom--out' : ''
                )}
              ></div>
            </>
          ) : (
            <div className={cl('account__blue-rectangele account__blue-rectangele-sec')}></div>
          )}

          <motion.div initial="hidden" animate="visible" exit="hidden" variants={header}>
            <Header />
          </motion.div>
          <motion.div initial="hidden" animate="visible" exit="exit" variants={main}>
            <main
              className={cl(
                {
                  'main--hidden': data.navShow === 'show_in' ? true : false,
                },
                'main',
                'account'
              )}
            >
              {children}
            </main>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={footer}
            className={cl('footer__animation-block', {
              'footer--fixed': data.navShow === 'show_in' ? true : false,
            })}
          >
            <Footer cssClasses={'footer--white'} socialList={data.social} />
          </motion.div>
        </div>
      </Backgound_wrapper>
    </>
  )
}

export default Account
