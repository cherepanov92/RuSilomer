import {useState, useEffect} from 'react'
import Account from '../../src/components/Templates/Account'
import Account_Enter from '../../src/components/Account/EnterPage'
import {connect} from 'react-redux'
import cl from 'classnames'

const Account_Page = ({social, navShow}) => {
  const [stage, setStage] = useState('init')

  const data = {
    seo: {
      title: 'Упражнения',
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
  }

  const handleSubmitForm = (event) => {
    event.preventDefault
    console.log('submit')
  }
  const handleLogIn = (event) => {
    console.log('handleLogIn')
    setStage('logIn')
  }
  const handleRegistration = (event) => {
    console.log('handleRegistration')
    setStage('registration')
  }
  return (
    <Account data={data}>
      {stage === 'init' ? (
        <Account_Enter data={data} setRegistration={handleRegistration} setLogIn={handleLogIn} />
      ) : null}
    </Account>
  )
}

const mapStateToProps = (state) => ({
  navShow: state.nav.show,
})

export default connect(mapStateToProps, null)(Account_Page)
