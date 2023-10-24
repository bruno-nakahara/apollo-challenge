import mongoose from 'mongoose';

async function main() {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log('Database Connected!');
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

module.exports = main;
