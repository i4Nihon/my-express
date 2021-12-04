const app = require("./app")

const port = process.env.PORT || 3001;

app.set("port", port)

const server = app.listen(app.get(port), ()=> {
    console.log(`Listening on ${server.address().port}`)
})