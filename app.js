let express = require('express')
let path = require('path')
let viewsPath = path.resolve(__dirname, 'views')

let app = express()

app.use(express.static(__dirname +'/public'));


app.listen(process.env.PORT || 3000, (req, res) => {
  console.log("Ejercicio individual 1 corriendo...")
})

app.get('/', function (req, res) {
  res.sendFile(path.join(viewsPath, 'home.html'))
})

