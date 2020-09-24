import cl from 'classnames';
import {connect} from 'react-redux';
import Link from 'next/link';
import {navShow, navHide } from '../../actions/toggleNav';

const Menu = ({menuList, menuShow, navShow, navHide}) => {

    const toggleMenuHandler = () => {
        menuShow ? navHide() : navShow();
    }

    if(menuList) {
        return(
            <>
            <nav className={cl({
                               "show": menuShow,
                            }, "menu-nav")}>
                <ul className={cl({
                               "menu--show": menuShow,
                            }, "menu")}>
                    {Object.keys(menuList)
                              .map(e => <li key={e}
                                            className={cl("menu__item")}>
                                            <Link href={menuList[e].href}>
                                                <a className={cl("menu__link")}
                                                    onClick={toggleMenuHandler}
                                                    title={'Перейти в ' + menuList[e].name}>
                                                    {menuList[e].name}
                                                </a>
                                            </Link>
                                        </li>
                              )
                    }
                </ul>
            </nav>
            </>
    
        )
    } else {
        return (<></>)
    }

}

const mapStateToProps = state => ({
    menuShow: state.nav.show,
    menuList: state.nav.menuList
});

const mapDispatchToProps =  {
    navShow,
    navHide
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);


