import { Router } from 'express';
import { userController } from '../controllers/user.controller.js';

const userRoutes = Router();

userRoutes.get('/user', userController.findAll);
userRoutes.get('/user/:id', userController.findOne);
userRoutes.post('/user', userController.create);
userRoutes.patch('/user', userController.update);
userRoutes.delete('/user/:id', userController.remove);

export default userRoutes;
