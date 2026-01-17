import Footer from '../../Footer/Footer'
import {NextSeo} from 'next-seo'
import Header from '../../Header/Header'
import cl from 'classnames'
import Backgound_wrapper from '../../Backgound_wrapper/Backgound_wrapper'
import Post_title from '../../Post_title/Post_title'
import {getOpenGraphImage} from '../../../utils/basePath'

const Post = ({children, ...props}) => {
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
        openGraph={{
          url: data.seo.url,
          title: data.seo.title,
          description: data.seo.description,
          images: getOpenGraphImage(data.seo.title),
          site_name: 'rusilomer.ru',
        }}
      />

      <Backgound_wrapper>
        <Header image={data.image}>
          <Post_title
            h1={data.content.h1}
            description={data.content.description}
            tag={data.content.tag}
          />
        </Header>

        <main
          className={cl(
            {
              'main--hidden': data.navShow === 'show_in',
              'main--post': data.navShow !== 'show_in',
            },
            'main'
          )}
        >
          {data.showPostPageTitle ? (
            <Post_title
              h1={data.content.h2 && data.content.h2}
              description={data.content.description_p && data.content.description_p}
              header={false}
            />
          ) : null}
          {children}
        </main>

        <Footer cssClasses={'post__footer'} socialList={data.social} />
      </Backgound_wrapper>
    </>
  )
}

export default Post
