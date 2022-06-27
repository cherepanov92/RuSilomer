import MenuBurger from '../Menu/MenuBurger'
import Menu from '../Menu/Menu'
import Logo from '../Logo/Logo'
import CalculatorEnter from '../Calculator/CalculatorEnter/CalculatorEnter'
import GoBackIcon from '../GoBackIcon'
import Account_Icon from '../Account/Account_Icon'
import {connect} from 'react-redux'
import cl from 'classnames'
import {useRouter} from 'next/router'

const Header = ({children, navShow, image = null, user}) => {
  let imaged = false
  const router = useRouter()
  const isAccount = router.pathname === '/account' ? true : false

  if (navShow !== 'show_in' && image) {
    imaged = true
  }

  let jsxStyle = imaged ? {backgroundImage: `url(${image.src})`} : {}

  return (
    <div
      className={cl(
        {
          'header-wraper--imaged': imaged,
          'header-wraper--imaged header-wraper--out':
            imaged && navShow === 'show_out' ? true : false,
          'header-wraper--out': !imaged && navShow === 'show_out' ? true : false,
        },
        'header-wraper'
      )}
      style={jsxStyle}
    >
      <div className="header">
        {isAccount ? (
          <GoBackIcon
            color={'#ffffff'}
            link={'/'}
            cssClass={cl(
              {'header__go-back--hidden': navShow === 'show_in' ? true : false},
              'header__go-back'
            )}
          />
        ) : (
          <CalculatorEnter
            cssClass={cl(
              {'header__calc--hidden': navShow === 'show_in' ? true : false},
              'header__calc'
            )}
          />
        )}
        <Logo
          cssClass={cl(
            {'header__logo--width': navShow === 'show_in' ? true : false},
            'header__logo'
          )}
        />
        {isAccount ? (
          <div className="header__empty"></div>
        ) : (
          <Account_Icon cssClass="header__account" name={user.isLogIn ? user.name : undefined} />
        )}

        <MenuBurger cssClass={cl('header__burger', isAccount ? 'menu-burger--white' : '')} />
        <hr
          className={cl({'header__hr--hidden': navShow === 'show_in' ? true : false}, 'header__hr')}
        />

        <Menu />
        {children}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  navShow: state.nav.show,
  user: state.user,
})

export default connect(mapStateToProps, null)(Header)
