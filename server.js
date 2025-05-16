// 1. Load environment variables
require('dotenv').config();

const express = require('express');
const { MongoClient } = require('mongodb');                // Official MongoDB driver :contentReference[oaicite:1]{index=1}

const app = express();
app.use(express.json());                                   // Parse JSON bodies

// 2. Create & connect the MongoClient
// const client = new MongoClient(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });
// ...existing code...

// 2. Create & connect the MongoClient
const client = new MongoClient(process.env.MONGODB_URI);

// ...existing code...
// ...existing code...

async function startServer() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db();
    const credsCol = db.collection('creds');

    // Use the router
    const collectRouter = require('./routes/collect')(credsCol);
    app.use('/collect', collectRouter);

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1);
  }
}

startServer();