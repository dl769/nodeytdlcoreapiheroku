const express = require('express')
const router = express.Router();

const fs = require('fs');
const ytdl = require('ytdl-core');


router.get('/',(req,res)=>{
    res.json('hello World')
})

// domain/api/yt_id=>return deciphered mp3
router.get('/:id',(req,res)=>{
    const video_id = req.params.id;

        ytdl.getInfo(video_id, (err, info) => {
            if (err) throw err;
            format = ytdl.chooseFormat(info.formats, { quality: '251' });
            if (format) {
                
            res.json(format.url)
            }
        });
    
})


module.exports = router