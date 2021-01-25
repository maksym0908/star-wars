const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json({limit: '50mb', extended: false})
const request = require('superagent')
const port = 5000
app.use(cors())

function requerAccessToken(code) {
    return request.post('https://www.linkedin.com/oauth/v2/accessToken').send('grant_type=authorization_code')
    .send(`redirect_uri=http://localhost:3000`)
    .send(`client_id=86sgsm7k4ak7ov`)
    .send(`client_secret=TTAExvp5Jc0wSpJz`)
    .send(`code=${code}`)
    .send(`state=123456`)
}



app.post('/', jsonParser, (req, res, next) => {
    requerAccessToken(req.body.token).then(data => res.send(data.text)).catch(err => res.send(err))
    next()
})

app.post('/user', jsonParser, (req, res, next) => {
     request.get(`https://api.linkedin.com/v2/me?`).set({"Authorization": `Bearer ${req.body.accessToken}`, "content-type": "application/json"}).then(data => res.send(data.text)).catch(err => res.send(err))
     next()
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})