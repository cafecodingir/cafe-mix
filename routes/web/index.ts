import express from 'express'
const router = express.Router()
import homeRoutes from './home'
import adminRoutes from './admin'
import HomeController from '../../app/http/controllers/HomeController'

router.get('/', HomeController[404])

//Home routes from home.ts
router.use(`/${process.env.BASE_ROUTE}`, homeRoutes)
// //Admin routes from admin.ts
router.use(`/${process.env.BASE_ROUTE}/admin`, adminRoutes)

export default router
