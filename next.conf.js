require('dotenv').config();

module.exports = {
    env: {
        REACT_APP_SERVER_URL: (process.env.NODE_ENV === 'production' ? "https://part-time-capstone.herokuapp.com/" : "http://localhost:5000")
    }
}