const { Router } = require('express')
const router = Router()

const movies = require('../sample.json')

// routes
router.get('/', (req, res) => {
    res.json(movies)
})

router.post('/', (req, res) => {
    const { title, director, year, rating, } = req.body
    if (title && director && year && rating) {
        const newMovie = { id: movies.length + 1, ...req.body }
        movies.push(newMovie)
        res.json(movies)
    } else {
        res.status(400).json({ error: 'something went wrong' })
    }
})

router.put('/:id', (req, res) => {
    const id = +req.params.id
    const { title, director, year, rating } = req.body
    if (title && director && year && rating) {
        for (let i = 0; i < movies.length; i++) {
            if (movies[i].id === id) {
                movies[i].title = title
                movies[i].director = director
                movies[i].rating = rating
                movies[i].year = year
                res.send(`Element with ID = ${id} was updated `)
                return
            }
        }
    } else {
        res.status(400).send('error')
    }
})

router.delete('/:id', (req, res) => {
    const id = +req.params.id
    if (!id) {
        res.status(400).send('Id not valid')
        return
    }
    console.log('type of', typeof id);
    const movieIndex = movies.findIndex((movie) => {
        console.log('movie', movie);
        console.log('movieId', movie.id);
        console.log('param Id', id);
        return movie.id == id
    })
    console.log(movieIndex);
    if (movieIndex > -1) {
        movies.splice(movieIndex, 1)
        res.send(`movie with id = ${id} eliminated`)
    } else {
        res.send(`movie with id = ${id} not found`)
    }
    console.log('----- next line');
})


module.exports = router

