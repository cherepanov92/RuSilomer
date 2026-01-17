import Footer from '../../Footer/Footer'
import {NextSeo} from 'next-seo'
import cl from 'classnames'
import Backgound_wrapper from '../../Backgound_wrapper/Backgound_wrapper'
import Header from '../../Header/Header'
import {getBasePath, getOpenGraphImage} from '../../../utils/basePath'

const Single_Post = ({children, ...props}) => {
  const {data} = props
  const basePath = getBasePath()

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
        <Header />

        <main
          className={cl(
            {
              'main--hidden': data.navShow === 'show_in',
            },
            'main',
            'single-post'
          )}
        >
          {data.image && (
            <picture>
              <img className={cl('single-post__image')} src={`${basePath}${data.image}`} alt={data.seo.title} />
            </picture>
          )}
          {children}
        </main>

        <Footer cssClasses="post__footer" socialList={data.social} />
      </Backgound_wrapper>
    </>
  )
}

export default Single_Post
