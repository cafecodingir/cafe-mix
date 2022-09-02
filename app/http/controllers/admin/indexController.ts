import { Request, Response } from 'express'

class adminController {
  index(req: Request, res: Response) {
    res.send('Admin Page')
  }

  users(req: Request, res: Response) {
    res.send('Users Page')
  }
}

export default new adminController()
