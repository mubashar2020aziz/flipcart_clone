import axios from 'axios';
const URL = 'http://localhost:8000';

export const PaymentPaypal = async (data) => {
  try {
    let response = await axios.post(`${URL}/api/user/payment`, data);
    return response.data;
  } catch (err) {
    console.log('err while calling payment api', err);
  }
};
