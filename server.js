//Express server inizalization
const express = require('express')
const app = express()
const port = 3000

const blogArticles = [
    {
        id: 1,
        title: 'il mio primo Articolo',
        content: 'Questo è il contenuto del mio primo articolo',
        coverImage: 'imgs/anatra1.jpg',
        tags: ['tag1', 'tag2', 'tag3']
    },
    {
        id: 2,
        title: 'il mio secondo Articolo',
        content: 'Questo è il contenuto del mio secondo articolo',
        coverImage: 'imgs/anatra2.jpg',
        tags: ['tag1', 'tag2', 'tag3']
    },
    {
        id: 3,
        title: 'il mio terzo Articolo',
        content: 'Questo è il contenuto del mio terzo articolo',
        coverImage: 'imgs/anatra3.jpg',
        tags: ['tag1', 'tag2', 'tag3']
    },
    {
        id: 4,
        title: 'il mio quarto Articolo',
        content: 'Questo è il contenuto del mio quarto articolo',
        coverImage: 'imgs/anatra4.jpg',
        tags: ['tag1', 'tag2', 'tag3']
    },
    {
        id: 5,
        title: 'il mio quinto Articolo',
        content: 'Questo è il contenuto del mio quinto articolo',
        coverImage: 'imgs/anatra5.jpg',
        tags: ['tag1', 'tag2', 'tag3']
    }
]

//for use sttic resources
app.use(express.static('public'))

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`)
})


//index
app.get('/', (req, res) => {

    res.send('First route')
})

// show route specific post via id
app.get('/api/posts/:id', (req, res) => {

    res.send(`ha selezionato il post con id: ${req.params.id}`)

})

//create
app.post('/api/posts/', (req, res) => {

    res.send('hai creato un nuovo post')
})

//Update a post with a specific id
app.put('/api/posts/:id', (req, res) => {
    res.send(`hai aggiornato il post con id ${req.params.id}`)
})

