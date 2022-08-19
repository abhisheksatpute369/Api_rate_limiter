const express = require('express');
// const redis = require('./redis');
const app = express();

app.get('/pingme', async (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    // console.log(ip)
    const limiting = datafile(ip);
    if(limiting == true){
        res.json('limit exeding for you wait five seconds')
    }
    else{
        res.json('Hey! you just ping me');
    }
})

app.listen(3002, () => {
  console.log('server listning on port 3002');
})


const obj = {};
const datafile = (ip) => {
    if(!obj[ip])
    {
        obj[ip] = 1;
    }
    else if(obj[ip] < 5){
        obj[ip]++;
    }
    else if(obj[ip] >= 5){

        setTimeout(()=>{
            obj[ip] = 0;
        },5000)
        return true;
        
    }
    
    console.log(obj);
}