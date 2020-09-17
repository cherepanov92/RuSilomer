import '../src/styles/styles.scss';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import {wrapper} from '../src/store/store';

const RusSilomer = ({ Component, pageProps }) => {

    return (
        <>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
        </>
    )
}

export default wrapper.withRedux(RusSilomer);
