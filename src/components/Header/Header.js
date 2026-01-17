import MenuBurger from '../Menu/MenuBurger'
import Menu from '../Menu/Menu'
import Logo from '../Logo/Logo'
import CalculatorEnter from '../Calculator/CalculatorEnter/CalculatorEnter'
import {connect} from 'react-redux'
import cl from 'classnames'
import {getBasePath} from '../../utils/basePath'

const Header = ({children, navShow, image = null}) => {
  let imaged = false
  if (navShow !== 'show_in' && image) {
    imaged = true
  }

  let jsxStyle = imaged ? {backgroundImage: `url(${getBasePath()}${image.src})`} : {}

  return (
    <div
      className={cl(
        {
          'header-wraper--imaged': imaged,
          'header-wraper--imaged header-wraper--out':
            imaged && navShow === 'show_out',
          'header-wraper--out': !imaged && navShow === 'show_out',
        },
        'header-wraper'
      )}
      style={jsxStyle}
    >
      <div className="header">
        <CalculatorEnter
          cssClass={cl(
            {'header__calc--hidden': navShow === 'show_in'},
            'header__calc'
          )}
        />
        <Logo
          cssClass={cl(
            {'header__logo--width': navShow === 'show_in'},
            'header__logo'
          )}
        />
        <div className="header__empty"></div>

        <MenuBurger cssClass="header__burger" />
        <hr
          className={cl({'header__hr--hidden': navShow === 'show_in'}, 'header__hr')}
        />

        <Menu />
        {children}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  navShow: state.nav.show,
})

export default connect(mapStateToProps, null)(Header)
