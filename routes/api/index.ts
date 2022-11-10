import express from 'express'
import cors from 'cors'
const router = express.Router()

router.use(cors())

router.get('/', (req, res) => {
  res.json({ api: 'Hey there' })
})

export default router
