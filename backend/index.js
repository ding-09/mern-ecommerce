if (process.env.NODE_ENV !== 'production') {
  const dotenv = require('dotenv').config();
}

const express = require('express');
const path = require('path');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db');
const ExpressError = require('./ExpressError');
const productsRoutes = require('./routes/products');

// initialize express
const app = express();

// connect to mongoose
connectDB();

// use cors
app.use(cors());

// all /products routes are handled here
app.use('/products', productsRoutes);

// serving frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  // if no API routes are hit, serve frontend
  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
    )
  );
}

// runs if no other routes are matched
app.all('*', (req, res, next) => {
  next(new ExpressError('Page Not Found!', 404));
});

// error handling
app.use((err, req, res, next) => {
  // destructure error with default values
  const { message = 'Something went wrong', statusCode = 500 } = err;
  res.status(statusCode).send(message);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
