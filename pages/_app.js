import '../src/styles/styles.scss';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import { wrapper } from '../src/store/store';
import Cookies from 'universal-cookie';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const RusSilomer = ({ Component, pageProps }) => {
  const cookies = new Cookies();
  let router = useRouter();

  console.log(router.route);

  if (cookies.get('visit') === undefined) {
    cookies.set('visit', 'init', { path: '/', secure: false });
  }

  return (
    <>
      <DefaultSeo {...SEO} />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  );
};

export default wrapper.withRedux(RusSilomer);
