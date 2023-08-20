
import axios from 'axios';

export const useCheckLicense = () => {
  return async(payload)=>{
    console.log(payload, 'payload')
    try {
      const { data } = await axios.post('https://100080.pythonanywhere.com/api/licenses/', payload)
      return { data }
    } catch (error) {
      return { data: null };
    }
  }
}

