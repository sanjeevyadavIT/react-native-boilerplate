import Request from './Request';

/**
 * Class that exposes REST API endpoints
 */
class Api {
  constructor() {
    this.request = new Request();
  }

  /**
   * Get list of trending repositories for a given date
   */
  getTrendingRepo(date) {
    const params = {
      q: `created:${date}`,
      sort: 'stars',
      order: 'desc'
    };

    return this.request.get('/search/repositories', params, undefined);
  }
}

export default api = new Api();
