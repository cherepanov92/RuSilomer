import Footer from '../../Footer/Footer'
import {NextSeo} from 'next-seo'
import Header from '../../Header/Header'
import cl from 'classnames'
import Backgound_wrapper from '../../Backgound_wrapper/Backgound_wrapper'
import Head from 'next/head'
import {getOpenGraphImage, getBasePath} from '../../../utils/basePath'

const Main = ({children, ...props}) => {
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

  const {data} = props
  const basePath = getBasePath()

  return (
    <>
      <Head>
        <link rel="shortcut icon" href={`${basePath}/favicon.ico`} />
      </Head>
      <NextSeo
        title={data.seo.title}
        description={data.seo.description}
        canonical={data.seo.url}
        openGraph={{
          url: data.seo.url,
          title: data.seo.title,
          description: data.seo.description,
          images: getOpenGraphImage(data.seo.title),
          site_name: 'rusilomer.ru',
        }}
      />

      <Backgound_wrapper>
        <Header />

        <main
          className={cl(
            {
              'main--hidden': data.navShow === 'show_in',
              'main--default': data.navShow !== 'show_in',
              'main--out': data.navShow === 'show_out',
            },
            'main'
          )}
        >
          {children}
        </main>

        <Footer cssClasses="main__footer" socialList={data.social} />
      </Backgound_wrapper>
    </>
  )
}

export default Main
