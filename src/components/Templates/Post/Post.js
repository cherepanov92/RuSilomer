import Footer from '../../Footer/Footer';
import { NextSeo } from 'next-seo';
import Header from '../../Header/Header';
import cl from 'classnames';
import Backgound_wrapper from '../../Backgound_wrapper/Backgound_wrapper';
import Post_title from '../../Post_title/Post_title';

const Post = ({children, ...props}) => {

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


      <Backgound_wrapper navShow={data.navShow}>
            <Header image={data.image}>
              <Post_title hidden={data.navShow} h1={data.content.h1}  description={data.content.description}/>
            </Header>  

            <main className={cl({
                              "main--hidden": data.navShow,
                            }, "main", )}>
                {children}
            </main>

            <Footer cssClasses="main__footer" socialList={data.social}/>

      </Backgound_wrapper>

    </>
  )
}

export default Post;