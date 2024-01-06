import mongoose from 'mongoose';

let isConnected = false; // track the connection

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if(isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
   await mongoose.connect(process.env.MONGODB_URI).then(() => {
      console.log(`Connected successfully to MongoDB`);
    }).catch((err) => {
      console.log(err);
      console.log('MongoDB connection failed');
    })

    isConnected = true;

    console.log('MongoDB connected')
  } catch (error) {
    console.log(error);
    console.log('error occured here');
  }
}