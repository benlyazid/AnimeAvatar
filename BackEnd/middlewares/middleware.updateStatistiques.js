const updateStatistiques = (req, res, next) => {
    global.statistiques.numberOfRequests += 1
    console.log("new country is " + req.country)
    console.log("all countries are " + global.countries)
    console.log("serch for  " + global.countries.indexOf(req.country))
    if(global.countries.indexOf(req.country) == -1){
        global.countries.push(req.country)
        global.statistiques.contries += 1
        console.log("append  " + (req.country))
        console.log("list after append  " + global.countries)
    }
    next()
}
module.exports = updateStatistiques