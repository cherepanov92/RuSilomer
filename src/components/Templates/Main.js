import Footer from '../Footer/Footer';
import { NextSeo } from 'next-seo';
import Header from '../Header/Header';

const Home = ({children, ...props}) => {

  const { seoProps } = props;

  const menuList = {
    "1": {
      "name": 'упражнения',
      "href": '#',
    },
    "2": {
      "name": 'программы',
      "href": '#',
    },
    "3": {
      "name": 'мероприятия',
      "href": '#',
    },
    "4": {
      "name": 'о русском силомере',
      "href": '#',
    },
    "5": {
      "name": 'организаторам',
      "href": '#',
    },
    "6": {
      "name": 'новости',
      "href": '#',
    },
    "7": {
      "name": 'контакты',
      "href": '#',
    },
  }

  const socialList = {
    "IN": {
      "href": "#",
    },
    "YT": {
      "href": "#",
    },
    "VK": {
      "href": "#",
    },
  }

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
            alt: seoProps.title,
          },
        ],
        site_name: 'rusilomer.ru',
      }}
    />

      <>
      <div className="wert_line"></div>
      <div className="gor_line"></div>
          <Header menuList={menuList}/>

          <main className={'main'}>
              {children}
          </main>

          <Footer socialList={socialList}/>

      </>
    </>
  )
}

export default Home;