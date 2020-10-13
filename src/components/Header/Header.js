import MenuBurger from '../Menu/MenuBurger';
import Menu from '../Menu/Menu';
import Logo  from "../Logo/Logo";
import CalculatorEnter  from "../Calculator/CalculatorEnter/CalculatorEnter";
import Account_Icon from '../Account/Account_Icon';
import {connect} from 'react-redux';
import cl from 'classnames';

const Header = ({children, navShow, image = null}) => {

    let imaged = false;

    if (navShow !== 'show_in' && image) {
        imaged = true;
    }

    let jsxStyle = imaged ? {backgroundImage: `url(${image.src})`} : {}

    return (
        <div className={cl({"header-wraper--imaged": imaged,
                            "header-wraper--imaged header-wraper--out": (imaged && navShow === 'show_out') ? true : false,
                            "header-wraper--out": (!imaged && navShow === 'show_out') ? true : false,
                            }, "header-wraper")}
              style={jsxStyle}>
            <div className="header">
                <CalculatorEnter cssClass={cl({"header__calc--hidden": navShow === 'show_in' ? true : false}, "header__calc")}/>
                <Logo cssClass={cl({"header__logo--width": navShow === 'show_in' ? true : false}, "header__logo")}/>
                <Account_Icon cssClass="header__account"/>
                <MenuBurger cssClass="header__burger"/>
                <Menu />
                {children}
            </div>

        </div>
    )
}

const mapStateToProps = state => ({
    navShow: state.nav.show,
});

export default connect(mapStateToProps, null)(Header);