import express from 'express'
const router = express.Router()

//Controllers
import homeController from '../../app/http/controllers/HomeController'

// router.get('/', homeController.index.bind(homeController))
router.get('/', homeController.index)
router.get('/login', homeController.login_form)
router.get('/register', homeController.register_form)

export default router
