const { dirname } = require('path');
const fs = require('fs')
const path = require('path')

const valiatData = (req, res, next)=>{
    let animeName = req.query.animeName
    let gender = req.query.gender

    const animeDir =  `/anime/${animeName}`;
    const currentDir = dirname(require.main.filename)

    if (animeName){
        const fullDirectoryPath =  path.join(currentDir, '..', animeDir)
        if (animeName && !fs.existsSync(fullDirectoryPath)){
            return res.status(404).send("animeNotFound")
        }
    }
    if (gender && gender != 'male' && gender != 'female'){
        return res.status(404).send("gender incorrect")
    }
    next()
}

module.exports = valiatData