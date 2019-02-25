const db = require("./../../connection.js")
const Team = require("./models/teamSchema")

module.exports = {
    makeTeams: ()=>{
        return new Promise((resolve,reject)=>{
            var team = new Team({
                name: "Callighat", //mythical world building - there is software for this
                type: "aggressive"
            })

            team.save().then((res)=>{
                resolve(res)
            }).catch((e)=>{
                reject(e)
            })
        })


    }
}