const updateStatistiques = (req, res, next) => {
    global.statistiques.numberOfRequests += 1
    if(global.countries.indexOf(req.country) == -1){
        global.countries.push(req.country)
        global.statistiques.contries += 1
    }
    next()
}
module.exports = updateStatistiques