import MenuBurger from '../Menu/MenuBurger';
import Menu from '../Menu/Menu';
import Logo  from "../Logo/Logo";

const Header = ({menuList}) => {


    return (
        <div className="header">
            <Logo clname="header__logo"/>
            <MenuBurger clname="header__burger"/>
            <Menu menuList={menuList}/>
        </div>
    )
}

export default Header;