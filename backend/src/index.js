const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bfhlRoutes = require('./routes/bfhlRoutes');

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api', bfhlRoutes);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("DB Connection Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
