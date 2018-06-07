import qs from 'qs';

export default (url, queryObject) => {
  const queryString = qs.stringify(queryObject);
  return `${url}?${queryString}`;
};
