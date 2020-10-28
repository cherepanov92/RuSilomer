import Social from '../Social/Social';
import { connect } from 'react-redux';
import cl from 'classnames';
import GeoLocation from '../GeoLocation/GeoLocations';

const Footer = ({ socialList, navShow, cssClasses }) => {
  return (
    <footer
      className={cl(
        {
          'footer--fixed': navShow === 'show_in' ? true : false,
        },
        cssClasses,
        'footer'
      )}
    >
      <div className="footer__tag">#русиломер</div>
      <Social socialList={socialList} />
      <GeoLocation />
    </footer>
  );
};

const mapStateToProps = (state) => ({
  navShow: state.nav.show,
});

export default connect(mapStateToProps, null)(Footer);
