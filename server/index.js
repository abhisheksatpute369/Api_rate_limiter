const express = require('express');
const app = express();

app.get('/pingme', (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    console.log(ip)
    res.json('Hey! you just ping me');
})

app.listen(3002, () => {
  console.log('server listning on port 3002');
})