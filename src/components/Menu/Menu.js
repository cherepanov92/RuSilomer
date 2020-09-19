import cl from 'classnames';
import {connect} from 'react-redux';

const Menu = ({menuList, navShow}) => {
    if(menuList) {
        return(
            <>
            <nav className={cl({
                               "show": navShow,
                            }, "menu-nav")}>
                <ul className={cl({
                               "menu--show": navShow,
                            }, "menu")}>
                    {Object.keys(menuList)
                              .map(e => <li key={e}
                                            className={cl("menu__item")}>
                                            <a href={menuList[e].href}
                                                className={cl("menu__link")}
                                                title={'Перейти в ' + menuList[e].name}>
                                                {menuList[e].name}
                                            </a>
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
    navShow: state.nav.show,
    menuList: state.nav.menuList
});

export default connect(mapStateToProps, null)(Menu);


