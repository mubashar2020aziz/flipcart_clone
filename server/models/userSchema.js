import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
      trim: true,
      min: 5,
      max: 20,
    },
    lastname: {
      type: String,
      required: true,
      trim: true,
      min: 5,
      max: 20,
    },
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

//export moduel
const User = mongoose.model('USER', userSchema);
export default User;
