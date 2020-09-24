import MenuBurger from '../Menu/MenuBurger';
import Menu from '../Menu/Menu';
import Logo  from "../Logo/Logo";
import Calc_Icon  from "../Calc_Icon/Calc_Icon";
import Account_Icon from '../Account/Account_Icon';
import {connect} from 'react-redux';
import cl from 'classnames';

const Header = ({children, navShow, image = null}) => {


    return (
        <>
        <div className={cl({"header-wraper--imaged": (!navShow && image)}, "header-wraper")}>
            <div className="header">
                <Calc_Icon clname={cl({"header__calc--hidden": navShow}, "header__calc")}/>
                <Logo clname={cl({"header__logo--width": navShow}, "header__logo")}/>
                <Account_Icon clname="header__account"/>
                <MenuBurger clname="header__burger"/>
                <Menu />
                {children}
            </div>
        </div>

        {image ?
            <style jsx>{`
            .header-wraper--imaged {
                background-image: url(${image.src});
            }
            `}</style>
            :
            <></>
        }
        </>
    )
}

const mapStateToProps = state => ({
    navShow: state.nav.show,
});

export default connect(mapStateToProps, null)(Header);