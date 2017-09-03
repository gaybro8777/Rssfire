export const fetchHelper = url => {
  // url = url.replace(/^http:\/\//i, 'https://');

  const API = 'https://query.yahooapis.com/v1/public/yql?q=';

  if(!url.indexOf('http://')) {
    let yqlUrl = encodeURIComponent(`select * from rss where url='${url}'`);
    url = `${API}${yqlUrl}`;
  }

  return fetch(url)
    .then(statusHelper)
    .then(res => res.text())
    .then(payload => ({ payload }))
    .catch(error => ({ error }));
};

const statusHelper = res => {
  if(res.status >= 200 && res.status < 300) {
    return Promise.resolve(res);
  } else {
    return Promise.reject(res);
  }
}
