const express = require('express')
const app = express()
const settings = {
  port: 4000
}
app.listen(settings.port, () => {
  console.log(`Service is runnin in http://localhost:${settings.port}`)
})
