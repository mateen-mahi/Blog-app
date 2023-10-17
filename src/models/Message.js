import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  senderName: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  subject:{
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  }
},{ timestamps: true });

export const Message = mongoose.models.messages || mongoose.model('messages', messageSchema);





