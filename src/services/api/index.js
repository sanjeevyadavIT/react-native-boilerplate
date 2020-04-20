import github from './github';

const defaultOptions = {
  url: 'https://api.github.com',
  rootPath: '', // Example: 'rest/V1/'
  userAgent: 'ARCN mobile module',
}

const POST = 'POST';
const PUT = 'PUT';
const GET = 'GET';
const DELETE = 'DELETE';

class Api {
  constructor(options) {
    this.setOptions(options);
  }

  setOptions(options) {
    this.configuration = { ...options };
    this.base_url = this.configuration.url;
    this.root_path = this.configuration.rootPath;
    this.github = github(this);
  }

  post(endpoint, params, data, settings) {
    return this.send(endpoint, POST, params, data, settings);
  }

  put(endpoint, params, data, settings) {
    return this.send(endpoint, PUT, params, data, settings);
  }

  get(endpoint, params, data, settings) {
    return this.send(endpoint, GET, params, data, settings);
  }

  delete(endpoint, params, data, settings) {
    return this.send(endpoint, DELETE, params, data, settings);
  }

  send(endpoint, method, params, data, settings) {
    let uri = `${this.base_url}${this.root_path}${endpoint}`;

    if (params) {
      let separator = '?';
      Object.keys(params).forEach(key => {
        uri += `${separator}${key}=${params[key]}`
        separator = '&';
      });
    }

    //check if there's any missing parameters
    const missingFields = uri.match(/(\{[a-zA-Z0-9_]+\})/g);
    if (missingFields && missingFields.length > 0) {
      return Promise.reject(
        `URL missing parameters: ${missingFields.join(', ')}`
      );
    }

    const headers = {
      'User-Agent': this.configuration.userAgent,
      'Content-Type': 'application/json'
    };

    return new Promise((resolve, reject) => {
      console.log({ uri, method, headers, data, ...params });
      fetch(uri, { method, headers, body: JSON.stringify(data) })
        .then(response => {
          console.log('Request succeeded!', response)
          return response.json();
        })
        .then(repsonseData => {
          console.log(repsonseData);
          resolve(repsonseData);
        })
        .catch(error => {
          console.error('Request failed!', error);
          reject(error);
        })
    });
  }
}

export const api = new Api(defaultOptions);
