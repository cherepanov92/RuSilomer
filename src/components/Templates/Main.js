import Footer from '../Footer/Footer';
import { NextSeo } from 'next-seo';
import Header from '../Header/Header';
import cl from 'classnames';

const Home = ({children, ...props}) => {

  const { data } = props;

  return (
    <>
    <NextSeo
      title = {data.seo.title}
      description = {data.seo.description}
      canonical = {data.seo.url}
      openGraph = {{
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

      <div className={cl({
                            "background-wraper--colored": data.navShow,
                          }, "background-wraper")}>
      <div className="wert_line"></div>
      <div className="gor_line"></div>
          <Header />

          <main className={cl({
                            "main--hidden": data.navShow,
                          }, "main")}>
              {children}
          </main>

          <Footer socialList={data.social}/>

      </div>
    </>
  )
}

export default Home;