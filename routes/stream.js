const express = require('express')
const router = express.Router();

const fs = require('fs');
const ytdl = require('ytdl-core');


router.get('/',(req,res)=>{
    const file = `${__dirname}/we.webm`;
    res.download(file); // Set disposition and send it.
})

// domain/api/yt_id=>return deciphered mp3
router.get('/:id',(req,res)=>{
    const id = req.params.id;
    ytdl('http://www.youtube.com/watch?v='+id,{
        format: 'webm'
    })
    .pipe(fs.createWriteStream(`${__dirname}routes/w2.webm`));


})



module.exports = router