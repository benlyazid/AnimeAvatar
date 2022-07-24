const fs = require('fs')
const path = require('path')
const { dirname } = require('path');

const utils = require('../utils/utils')


const getAnimeImage = (req, res, next) => {
    let animeName = req.query.animeName
    let name = req.query.name
    let gender = req.query.gender

    const animeDir =  `/anime/${animeName}`;
    const currentDir = dirname(require.main.filename)

    if (animeName){
        const fullDirectoryPath =  path.join(currentDir, animeDir)
        if (animeName && !fs.existsSync(fullDirectoryPath)){
            return res.status(404).send("animeNotFound")
        }
    }

    if (gender && gender != 'male' && gender != 'female'){
        return res.status(404).send("gender incorrect")
    }
    utils.choseImage(name, gender, animeName)
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


const getAnimeList = (req, res, next) => {
    const currentDir = dirname(require.main.filename)
    utils.getNumberOfFiles(path.join(currentDir, '/anime'))
    .then(animeData=> {
        // const animelist = animeData[1]
        const animeList = animeData[1].map(animeName => {
            return {
                value: animeName,
                label: animeName.replace('_', ' ')
            };
        });
        const numberOfAanime = animeData[0]
        return res.send(JSON.stringify({
            animeList : animeList,
            numberOfAanime : numberOfAanime
        }))
    })
    .catch(err => {
        console.log('===========================')
        console.log(err)
        console.log('===========================')
        res.status(500).send(JSON.stringify({
            error: 'Internale server error'
        }))
    })
}


module.exports = {getAnimeImage, getAnimeList}