const { Router } = require('express');
const { SuccessResponseObject } = require('../common/http');

const r = Router();

r.get('/', (req, res) => res.json(new SuccessResponseObject('demo path live 🚀')));

r.get('/:id', function(req , res){
    const UserId = req.params.id;
    const songB = {
        SongTitleInJapanese: 'SKILL',
        SongTitleInKorean: 'SKILL',
        SongNumberInTJ: '68371'  
    }
    if (UserId == "KAMIZO"){
        const songA = {
            SongTitleInJapanese: '希望',
            SongTitleInKorean: '희망',
            SongNumberInTJ: '-'
        }
        const result = {
            UserId: UserId,
            Songs: [songA, songB]
        };
        res.send(result);
    }else{
        const songA = {
            SongTitleInJapanese: '僕の戦争',
            SongTitleInKorean: '나의 전쟁',
            SongNumberInTJ: '68371'
        }
        const result = {
            UserId: UserId,
            Songs: [songA, songB]
        };
        res.send(result);
    }
});

module.exports = r;
