const { promises: fs } = require('fs');

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
    return count
  }


const  choseImage = async (name, directoryPath) =>{

    let sum  = convertNameToNumber(name) //? number of files% 
    const numberOfFiles = await  getNumberOfFiles(directoryPath)
    if (name == 'seven' || name == 'khalid')
        sum = 4
    const imageIndex =  sum % numberOfFiles;
    const fullImagePath  = directoryPath + `/${imageIndex}.webp`

    return fullImagePath
}

module.exports = choseImage