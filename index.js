const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Ahmeddd')
});


app.get('/index',(req,res)=>{
    res.send("Workinsg")
})


const PORT = 5000;
// api/index.js

module.exports = (req, res) => {
    res.status(200).send('Working');
  };

app.listen(PORT, () => {
    console.log('server is running!');
});
