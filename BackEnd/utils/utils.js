const { promises: fs } = require('fs');
const { dirname } = require('path');
const path = require('path')
const Request = require('../models/model.request')
const convertNameToNumber = (str) =>{
	let sum = 0;
	for (let i = 0; i < str.length; i++) {
		sum += str.charCodeAt(i)
	}
	return sum
}

const getAllFilesInFolder = async (dir) => {
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

	//?our footbaal team hhhhhhhhh
	const l3iyanin = ['l3iyanin', 'ketkout', 'twelve', 'anouar', 'docker', 'joundi', 'raki', 'zakar', 'youness', 'seven', 'kirwa ', 'sso']
	const l3iyaninImages = ['l3iyanin.svg', '1.jpg', '162.jpg', '125.jpg', '132.jpg', '138.jpg', '152.jpg', '304.jpg', '182.jpg', '64.jpg', '2.jpg', '225.jpg']

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
	else if (l3iyanin.indexOf(name) != -1){
		gender = 'male'
	}

	else if (!gender){
		if (sum % 2)
			gender = 'male'
		else
			gender = 'female'
	}
	
	if (!animeName){
		animeData = await  getAllFilesInFolder(path.join(currentDir, '..', '/anime')) //? get all availables animes/
		numberOfAnimes = animeData[0]
		listOfAnime = animeData[1]
		const index = sum % numberOfAnimes
		animeName = listOfAnime[index]
	}

	directoryPath =  path.join(currentDir, '..', 'anime' , animeName)
	animeData = await  getAllFilesInFolder(directoryPath + '/' + gender) //? get all images in animaName/gender/
	numberOfImages = animeData[0]
	listOfImages = animeData[1]

	//? force the output images for our team hhhhhhhh
	if (animeName == 'Inazuma_Eleven' && l3iyanin.indexOf(name) != -1){
		const index = l3iyanin.indexOf(name)
		sum = listOfImages.indexOf(l3iyaninImages[index])
	}
	else{
		if (name == 'seven' && listOfImages.indexOf('4.jpg') != -1)
			sum = listOfImages.indexOf('4.jpg')
		if ((name == 'Kirwa-Ko' || name == 'kirwako') && listOfImages.indexOf('281.jpg') != -1)
			sum = listOfImages.indexOf('281.jpg')
		if (name == 'twelve' && listOfImages.indexOf('7.jpg') != -1)
			sum = listOfImages.indexOf('7.jpg')
	}

	const imageIndex =  sum % numberOfImages;
	const fullImagePath  = path.join(directoryPath, gender, listOfImages[imageIndex])
	return fullImagePath
}

const getStatistiques = async ()=> {
	try{
		const currentDir = dirname(require.main.filename)
		const statistiques = {}
		const numberOfRequests = await  Request.count({})
		const animeData = await  getAllFilesInFolder(path.join(currentDir,  '..', '/anime'))
		const numberOfAnimes = animeData[0]
		const countries = await Request.find({}).select('geoLocation -_id')
		const setOfcountries = [... new Set(countries.map(data => data.geoLocation.split("_")[0]))]
		global.countries = setOfcountries
		statistiques.numberOfRequests = numberOfRequests
		statistiques.numberOfAnimes = numberOfAnimes
		statistiques.countries = setOfcountries.length
		return statistiques
	}
	catch(err){
		console.error(err)
		return JSON.stringify({
			error: 'Internale server error'
		})
	}
}	
module.exports = {choseImage, getAllFilesInFolder, getStatistiques}