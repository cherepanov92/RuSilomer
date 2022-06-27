import Single_Post from '../../../src/components/Templates/Single_Post/Single_Post'
import {connect} from 'react-redux'
import Link from 'next/link'
import cl from 'classnames'
import moment from 'moment'
import GeoLocation from '../../../src/utils/GeoLocations'
import {setCityResolve, setCityReject, setCityDefault} from '../../../src/actions/setCity'
import {useRouter} from 'next/router'

const Novosti_Single_Post = ({navShow, social, content}) => {
  const router = useRouter()
  moment.locale('ru')
  const formatStr = 'DD MMMM YYYY'
  const data = {
    seo: {
      title: content.title,
      description: content.subtitle,
      url: `https://rusilomer.ru/novosti/${content.id}`,
    },
    social: social || [],
    navShow: navShow,
    image: content.img,
  }
  const createHTML = (content) => {
    return {__html: content}
  }

  return (
    <Single_Post data={data}>
      <div className={cl('single-post__wrap')}>
        <h1 className={cl('single-post__title')}>{content.title}</h1>
        <div className={cl('single-post__location')}>
          <ul className={cl('single-post__list')}>
            <li>
              <Link href={`/novosti/`}>
                <a className={cl('single-post__link')}> {'Новости'}</a>
              </Link>
            </li>
            <li>{'Екатеринбург'}</li>
            <li>{content.date ? moment(content.date, 'YYYY-MM-DD').format(formatStr) : ' '}</li>
          </ul>
        </div>
        <div className={cl('single-post__content-wrap')}>
          <div
            className={cl('single-post__html')}
            dangerouslySetInnerHTML={createHTML(content.content)}
          />
        </div>
      </div>
      <div className="news__wrap">
        <button onClick={() => router.push('/novosti')} className="loadMore">
          Назад
        </button>
      </div>
    </Single_Post>
  )
}

export async function getServerSideProps({query, req}) {
  const host = process.env.HOST
  const version = process.env.VERSION

  // const cityDictionary = await GeoLocation(req.connection.remoteAddress, req.headers.cookie)

  // if (!cityDictionary['error']) {
  //   setCityResolve(cityDictionary['cityData'])
  // } else {
  //   setCityReject()
  // }

  try {
    const resNews = await fetch(host + '/api/post/' + version + `/get/news/${query.id}`)
    const content = await resNews.json()
    const resSoc = await fetch(host + '/api/' + version + '/social/?format=json')
    const social = await resSoc.json()
    return {
      props: {
        content,
        social,
        // ip: req.connection.remoteAddress,
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

export default connect(mapStateToProps, null)(Novosti_Single_Post)
