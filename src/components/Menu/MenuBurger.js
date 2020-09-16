import cl from 'classnames';

const MenuBurger = ({clname}) => {


    return(
        <>
        <svg version="1.1"
            className={cl(clname, "menu-burger")}
            width="25"
            height="14"
            viewBox="0 0 25 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <line
                x1="2.08325"
                y1="1"
                x2="21.5276"
                y2="1"
                stroke="#1D3557"
                strokeWidth="2"/>
            <line
                x1="5.55554"
                y1="6.83331"
                x2="24.9999"
                y2="6.83331"
                stroke="#1D3557"
                strokeWidth="2"/>
            <line
                y1="12.6666"
                x2="19.4444"
                y2="12.6666"
                stroke="#1D3557"
                strokeWidth="2"/>
            </svg>
        </>
    )
}




export default MenuBurger;