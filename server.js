//Express server inizalization
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`)
})

app.get('/', (req, res) => {

    res.send('First route')
})