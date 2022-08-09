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
		res.status(500).send('Internal Server Error')
	})
}

const getAnimeList = (req, res, next) => {
	const currentDir = dirname(require.main.filename)
	utils.getNumberOfFilesInFolder(path.join(currentDir,  '..', '/anime'))
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
		res.status(500).send(JSON.stringify({
			error: 'Internale server error'
		}))
	})
}

const getNumberOfRequests = (req, res, next) => {
	Request.count({}, (err, data) => {
		if (err){
			return res.status(500).send(JSON.stringify({
				error: 'Internale server error'
			}))
		}
		return res.send(JSON.stringify({
			numberOfRequests : data
		}))
	})
}
module.exports = {getAnimeImage, getAnimeList, getNumberOfRequests}