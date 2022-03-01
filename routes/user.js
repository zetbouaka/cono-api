const { Router } = require('express');
const { SuccessResponseObject } = require('../common/http');

const r = Router();

r.get('/', (req, res) => res.json(new SuccessResponseObject('demo path live 🚀')));

r.get('/:id', function(req , res){
    if (res.params.id == 'KAMIZO'){
        const songA = {
            SongTitleInJapanese: '希望',
            SongTitleInKorean: '희망',
            SongNumberInTJ: '-'
        };
    }else
    {
        const songA = {
            SongTitleInJapanese: '僕の戦争',
            SongTitleInKorean: '나의 전쟁',
            SongNumberInTJ: '68371'
        };
    }
    const result = {
        userid: req.params.id,
        songs: [songA]
    };
    res.send(result);
});

module.exports = r;
