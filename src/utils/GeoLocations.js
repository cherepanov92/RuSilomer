import { getCookiesDictionary } from './getCookiesDictionary';

const GeoLocation = async (ip, cookies) => {
  const cookiesDictionary = getCookiesDictionary(cookies);
  // response = { error: false, cityData: null };
  const response = {};

  if ('city' in cookiesDictionary) {
    //  cookiesDictionary['city']
    //   const getData = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    //   response= await getData.json();
  } else {
    //   ip
    //   const getData = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    //   response = await getData.json();
  }

  return response;
};

export default GeoLocation;
