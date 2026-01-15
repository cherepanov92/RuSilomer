import '../src/styles/styles.scss'
import {DefaultSeo} from 'next-seo'
import SEO from '../next-seo.config'
import {wrapper} from '../src/store/store'
import {Provider} from 'react-redux'
import Cookies from 'universal-cookie'
import {useRouter} from 'next/router'

const RusSilomer = ({Component, ...rest}) => {
  const cookies = new Cookies()
  let router = useRouter()
  const {store, props} = wrapper.useWrappedStore(rest)

  if (cookies.get('visit') === undefined) {
    process.env.NODE_ENV === 'development'
      ? cookies.set('visit', 'init', {path: '/', secure: false})
      : cookies.set('visit', 'init', {
          path: '/',
          domain: process.env.NEXT_PUBLIC_DOMAIN,
          secure: process.env.NEXT_PUBLIC_SECURE,
          sameSite: 'strict',
        })
  }

  return (
    <Provider store={store}>
      <DefaultSeo {...SEO} />
      <Component {...props.pageProps} key={router.route} />
    </Provider>
  )
}

export default RusSilomer
