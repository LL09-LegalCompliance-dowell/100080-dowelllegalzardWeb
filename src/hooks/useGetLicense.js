import axios from 'axios';

export const useGetLicense = () => {
  return async()=>{
    try {
        const { data } =  await axios.get('https://100080.pythonanywhere.com/api/licenses/');
        return { data }
    } catch (error) {
        console.log(error);
    }
  }
}

