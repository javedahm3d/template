require('dotenv/config')
const express = require('express')
const mongoose = require('mongoose');
mongoose.set('debug', true);
const app = express();
const PORT = process.env.PORT || 3001;
const router = require('./routes');
const bodyParser = require('body-parser')

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);

mongoose.connect(process.env.MONGODB_URL_ATLAS).then(() => {
  console.log(`Connected successfully to MongoDB`);
}).catch((err) => {
  console.log(err);
  console.log('MongoDB connection failed');
})

app.get('/', (req, res) => {
  return res.json({
    "message": "Deployed successfully"
  });
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
