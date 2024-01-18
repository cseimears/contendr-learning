import mongoose from 'mongoose';

const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

const QuizSchema = new Schema({
  title: String,
  description: String,
});


const QuizModel = mongoose.model('Quiz', QuizSchema);

export default QuizModel;