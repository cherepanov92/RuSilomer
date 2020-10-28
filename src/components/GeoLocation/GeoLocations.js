import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import { connect } from 'react-redux';
import {
  setCityResolve,
  setCityReject,
  setCityDefault,
} from '../../actions/setCity';

const GeoLocation = ({
  city,
  setCityResolve,
  setCityReject,
  setCityDefault,
}) => {
  const cookies = new Cookies();
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const getCityData = async (latitude, longitude) => {
    let data = {};
    if (process.env.NODE_ENV === 'development') {
      data = {
        city: 'Екатеринбург',
        city_slug: 'Yekaterinburg',
        region_slug: "Sverdlovskaya oblast'",
      };
    } else {
      const response = await fetch(
        process.env.NEXT_PUBLIC_HOST +
          '?latitude=' +
          latitude +
          '&longitude=' +
          longitude
      );
      data = await response.JSON();
    }

    return data;
  };

  useEffect(() => {
    if (cookies.get('city') === undefined && !city.geoLocationCheked) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          console.log(position);
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        function (error) {
          // если ошибка (можно проверить код ошибки)
          if (error.PERMISSION_DENIED) {
            setCityDefault();
            process.env.NODE_ENV === 'development'
              ? cookies.set('city', 'denied', { path: '/', secure: false })
              : cookies.set('city', 'denied', {
                  path: '/',
                  maxAge: process.env.NEXT_PUBLIC_MAX_AGE,
                  domain: process.env.NEXT_PUBLIC_DOMAIN,
                  secure: process.env.NEXT_PUBLIC_SECURE,
                  sameSite: 'strict',
                });
          } else {
            setCityReject();
            process.env.NODE_ENV === 'development'
              ? cookies.set('city', 'error', { path: '/', secure: false })
              : cookies.set('city', 'error', {
                  path: '/',
                  maxAge: process.env.NEXT_PUBLIC_MAX_AGE,
                  domain: process.env.NEXT_PUBLIC_DOMAIN,
                  secure: process.env.NEXT_PUBLIC_SECURE,
                  sameSite: 'strict',
                });
          }
        }
      );
    } else if (cookies.get('city') === 'denied' && !city.geoLocationCheked) {
      setCityDefault();
    } else if (!city.geoLocationCheked) {
      const geoLocationCookieValue = cookies.get('city').split('-');
      const cityData = getCityData(
        geoLocationCookieValue[0],
        geoLocationCookieValue[0]
      );
      setCityResolve(cityData);
    }
  }, []);

  useEffect(() => {
    if (!city.geoLocationCheked && latitude !== null && longitude !== null) {
      process.env.NODE_ENV === 'development'
        ? cookies.set('city', latitude + '-' + longitude, {
            path: '/',
            secure: false,
          })
        : cookies.set('city', latitude + '-' + longitude, {
            path: '/',
            maxAge: process.env.NEXT_PUBLIC_MAX_AGE,
            domain: process.env.NEXT_PUBLIC_DOMAIN,
            secure: process.env.NEXT_PUBLIC_SECURE,
            sameSite: 'strict',
          });
    }
  }, [latitude, longitude]);

  return <></>;
};

const mapStateToProps = (state) => ({
  city: state.city,
});

const mapDispatchToProps = {
  setCityResolve,
  setCityReject,
  setCityDefault,
};

export default connect(mapStateToProps, mapDispatchToProps)(GeoLocation);
