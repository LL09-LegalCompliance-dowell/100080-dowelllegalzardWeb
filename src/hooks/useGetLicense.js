import axios from 'axios';

export const useGetLicense = () => {
  return async()=>{
    try {
        const { data } =  await axios.get(`${process.env.REACT_APP_API_URL}/licenses/`);
        return { data }
    } catch (error) {
        console.log(error);
    }
  }
}

