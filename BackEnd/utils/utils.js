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

const getNumberOfFilesInFolder = async (dir) => {
	const files = await fs.readdir(dir)
	const count = files.length
	return [count, files]

}

const  choseImage = async (name, gender, animeName) =>{
	let sum = 1000
	const currentDir = dirname(require.main.filename)
	let directoryPath;
	let numberOfAnimes, animeData,listOfAnime
	let numberOfImages, listOfImages
	//? calcule the sum of gender, animeNmae and name if they exist
	if (gender){
		sum += convertNameToNumber(gender)
	}
	if (animeName)
		sum += convertNameToNumber(animeName)
	if (name)
		sum += convertNameToNumber(name)

	if (name == "seven" || name == "twelve" || name == 'Kirwa-Ko' || name == 'KirwaKo') //? force gebder for our team  memebers
		gender = 'male'
	else if (!gender){
		if (sum % 2)
			gender = 'male'
		else
			gender = 'female'
	}
	
	if (!animeName){
		animeData = await  getNumberOfFilesInFolder(path.join(currentDir, '..', '/anime')) //? get all availables animes/
		numberOfAnimes = animeData[0]
		listOfAnime = animeData[1]
		const index = sum % numberOfAnimes
		animeName = listOfAnime[index]
	}

	directoryPath =  path.join(currentDir, '..', 'anime' , animeName)
	animeData = await  getNumberOfFilesInFolder(directoryPath + '/' + gender) //? get all images in animaName/gender/
	numberOfImages = animeData[0]
	listOfImages = animeData[1]
	//? force the output images for our team hhhhhhhh
	if (name == 'seven' && listOfImages.indexOf('4.webp') != -1)
		sum = listOfImages.indexOf('4.webp')
	if ((name == 'Kirwa-Ko' || name == 'kirwako') && listOfImages.indexOf('281.webp') != -1)
		sum = listOfImages.indexOf('281.webp')
	if (name == 'twelve' && listOfImages.indexOf('7.webp') != -1)
		sum = listOfImages.indexOf('7.webp')

	const imageIndex =  sum % numberOfImages;
	const fullImagePath  = path.join(directoryPath, gender, listOfImages[imageIndex])
	return fullImagePath
}

module.exports = {choseImage, getNumberOfFilesInFolder}