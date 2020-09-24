import MenuBurger from '../Menu/MenuBurger';
import Menu from '../Menu/Menu';
import Logo  from "../Logo/Logo";
import Calc_Icon  from "../Calc_Icon/Calc_Icon";
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
        <>
        <div className={cl({"header-wraper--imaged": imaged,
                            "header-wraper--imaged header-wraper--out": (imaged && navShow === 'show_out') ? true : false,
                            "header-wraper--out": (!imaged && navShow === 'show_out') ? true : false,
                            }, "header-wraper")}
              style={jsxStyle}>
            <div className="header">
                <Calc_Icon clname={cl({"header__calc--hidden": navShow === 'show_in' ? true : false}, "header__calc")}/>
                <Logo clname={cl({"header__logo--width": navShow === 'show_in' ? true : false}, "header__logo")}/>
                <Account_Icon clname="header__account"/>
                <MenuBurger clname="header__burger"/>
                <Menu />
                {children}
            </div>

        </div>

        {/*
        Вот на такую штуку ругается Babel
        поэтому сделал через REACT, через парку камитов уберу старую версию

        {imaged ?
            <style jsx>{`
                .header-wraper--imaged {
                    background-image: url(${image.src});
                }
                `}</style>
            :
            <></>
        } */}
        </>
    )
}

const mapStateToProps = state => ({
    navShow: state.nav.show,
});

export default connect(mapStateToProps, null)(Header);