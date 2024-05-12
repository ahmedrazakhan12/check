const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,  'index.html'));
});


app.get('/index',(req,res)=>{
    res.send("Working")
})


const PORT = 5000;


app.listen(PORT, () => {
    console.log('server is running!');
});