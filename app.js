const express = require('express')
const app = express()
const port  = 3100;



app.use(express.static('public'))
app.set('view engine','jade');
app.get('/', (req,res) => res.send('hello world !') )
app.listen(port, () => console.log ('Example app listening on port', +port))


