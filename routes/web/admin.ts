import express from 'express'
const router = express.Router()

//Controllers
import adminController from './../../app/http/controllers/admin/indexController'

router.get('/', adminController.index)
router.get('/users', adminController.users)

export default router
