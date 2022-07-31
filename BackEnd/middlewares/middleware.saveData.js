const Request = require('../models/model.request')
const requestIp = require('request-ip');

const saveData = (req, res, next) => {
    const animeName = req.query.animeName ? req.query.animeName : 'random'
	const name = req.query.name ? req.query.name : 'random'
	const gender = req.query.gender ? req.query.gender : 'random'
    const ip = requestIp.getClientIp(req)

    const  _request = new Request({ip, animeName, gender, name})
    _request.save()
    .then(data => {
        console.log(data)
        next()
    })
    .catch( err => {
        console.log(err)
        next()
    })
}

module.exports = saveData