import { products } from './constant/data.js';
import product from './models/productSchema.js';
const DefaultData = async () => {
  try {
    await product.insertMany(products);

    console.log('Data import successfully');
  } catch (err) {
    console.log('eror while inserting default data');
  }
};
export default DefaultData;
