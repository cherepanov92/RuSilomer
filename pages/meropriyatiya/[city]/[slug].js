import Single_Post from '../../../src/components/Templates/Single_Post/Single_Post'
import {connect} from 'react-redux'
import cl from 'classnames'
import GeoLocation from '../../../src/utils/GeoLocations'
import moment from 'moment'
import {setCityResolve, setCityReject, setCityDefault} from '../../../src/actions/setCity'

const Meropriyatiya_Single_Post = ({navShow, social, content}) => {
  const data = {
    seo: {
      title: content.name,
      description: content.description,
      url: 'https://rusilomer.ru/',
    },
    social: social || [],
    navShow: navShow,
    // content: {
    //   h1: 'Олостное соревнование в городе екатеринбург',
    //   city: 'Екатеринбург',
    //   html:
    //     '<p>29 июля 2020 года Исполком Российского студенческого спортивного союза (далее - РССС) принял решение о проведении отчетно-выборной конференции РССС (далее – Конференция) 7 октября 2020 года, начало в 14 часов 00 минут, по адресу г. Екатеринбург, ул. Мира, 19 – Уральский федеральный университет, Главный учебный корпус, Зал ученого совета.</p> \
    //   <img src="/images/example_1.png" alt="asdasd" />\
    //   <p>Исполком Российского студенческого спортивного союза</p> \
    //   <p>В соответствии с нормами представительства, определенными решением Исполкома РССС, просим вас выбрать для участия в Конференции делегатов, представляющих физкультурно-спортивную общественность, образовательные организации высшего образования, региональные отделения РССС и направить предложения по кандидатурам для избрания на выборные должности в состав Исполкома РССС.</p>\
    //   <p>До начала Конференции делегаты должны предоставить документы, подтверждающие право представительства на Конференции: протокол собрания регионального отделения РССС / организации-члена РССС либо выписку из протокола; кандидаты в руководящие и контрольно-ревизионные органы РССС должны предоставить протокол собрания регионального отделения РССС / организации-члена РССС либо выписку из протокола; анкету кандидата в соответствии с формой.</p>\
    //   <q>СОРЕВНОВАНИЯ ПРОШЛИ ОТЛИЧНО!</q>\
    //   <p>В соответствии с нормами представительства, определенными решением Исполкома РССС, просим вас выбрать для участия в Конференции делегатов, представляющих физкультурно-спортивную общественность, образовательные организации высшего образования, региональные отделения РССС и направить предложения по кандидатурам для избрания на выборные должности в состав Исполкома РССС.</p>\
    //   <p>До начала Конференции делегаты должны предоставить документы, подтверждающие право представительства на Конференции: протокол собрания регионального отделения РССС / организации-члена РССС либо выписку из протокола; кандидаты в руководящие и контрольно-ревизионные органы РССС должны предоставить протокол собрания регионального отделения РССС / организации-члена РССС либо выписку из протокола; анкету кандидата в соответствии с формой.</p>',
    // },
    image: content.img,
  }

  moment.locale('ru')
  const formatStr = 'DD MMMM YYYY'
  const createHTML = (content) => {
    return {__html: content}
  }

  return (
    <Single_Post data={data}>
      <div className={cl('single-post__wrap')}>
        <h1 className={cl('single-post__title')}>{content.name}</h1>
        <div className={cl('single-post__location')}>
          <ul className={cl('single-post__list')}>
            <li>{content.location}</li>
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
    </Single_Post>
  )
}

export async function getServerSideProps({query, req}) {
  const host = process.env.HOST
  const version = process.env.VERSION

  const cityDictionary = await GeoLocation(req.connection.remoteAddress, req.headers.cookie)

  if (!cityDictionary['error']) {
    setCityResolve(cityDictionary['cityData'])
  } else {
    setCityReject()
  }

  try {
    const resEvent = await fetch(host + `/api/event/get/${query.slug}`)
    const content = await resEvent.json()
    const resSoc = await fetch(host + '/api/' + version + '/social/?format=json')
    const social = await resSoc.json()
    return {
      props: {
        content,
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

export default connect(mapStateToProps, null)(Meropriyatiya_Single_Post)
