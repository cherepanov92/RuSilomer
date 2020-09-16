import Social from '../Social/Social'


const Footer = ({socialList}) => {


    return (

        <footer className="footer">
            <div className="footer__tag">#русиломер</div>
            <Social socialList={socialList}/>
        </footer>

    )
}


export default Footer;