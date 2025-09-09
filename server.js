//Express server inizalization
const express = require('express')
const app = express()
const port = 3000
const postsRouter = require('./routers/post')


//for use sttic resources
app.use(express.static('public'))
app.use("/api/posts", postsRouter)


app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`)
})


//index
app.get('/', (req, res) => {
    res.json(blogArticles)
})

