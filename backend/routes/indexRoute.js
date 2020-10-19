import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
    // res.render('index', { title: 'Personal Library' })
    res.send('API working...')
})

export default router
