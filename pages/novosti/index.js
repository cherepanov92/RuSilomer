import {useState} from 'react'
import Post from '../../src/components/Templates/Post/Post'
import {connect} from 'react-redux'
import News_Item from '../../src/components/News/News'

const Novosti_Page = ({social, navShow, news, news_dates}) => {
  console.log(news)
  console.log(news_dates)
  const [isLaoding, setIsloading] = useState(false)
  const [amountLoadedPages, setAmountLoadedPages] = useState(1)
  console.log(amountLoadedPages)

  const data = {
    seo: {
      title: 'Новости',
      description:
        'Самые актуальные и важные новости о проекте, его участниках, победителях и конечно же командах!',
      url: 'https://rusilomer.ru/',
    },
    social: social || [],
    navShow: navShow,
    content: {
      h1: 'Новости',
      description:
        'Самые актуальные и важные новости о проекте, его участниках, победителях и конечно же командах!',
      news: [
        {
          title: 'Областное соревнование в городе Екатеринбург',
          description: 'Сборы, подготовка и участники',
          image: {
            src: '/images/main_third.jpeg',
            alt: 'Областное соревнование в городе Екатеринбург',
          },
          link: '/news/slug-1',
          id: 1,
        },
        {
          title: 'Областное соревнование в городе Екатеринбург',
          description: 'Сборы, подготовка и участники',
          image: {
            src: '/images/main_third.jpeg',
            alt: 'Областное соревнование в городе Екатеринбург',
          },
          link: '/news/slug-2',
          id: 2,
        },
        {
          title: 'Областное соревнование в городе Екатеринбург',
          description: 'Сборы, подготовка и участники',
          image: {
            src: '/images/main_third.jpeg',
            alt: 'Областное соревнование в городе Екатеринбург',
          },
          link: '/news/slug-3',
          id: 3,
        },
        {
          title: 'Областное соревнование в городе Екатеринбург',
          description: 'Сборы, подготовка и участники',
          image: {
            src: '/images/main_first.jpeg',
            alt: 'Областное соревнование в городе Екатеринбург',
          },
          link: '/news/slug-4',
          id: 4,
        },
        {
          title: 'Областное соревнование в городе Екатеринбург',
          description: 'Сборы, подготовка и участники',
          image: {
            src: '/images/main_third.jpeg',
            alt: 'Областное соревнование в городе Екатеринбург',
          },
          link: '/news/slug-5',
          id: 5,
        },
        {
          title: 'Областное соревнование в городе Екатеринбург',
          description: 'Сборы, подготовка и участники',
          image: {
            src: '/images/main_third.jpeg',
            alt: 'Областное соревнование в городе Екатеринбург',
          },
          link: '/news/slug-6',
          id: 6,
        },
        {
          title: 'Областное соревнование в городе Екатеринбург',
          description: 'Сборы, подготовка и участники',
          image: {
            src: '/images/main_sec.jpeg',
            alt: 'Областное соревнование в городе Екатеринбург',
          },
          link: '/news/slug-7',
          id: 7,
        },
      ],
    },
    image: {
      src: '/images/news.jpeg',
    },
    showPostPageTitle: true,
  }
  let showImage = false

  const handleLoadMoreNews = () => {
    // setIsloading(true)
    setAmountLoadedPages((prev) => (prev += 1))
  }

  return (
    <Post data={data}>
      <div className="news">
        {data.content.news.map((item, index) => {
          if (index === 0 || index % 3 == 0) {
            showImage = true
          } else {
            showImage = false
          }
          return <News_Item {...item} cssClass={index} showImage={showImage} key={item.id} />
        })}
      </div>
      <button disabled={isLaoding} onClick={handleLoadMoreNews} className="loadMore">
        Показать ещё
      </button>
    </Post>
  )
}

export async function getServerSideProps() {
  const host = process.env.HOST
  const version = process.env.VERSION

  try {
    // const res = await fetch(host + '/api/post/' + version + '/get/news')
    // const news = await res.json()
    const res_cal = await fetch(host + '/api/post/' + version + '/get/news/calendar')
    const news_dates = await res_cal.json()
    return {
      props: {
        // news,
        news_dates,
      },
    }
  } catch (err) {
    return {
      props: {},
    }
  }
}

const mapStateToProps = (state) => ({
  navShow: state.nav.show,
})

export default connect(mapStateToProps, null)(Novosti_Page)
