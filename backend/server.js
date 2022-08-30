const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
// app.use(express.static('client/build'))

const uri = 'mongodb+srv://rtwele:password1234@cluster0.6vip9.mongodb.net/Cincinnati';
        
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

const attractionsRouter = require('./routes/attractions')
const contactRouter = require('./routes/contact')

app.use('/attractions', attractionsRouter)
app.use('/contact', contactRouter)
app.use(express.static(path.join(__dirname, '../build')));

/* Production */
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'))
//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client/build'))
//   })
// }

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});