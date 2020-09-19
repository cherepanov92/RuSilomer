import MenuBurger from '../Menu/MenuBurger';
import Menu from '../Menu/Menu';
import Logo  from "../Logo/Logo";
import Calc_Icon  from "../Calc_Icon/Calc_Icon";
import {connect} from 'react-redux';
import cl from 'classnames';

const Header = ({navShow}) => {

    return (
        <div className="header">
            <Calc_Icon clname={cl({"header__calc--hidden": navShow}, "header__calc")}/>
            <Logo clname={cl({"header__logo--width": navShow}, "header__logo")}/>
            <MenuBurger clname="header__burger"/>
            <Menu />
        </div>
    )
}

const mapStateToProps = state => ({
    navShow: state.nav.show,
});

export default connect(mapStateToProps, null)(Header);