const path = require('path')
const { dirname } = require('path');
const Request = require('../models/model.request')

const utils = require('../utils/utils')

const getAnimeImage = (req, res, next) => {
	let animeName = req.query.animeName
	let name = req.query.name
	let gender = req.query.gender

	utils.choseImage(name, gender, animeName)
	.then(async fullImagePath => {

		io.emit("sendStatistiques",  global.statistiques);
		console.log(fullImagePath)
		return res.sendFile(fullImagePath)

	})
	.catch(err => {
		console.log('===========================')
		console.log(err)
		console.log('===========================')
		return res.status(500).send(JSON.stringify({
			error: 'Internale server error'
		}))
	})
}

const getAnimeList = (req, res, next) => {
	const currentDir = dirname(require.main.filename)
	utils.getAllFilesInFolder(path.join(currentDir,  '..', '/anime'))
	.then(animeData=> {
		const animeList = animeData[1].map(animeName => {
			return {
				value: animeName,
				label: animeName.replaceAll('_', ' ')
			};
		});
		return res.send(JSON.stringify({
			animeList : animeList,
			numberOfAanime : animeList.length
		}))
	})
	.catch(err => {
		console.log('===========================')
		console.log(err)
		console.log('===========================')
		return res.status(500).send(JSON.stringify({
			error: 'Internale server error'
		}))
	})
}

const getStatistiques = async (req, res, next)=> {
	try{
		return res.send(global.statistiques)
	}
	catch(err){
		console.error(err)
		res.status(500).send(JSON.stringify({
			error: 'Internale server error'
		}))
	}
}	

module.exports = {getAnimeImage, getAnimeList, getStatistiques}