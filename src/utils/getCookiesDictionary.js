export const getCookiesDictionary = (cookies) => {
  const cookiesDictionary = {};
  cookies
    ? cookies.split(';').forEach((cookie) => {
        let values = cookie.match(/(.*?)=(.*)$/);
        cookiesDictionary[values[1].trim()] = (values[2] ?? '').trim();
      })
    : {};

  return cookiesDictionary;
};
