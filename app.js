let express = require('express')
let path = require('path')
let viewsPath = path.resolve(__dirname, 'views')

let app = express()

app.use(express.static(__dirname +'/public'));


app.listen(3000, function () {
  console.log("Ejercicio individual 1 corriendo...")
})

app.get('/', function (req, res) {
  res.sendFile(path.join(viewsPath, 'home.html'))
})

