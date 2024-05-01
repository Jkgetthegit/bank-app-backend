const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 3000;

app.use(cors()); // Add this line to enable CORS for all routes
app.use(express.json());
app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
