const fs = require('fs')
const path = require('path')
const { dirname } = require('path');

const choseImage = require('../utils/utils.convertName')


const getAnimeImage = (req, res, next) => {
    const animeName = req.query.animeName
    const name = req.query.name
    if (!name  || !animeName){
        return res.status(400).send("BAD REQUEST please set all the variables")
    }

    const animeDir =  `/anime/${animeName}`;
    const currentDir = dirname(require.main.filename)
    const toCheck =  path.join(currentDir, animeDir)
    if (fs.existsSync(toCheck)) {
        choseImage(name, toCheck)
        .then(fullImagePath => {
            return res.sendFile(fullImagePath)
        })
        .catch(err => {
            console.log('===========================')
            console.log(err)
            console.log('===========================')
            res.status(500).send('Internal Server Error')
        })
    } 
    else {
        return res.status(404).send("animeNotFound")
    }
}

module.exports = getAnimeImage