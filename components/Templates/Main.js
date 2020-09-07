import Footer from '../Footer/Footer';
import { NextSeo } from 'next-seo';

const Home = ({children, ...props}) => {

  const { seoProps } = props;

  return (
    <>
    <NextSeo
      title = {seoProps.title}
      description = {seoProps.description}
      canonical = {seoProps.url}
      openGraph = {{
        url: seoProps.url,
        title: seoProps.title,
        description: seoProps.description,
        images: [
          {
            url: 'https://rusilomer.ru/assets/images/header__logo.png',
            width: 900,
            height: 800,
            alt: 'Og Image Alt Second',
          },
        ],
        site_name: 'rusilomer.ru',
      }}
    />

      <div>
          <main className={'app'}>
              {children}
          </main>

          <Footer />

      </div>
    </>
  )
}

export default Home;