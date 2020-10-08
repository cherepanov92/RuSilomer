import Footer from '../../Footer/Footer';
import { NextSeo } from 'next-seo';
import cl from 'classnames';
import Backgound_wrapper from '../../Backgound_wrapper/Backgound_wrapper';
import Header from '../../Header/Header';

const Single_Post = ({children, ...props}) => {

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


      <Backgound_wrapper>
         <Header />

          <main className={cl({
                            "main--hidden": data.navShow === 'show_in' ? true : false,
                          }, "main", "single-post")}>
              <picture>
                <img className={cl("single-post__image")} src={data.image.src} alt={data.image.alt} />
              </picture>
              {children}
          </main>

          <Footer cssClasses="post__footer" socialList={data.social}/>

      </Backgound_wrapper>

    </>
  )
}

export default Single_Post;