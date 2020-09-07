import '../styles/styles.scss';

import { DefaultSeo } from 'next-seo';

import SEO from '../next-seo.config';



function RusSilomer({ Component, pageProps }) {

    return (
        <>

                <DefaultSeo {...SEO} />
                <Component {...pageProps} />


        </>
    )
}

export default RusSilomer;