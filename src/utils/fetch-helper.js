import { xmlParser } from './index';

const API = 'https://query.yahooapis.com/v1/public/yql?q=';
const REQUEST_TIME = 1500;

export const fetchHelper = url => {
  let orgURL = url;

  if(!url.indexOf('http://')) {
    let yqlUrl = encodeURIComponent(`select * from xml where url='${url}'`);
    url = `${API}${yqlUrl}`;
  }

  let fetchTimeout = new Promise((resolve, reject) => {
    setTimeout(reject, REQUEST_TIME, new Error(`Request Timed Out: ${orgURL}`));
  });

  let fetchRequest = fetch(url)
    .then(statusHelper)
    .then(res => res.text());
    // .catch(error => ({ error }))

  return Promise
      .race([fetchTimeout, fetchRequest])
      .then(xml => xmlParser(xml, orgURL))
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
