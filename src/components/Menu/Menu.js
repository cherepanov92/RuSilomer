import cl from 'classnames'
import {connect} from 'react-redux'
import Link from 'next/link'
import {navHide} from '../../actions/toggleNav'
import {useRouter} from 'next/router'

const Menu = ({menuList, menuShow, navHide}) => {
  const router = useRouter()

  const toggleMenuHandler = () => {
    navHide()
  }

  if (menuList) {
    return (
      <>
        <nav
          className={cl(
            {
              show: menuShow === 'show_in' ? true : false,
            },
            'menu-nav'
          )}
        >
          <ul
            className={cl(
              {
                'menu--show': menuShow === 'show_in' ? true : false,
              },
              'menu'
            )}
          >
            {Object.keys(menuList).map((e) => (
              <li
                key={e}
                className={cl('menu__item', menuList[e].desctop ? '' : 'menu__item--hidden')}
              >
                <Link
                  href={menuList[e].href}
                  className={cl(
                    {
                      'menu__link--current':
                        router.pathname === menuList[e].href && router.pathname !== '/'
                          ? true
                          : false,
                    },
                    'menu__link'
                  )}
                  onClick={toggleMenuHandler}
                  title={'Перейти в ' + menuList[e].name}
                >
                  {menuList[e].name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </>
    )
  } else {
    return <></>
  }
}

const mapStateToProps = (state) => ({
  menuShow: state.nav.show,
  menuList: state.nav.menuList,
})

const mapDispatchToProps = {
  navHide,
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
