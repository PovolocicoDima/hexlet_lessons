export default class ProUrl {
  constructor(urlString) {
    this.urlString = urlString;
  }

  getScheme() {
    return this.urlString.split(':')[0];
  }
  getHostName() {
    if (this.urlString.split(':').length > 2) {
      return this.urlString.split(':')[1].replace('//', '');
    } else {
      return this.urlString.split('?')[0].substring(this.getScheme().length + 3)
    }
  }
  getQueryParams() {
    if (this.urlString.split(':').length > 2) {
      return Object.fromEntries(
        this.urlString
          .split(':')[2]
          .split('?')[1]
          .split('&')
          .map(pair => pair.split('='))
      );
    } else {
      return Object.fromEntries(
        this.urlString
          .split('?')[1]
          .split('&')
          .map(pair => pair.split('='))
      )
    }
  }
  getQueryParam(key, defaultParam = null) {
    const queryObj = this.getQueryParams();
    return queryObj[key] ? queryObj[key] : defaultParam;
  }
  equals(url) {
    return true ? this.urlString === url.urlString : false;
  }
}

const url = new ProUrl('http://yandex.ru?key=value&key2=value2');
// console.log(url.getScheme());
// console.log(url.getHostName());
console.log(url.getQueryParams());
// console.log(url.equals(new ProUrl('http://yandex.ru:80?key=value&key2=value2')));

const test = 'http://yandex.ru?key=value&key2=value2';

// console.log(test.split('?')[1].split('&'));
