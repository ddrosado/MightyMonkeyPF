import axios from 'axios'

export const putUser = async (obj) => {
      try {
        const response = await axios.put(`/api/users`, obj);
        return response.data;
      } catch (error) {
        throw error.message;
      }
    }
 
export const updateSession =  async () => {
    try {
      const response = await axios.get("/api/login");
      return response.data;
    } catch (error) {
      throw error.message;
    }
  }
