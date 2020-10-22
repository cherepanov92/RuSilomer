import '../src/styles/styles.scss';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import {wrapper} from '../src/store/store';
import Cookies from 'universal-cookie';

const RusSilomer = ({ Component, pageProps }) => {
    const cookies = new Cookies();

    if (cookies.get("visit") === undefined){
        cookies.set("visit", "init", {"path": "/","secure":false,})
    }

    return (
        <>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
        </>
    )
}

export default wrapper.withRedux(RusSilomer);
