import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema({
  field: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  img1: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  img2: {
    type: String
  }

},{ timestamps: true });

export const Portfolio = mongoose.models.portfolio || mongoose.model('portfolio', portfolioSchema);





