const MongoMethods = require("./db/MongoMethods")

module.exports = (app) => {
    app.get("/make_teams", MongoMethods.makeTeams)
}