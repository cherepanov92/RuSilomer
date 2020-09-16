import Footer from '../Footer/Footer';
import { NextSeo } from 'next-seo';
import Header from '../Header/Header';

const Calculator = ({children, ...props}) => {

  const { data } = props;

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

      <>
      <div className="wert_line"></div>
      <div className="gor_line"></div>
          <Header menuList={menuList}/>

          <main className={'main'}>
              {children}
          </main>

          <Footer socialList={data.social}/>

      </>
    </>
  )
}

export default Calculator;