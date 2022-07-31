const Request = require('../models/model.request')
const requestIp = require('request-ip');
const geoIp = require('geoip-lite');

const saveData = (req, res, next) => {
    const animeName = req.query.animeName ? req.query.animeName : 'random'
	const name = req.query.name ? req.query.name : 'random'
	const gender = req.query.gender ? req.query.gender : 'random'
    const ip = requestIp.getClientIp(req)
    const date = new Date()
    var geo = geoIp.lookup("ip");

    const country = geo.country ? geo.country : " "
    const region = geo.region ? geo.region : " "
    const city = geo.city ? geo.city : " "

    const geoLocation = country + "_" + region + "_" + city

    const  _request = new Request({ip, animeName, gender, name, date, geoLocation})
    _request.save()
    .then(data => {
        next()
    })
    .catch( err => {
        console.log(err)
        next()
    })
}

module.exports = saveData