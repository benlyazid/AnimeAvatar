const { promises: fs } = require('fs');
const { dirname } = require('path');
const path = require('path')

const convertNameToNumber = (str) =>{
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += str.charCodeAt(i)
    }
    return sum
}

const getNumberOfFiles = async (dir) => {
    const files = await fs.readdir(dir)
    const count = files.length
    return [count, files]

  }


const  choseImage = async (name, gender, animeName) =>{
    let randomNumber =  Math.floor(Math.random() * 1000)
    const currentDir = dirname(require.main.filename)

    
    if (!gender){
        if (randomNumber % 2)
        gender = 'male'
        else
        gender = 'female'
    }
    if (!animeName){   
        const animeData = await  getNumberOfFiles(path.join(currentDir, '..', '/anime'))
        const numberOfAnimes = animeData[0]
        const listOfAnime = animeData[1]
        const index = randomNumber % numberOfAnimes
        animeName = listOfAnime[index]
    }
    let sum = 0
    
    if (!name)
    sum = randomNumber
    else
    sum  = convertNameToNumber(name)
    const directoryPath =  path.join(currentDir, '..', 'anime' , animeName)
    const animeData = await  getNumberOfFiles(directoryPath + '/' + gender)
    const numberOfFiles = animeData[0]
    const listOfImages = animeData[1]
    if (name == 'seven' || name == 'khalid')
        sum = 4
    if (name == 'kirwa-ko')
        sum = 281
    if (name == 'twelve')
        sum = 7


    const imageIndex =  sum % numberOfFiles;
    const fullImagePath  = directoryPath + `/${gender}/${listOfImages[imageIndex]}`
    console.log("result is " + fullImagePath)
    return fullImagePath
}

module.exports = {choseImage, getNumberOfFiles}