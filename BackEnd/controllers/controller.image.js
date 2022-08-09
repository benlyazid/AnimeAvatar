const path = require('path')
const { dirname } = require('path');
const Request = require('../models/model.request')

const utils = require('../utils/utils')

const getAnimeImage = (req, res, next) => {
	let animeName = req.query.animeName
	let name = req.query.name
	let gender = req.query.gender

	utils.choseImage(name, gender, animeName)
	.then(fullImagePath => {
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
		const currentDir = dirname(require.main.filename)
		const satistiques = {}
		const numberOfRequests = await  Request.count({})
		const animeData = await  utils.getAllFilesInFolder(path.join(currentDir,  '..', '/anime'))
		const numberOfAnimes = animeData[0]
		const contries = await Request.find({}).select('geoLocation -_id')
		const setOfcontries = [... new Set(contries.map(data => data.geoLocation.trim().split("_")[0]))]
		console.log(setOfcontries)
		satistiques.numberOfRequests = numberOfRequests

		satistiques.numberOfAnimes = numberOfAnimes
		satistiques.contries = setOfcontries.length
		return res.send(satistiques)
	}
	catch(err){
		console.error(err)
		res.status(500).send(JSON.stringify({
			error: 'Internale server error'
		}))
	}
}	

module.exports = {getAnimeImage, getAnimeList, getStatistiques}