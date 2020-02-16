import {Router} from 'express';
const routes = new Router();

import UserController  from './app/controllers/UserController';

function checkNameMiddlaware(req, res, next) {
  if(!req.body.name) {
    return res.status(400).json('Name is required');
  }
  return next()
}
  

routes.get('/user', UserController.list);

routes.get('/user/:id', UserController.findOne);

routes.post('/user', checkNameMiddlaware,  UserController.create);

routes.put('/user/:id', checkNameMiddlaware, UserController.update);

routes.delete('/user/:id', UserController.delete);

export default routes
  
  