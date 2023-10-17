import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  authorImg: {
    type: String,
    required: true,
  }
},{ timestamps: true });

export const Post = mongoose.models.blogs || mongoose.model('blogs', postSchema);





