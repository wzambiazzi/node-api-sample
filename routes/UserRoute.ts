import { Router } from 'express';
import GeneralError from '../models/GeneralError';
import UserController from '../controllers/UserController';

class UserRouter {
  router: Router

  constructor() {
    this.router = Router();
    this.init();
  }

  static get(req, res) {
    console.log('ola user');
    console.log(req.params);
    console.log('tchau user');
    try {
      UserController.get(req.params.id).then((data) => {
        res.status(200).json(
          data,
        );
      })
        .catch((err) => {
          if (err instanceof GeneralError) {
            console.log(`error: - ${err.getMessageLog()}`);
            res.status(err.httpCode).json(err);
          } else {
            console.log(`error: && ${JSON.stringify({ message: err.message, error: err })}`);
            res.status(500).json('internal error');
          }
        });
    } catch (err) {
      console.log(`error: && ${JSON.stringify({ message: err.message, error: err })}`);
      res.status(500).json('internal error');
    }
  }

  static add(req, res) {
    console.log('post');
    console.log(req.params);
    console.log(req.body);
    try {
      UserController.add(req.body).then((data) => {
        res.status(200).json(
          data,
        );
      })
        .catch((err) => {
          if (err instanceof GeneralError) {
            console.log(`error: - ${err.getMessageLog()}`);
            res.status(err.httpCode).json(err);
          } else {
            console.log(`error: && ${JSON.stringify({ message: err.message, error: err })}`);
            res.status(500).json('internal error');
          }
        });
    } catch (err) {
      console.log(`error: && ${JSON.stringify({ message: err.message, error: err })}`);
      res.status(500).json('internal error');
    }
  }
  
  static update(req, res) {
    console.log('patch');
    console.log(req.params);
    console.log(req.body);
    try {
      UserController.get(req.body).then((data) => {
        res.status(200).json(
          data,
        );
      })
        .catch((err) => {
          if (err instanceof GeneralError) {
            console.log(`error: - ${err.getMessageLog()}`);
            res.status(err.httpCode).json(err);
          } else {
            console.log(`error: && ${JSON.stringify({ message: err.message, error: err })}`);
            res.status(500).json('internal error');
          }
        });
    } catch (err) {
      console.log(`error: && ${JSON.stringify({ message: err.message, error: err })}`);
      res.status(500).json('internal error');
    }
  }


  static getAll(req, res) {
    try {
      UserController.getAll().then((data) => {
        res.status(200).json(
          data,
        );
      })
        .catch((err) => {
          if (err instanceof GeneralError) {
            console.log(`error: - ${err.getMessageLog()}`);
            res.status(err.httpCode).json(err);
          } else {
            console.log(`error: && ${JSON.stringify({ message: err.message, error: err })}`);
            res.status(500).json('internal error');
          }
        });
    } catch (err) {
      console.log(`error: && ${JSON.stringify({ message: err.message, error: err })}`);
      res.status(500).json('internal error');
    }
  }


  init() {
    this.router.get('/:id', UserRouter.get);
    this.router.post('/', UserRouter.add);
    this.router.patch('/', UserRouter.update);
    this.router.get('/', UserRouter.getAll);
  }
}

const userRouter = new UserRouter();
userRouter.init();

export default userRouter.router;