const {Router} = require('express')
const { model } = require('mongoose')
const router = Router()

router.post('/register', async (req, res) => {
    try {
        const {email, password} = req.body

        

    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так... Попробуйте снова'})
    }
})


router.post('/login', async (req, res) => {

})

module.exports = router