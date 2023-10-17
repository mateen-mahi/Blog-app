import mongoose from 'mongoose';

export default async function connect() {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGO, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    }
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    throw error;
  }
}
