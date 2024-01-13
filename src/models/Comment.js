import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  userImg: {
    type: String,
    required: true,
  },
  postId: {
    type:mongoose.ObjectId,
    required: true,
  },
},{ timestamps: true });

export const Comment = mongoose.models.comments || mongoose.model('comments', commentSchema);





