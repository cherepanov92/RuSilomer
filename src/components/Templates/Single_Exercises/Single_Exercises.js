import { NextSeo } from 'next-seo';
import cl from 'classnames';
import Backgound_wrapper from '../../Backgound_wrapper/Backgound_wrapper';
import Close_button from '../../Buttons/Close_button';
import { useRouter } from 'next/router';

const Single_Exercises = ({children, ...props}) => {
  const router = useRouter()
  const { data } = props;

  return (
    <>
    <NextSeo
      title = {data.seo.title}
      description = {data.seo.description}
      canonical = {data.seo.url}
      openGraph = {{
        url: data.seo.url,
        title: data.seo.title,
        description: data.seo.description,
        images: [
          {
            url: 'https://rusilomer.ru/assets/images/header__logo.png',
            width: 900,
            height: 800,
            alt: data.seo.title,
          },
        ],
        site_name: 'rusilomer.ru',
      }}
    />


      <Backgound_wrapper cssClass="background-wrapper--blue">

        <div className="header-exercises">
          <Close_button cssClass={cl("close-button--white")} 
                        toggleClick={() => router.push('/uprazhneniya')}
                        titleButton="Посмотреть все упражнения"/>
        </div>

          <main className={cl("main", "single-exercises")}>
              {children}
          </main>

      </Backgound_wrapper>

    </>
  )
}

export default Single_Exercises;