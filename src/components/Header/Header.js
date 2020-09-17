import MenuBurger from '../Menu/MenuBurger';
import Menu from '../Menu/Menu';
import Logo  from "../Logo/Logo";
import Calc_Icon  from "../Calc_Icon/Calc_Icon";

const Header = () => {

    return (
        <div className="header">
            <Calc_Icon clname="header__calc"/>
            <Logo clname="header__logo"/>
            <MenuBurger clname="header__burger"/>
            <Menu />
        </div>
    )
}

export default Header;