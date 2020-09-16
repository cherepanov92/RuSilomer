import cl from 'classnames';

const Menu = ({menuList}) => {


    return(
        <>
        <nav className="menu-nav">
            <ul className="menu">
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
}

export default Menu;


