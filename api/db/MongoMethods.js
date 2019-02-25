const MongoPromise = require("./MongoPromise");

module.exports = {
    makeTeams: (req, res) => {
        MongoPromise.makeTeams().then((result)=>{
            console.log("made teams")
            res.send(result)
        }).catch((e)=>{
            console.log("Something wrong happened: ", e)
            throw Error(e)
        })
    }
}