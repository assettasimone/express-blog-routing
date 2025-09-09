const express = require('express')
const router = express.Router()


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


// show route specific post via id
router.get('/:id', (req, res) => {
    const { id } = req.params
    const post = blogArticles.find(item => item.id === parseInt(id))

    res.json(post)

})

//create
router.post('/', (req, res) => {

    res.send('hai creato un nuovo post')
})

//Update a post with a specific id
router.put('/:id', (req, res) => {
    res.send(`hai aggiornato il post con id ${req.params.id}`)
})

//patch a post with specific id
router.patch('/:id', (req, res) => {
    res.send(`aggiornato con successo il post con id ${req.params.id} `)
})

//delete route for delete a specific post
router.delete('/:id', (req, res) => {
    res.send(`deleted post with id ${req.params.id}`)
})


module.exports = router