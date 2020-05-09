import axios from 'axios';
import Logger from './helper/apiLogger';

const defaultOptions = {
  baseUrl: 'https://api.github.com',
  basePath: '', // Example: 'rest/V1/'
  userAgent: 'ARCN mobile module',
}

/**
 * Provide a layer over the axios library, to
 * configure request parameters before making a HTTP call.
 *
 * NOTE: This class shouln't be used directly,
 * use api object from api.js
 */
class Request {
  constructor() {
    this.configuration = { ...defaultOptions };
  }

  post(endpoint, params, data) {
    return this.send(endpoint, 'POST', params, data);
  }

  put(endpoint, params, data) {
    return this.send(endpoint, 'PUT', params, data);
  }

  get(endpoint, params, data) {
    return this.send(endpoint, 'GET', params, data);
  }

  delete(endpoint, params, data) {
    return this.send(endpoint, 'DELETE', params, data);
  }

  send(
    /**
     * Api endpoint that will be appended
     * with base_url + root_path, to form complete url
     */
    endpoint,
    /**
     * `method` is the HTTP request method to indicate
     * the desired action to be performed for a given resource
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
     */
    method,
    /**
     * `params` are the URL GET parameters to be appended with the url.
     * Must be a plain object or a URLSearchParams object
     */
    params,
    /**
     * `data` is the data to be sent as the request body
     * Only applicable for request methods 'PUT', 'POST', and 'PATCH'
     * When no `transformRequest` is set, must be of one of the following types:
     * - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
     * - Browser only: FormData, File, Blob
     * - Node only: Stream, Buffer
     */
    data
  ) {
    let url = `${this.configuration.baseUrl}${this.configuration.basePath}${endpoint}`;

    const headers = {
      'User-Agent': this.configuration.userAgent,
      'Content-Type': 'application/json'
    };

    return new Promise((resolve, reject) => {
      Logger.describeRequest({ url, method, headers, params, data });
      axios({
        url,
        method,
        headers,
        params,
        data,
      })
        .then(response => {
          Logger.describeSuccessResponse(response);
          resolve(response.data);
        })
        .catch(error => {
          Logger.describeErrorResponse(error);
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            // handle error here
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            // handle error here
          } else {
            // Something happened in setting up the request that triggered an Error
            // error.config is there
          }
          reject(error);
        });
    });
  }
}

export default Request;
