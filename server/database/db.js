import mongoose from 'mongoose';

const connection = async () => {
  const DB = process.env.DATABASE;
  try {
    await mongoose.connect(DB);
    console.log('database connection successfull');
  } catch (err) {
    console.log('connection fail');
  }
};

export default connection;
