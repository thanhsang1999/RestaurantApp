import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer LuPZ-UtTizigfmfI2dJpNRctlRdkUFv3o6rsIQc2QbkCwJQ0GEAz41E2OlPNwSyaLcU4k5ACIc8sxGqGDQLmeHxyWpsbNjUFqz0SEnhTQXJUXPuTuZcz618DXh9pYXYx`,
  },
});
