export default api => ({
  /**
   * Get list of trending repositories for a given date
   */
  getTrendingRepo: (date) => {
    return new Promise((resolve, reject) => {
      const path = '/search/repositories';

      const params = {
        q: `created:${date}`,
        sort: 'stars',
        order: 'desc'
      };

      api
        .get(path, params, undefined, {})
        .then(data => {
          resolve(data);
        })
        .catch(e => {
          reject(e);
        });
    });
  },
})
