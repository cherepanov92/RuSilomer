import {useState} from 'react'
import Post from '../../src/components/Templates/Post/Post'
import {connect} from 'react-redux'
import News_Item from '../../src/components/News'
import Calendar from '../../src/components/Calendar'
import moment from 'moment'

const Novosti_Page = ({social, navShow, news, news_dates}) => {
  moment.locale('ru')
  console.log(news)

  const [totalPages, setTotalPages] = useState(news.info.total_pages)
  const [listNews, setListNews] = useState(news.result)
  const [newsDates, setnewsDates] = useState(news_dates)
  const [isLaoding, setIsloading] = useState(false)
  const [amountLoadedPages, setAmountLoadedPages] = useState(1)
  const [startEventsDate, setStartEventsDate] = useState(null)
  const [endEventsDate, setEndEventsDate] = useState(null)

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
    },
    image: {
      src: '/images/news.jpeg',
    },
    showPostPageTitle: false,
  }

  const handleLoadMoreNews = async (pageNumber) => {
    setIsloading(true)
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_HOST2 + `/api/post/v1/get/news?page=${pageNumber}`
      )
      const news = await res.json()
      setAmountLoadedPages((prev) => (prev += 1))
      setListNews((prev) => prev.concat(news.result))
    } catch (err) {
      console.log(err)
    } finally {
      setIsloading(false)
    }
  }

  return (
    <Post data={data}>
      <div className="news">
        <div className="news__calendar-wrap">
          <div className="news__calendar-text">Показать новости по дате: </div>
          <Calendar
            startDate={startEventsDate}
            endDate={endEventsDate}
            setStartDate={setStartEventsDate}
            setEndDate={setEndEventsDate}
            dates={data.dates}
          />
          {isLaoding && <div class="loader">Loading...</div>}
        </div>
        {listNews.map((item, index) => {
          // if (index < 5 && item.importance === 'high') {

          // }
          return <News_Item {...item} cssClass={index} key={item.id} />
        })}
      </div>

      <div className="news__wrap">
        {amountLoadedPages < totalPages && (
          <button
            disabled={isLaoding}
            onClick={() => handleLoadMoreNews(+amountLoadedPages + 1)}
            className="loadMore"
          >
            Показать ещё
          </button>
        )}
        {isLaoding && <div class="loader">Loading...</div>}
      </div>
    </Post>
  )
}

export async function getServerSideProps() {
  const host = process.env.HOST
  const version = process.env.VERSION

  try {
    const res = await fetch(host + '/api/post/' + version + '/get/news')
    const news = await res.json()
    const res_cal = await fetch(host + '/api/post/' + version + '/get/news/calendar')
    const news_dates = await res_cal.json()
    return {
      props: {
        news,
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
