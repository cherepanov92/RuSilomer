import {useState} from 'react'
import Post from '../../src/components/Templates/Post/Post'
import {connect} from 'react-redux'
import News_Item from '../../src/components/News'
import Calendar from '../../src/components/Calendar'
import moment from 'moment'
import GeoLocation from '../../src/utils/GeoLocations'
import {setCityResolve, setCityReject, setCityDefault} from '../../src/actions/setCity'

const Novosti_Page = ({social, navShow, news, news_dates}) => {
  moment.locale('ru')

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
          {isLaoding && <div className="loader">Loading...</div>}
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
        {isLaoding && <div className="loader">Loading...</div>}
      </div>
    </Post>
  )
}

export async function getServerSideProps({req}) {
  const host = process.env.HOST
  const version = process.env.VERSION

  const cityDictionary = await GeoLocation(req.connection.remoteAddress, req.headers.cookie)

  if (!cityDictionary['error']) {
    setCityResolve(cityDictionary['cityData'])
  } else {
    setCityReject()
  }

  try {
    const res = await fetch(host + '/api/post/' + version + '/get/news')
    const news = await res.json()
    const res_cal = await fetch(host + '/api/post/' + version + '/get/news/calendar')
    const news_dates = await res_cal.json()
    const resSoc = await fetch(host + '/api/' + version + '/social/?format=json')
    const social = await resSoc.json()
    return {
      props: {
        news,
        news_dates,
        social,
        ip: req.connection.remoteAddress,
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
