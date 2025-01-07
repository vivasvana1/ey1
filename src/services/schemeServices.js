import axios from 'axios';

const getRecommendedSchemes = async (user_id) => {
  try {
    const response = await axios.post('http://localhost:3000/api/schemes/recommend-schemes', { user_id });
    return response.data.recommendedSchemes;
  } catch (error) {
    console.error('Error fetching recommended schemes:', error);
    return [];
  }
};

export default { getRecommendedSchemes };
