import cl from 'classnames';
import {connect} from 'react-redux';
import Link from 'next/link';
import {navHide} from '../../actions/toggleNav';

const Menu = ({menuList, menuShow, navHide}) => {

    const toggleMenuHandler = () => {
        navHide();
    }

    if(menuList) {
        return(
            <>
            <nav className={cl({
                               "show": menuShow === 'show_in' ? true : false,
                            }, "menu-nav")}>
                <ul className={cl({
                               "menu--show": menuShow === 'show_in' ? true : false,
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
    navHide
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);


