
import axios from 'axios';

export const useCheckLicense = () => {
  return async(payload)=>{
    console.log(payload, 'payload')
    try {
      const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/licenses/`, payload)
      return { data }
    } catch (error) {
      return { data: null };
    }
  }
}

