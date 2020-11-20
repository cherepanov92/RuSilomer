import {useState, useEffect} from 'react'
import Account from '../../src/components/Templates/Account'
import Account_Enter from '../../src/components/Account/EnterPage'
import Account_Form from '../../src/components/Account/FormPage'
import {connect} from 'react-redux'
import cl from 'classnames'

const Account_Page = ({social, navShow}) => {
  const [stage, setStage] = useState('init')
  const [isAnimated, setIsAnimated] = useState(false)

  const data = {
    seo: {
      title: 'Личный кабинет',
      description: 'Описание сайта.',
      url: 'https://rusilomer.ru/',
    },
    social: social || [],
    navShow: navShow,
    content: {
      h1: 'личный кабинет',
      h1Part: 'твоих побед!',
      description:
        'личный кабинет позволяет отслеживать подробную информацию о соревнованих, командных зачетах, а так же смотреть личные достижения',
    },
    image: {
      src: '/images/main_sec.jpeg',
    },
    animated: isAnimated,
    stage: stage,
  }

  const handleLogIn = () => {
    setStage('logIn')
  }

  const handleRegistration = () => {
    setStage('registration')
  }

  const handleIsAnimated = () => {
    setIsAnimated((prev) => !prev)
  }

  return (
    <Account data={data}>
      {stage === 'init' ? (
        <Account_Enter
          data={data}
          setRegistration={handleRegistration}
          setLogIn={handleLogIn}
          setIsAnimated={handleIsAnimated}
        />
      ) : stage === 'logIn' || stage === 'registration' ? (
        <Account_Form
          data={data}
          setRegistration={handleRegistration}
          setLogIn={handleLogIn}
          setIsAnimated={handleIsAnimated}
        />
      ) : null}
    </Account>
  )
}

const mapStateToProps = (state) => ({
  navShow: state.nav.show,
})

export default connect(mapStateToProps, null)(Account_Page)
