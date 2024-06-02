import express from 'express';
import {messageController} from '../controller/authController.js'


const router = express.Router();

router.post('/register',messageController)


export default router