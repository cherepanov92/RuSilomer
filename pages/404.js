import Single_Post from '../src/components/Templates/Single_Post/Single_Post'
import {connect} from 'react-redux'
import Link from 'next/link'

const Page404 = ({navShow}) => {
  const data = {
    seo: {
      title: 'Русский Силомер - 404',
      description: 'Русский Силомер - 404.',
      url: 'https://rusilomer.ru/',
    },
    social: [],
    navShow: navShow,
    content: {
      h1: 'Объединимся,',
      h1Part: 'что бы победить!',
    },
  }

  return (
    <Single_Post data={data}>
      <>
        <div className="title-404">
          <h1 className="title-404__h1">404</h1>
        </div>
        <div className="post-title-404">
          <h2 className="post-title-404__h2">Страница не найдена</h2>
          <p className="post-title-404__description_p">
            возможно, она была перемещена или был просто не верно указан адрес
          </p>

          <Link href="/">
            <a className="post-title-404__link" title="Перейти на главную">
              <span style={{paddingRight: '10px'}}>перейти на главную</span>
              <svg
                width="12"
                height="20"
                viewBox="0 0 12 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.439 0.418563L11.0103 8.98984C11.5688 9.5484 11.5688 10.4512 11.0103 11.0098L2.439 19.5811C1.88044 20.1396 0.977601 20.1396 0.419039 19.5811C-0.139522 19.0225 -0.139522 18.1197 0.419039 17.5611L7.98033 9.99982L0.41904 2.43853C-0.139521 1.87997 -0.139521 0.977124 0.41904 0.418563C0.697607 0.139997 1.06332 -9.06215e-07 1.42902 -8.74243e-07C1.79473 -8.42272e-07 2.16044 0.139997 2.439 0.418563Z"
                  fill="#EF233C"
                />
              </svg>
            </a>
          </Link>
        </div>
      </>
    </Single_Post>
  )
}

const mapStateToProps = (state) => ({
  navShow: state.nav.show,
})

export default connect(mapStateToProps, null)(Page404)
