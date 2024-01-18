import mongoose from 'mongoose';

const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

const LoginSchema = new Schema({
  username: String,
  password: String,
});


const LoginModel = mongoose.model('Login', LoginSchema);

export default LoginModel;