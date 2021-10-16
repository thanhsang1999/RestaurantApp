import axiosClient from './axiosClient';

const searchApi = {
  searchNewYork(params) {
    const url = '/search';
    return axiosClient.get(url, {
      params: { limit: 50, location: 'New York', ...params },
    });
  },
};
export default searchApi;
