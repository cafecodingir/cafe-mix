import { Request, Response } from 'express'

class homeController {
  404(req: Request, res: Response) {
    res.render('404')
  }

  index(req: Request, res: Response) {
    res.render('index')
  }

  login_form(req: Request, res: Response) {
    res.render('login')
  }

  register_form(req: Request, res: Response) {
    res.render('register')
  }

  message_route(req: Request, res: Response) {
    res.send(this.message())
  }

  message() {
    return 'Home Page From Message'
  }
}

export default new homeController()
