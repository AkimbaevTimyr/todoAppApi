const Router = require('express')
const router = new Router()
const todoRouter = require('./todoRouter')
const userRouter = require('./userRouter')

router.use('/todo', todoRouter)
router.use('/user', userRouter)
router.get('/', (_, res) => res.send('Very good'))


module.exports = router