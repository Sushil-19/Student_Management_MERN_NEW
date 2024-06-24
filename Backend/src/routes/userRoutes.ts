import { Router } from 'express';
import { loginUser, registerUser } from '../controller/userController';

const router = Router();

router.post('/login', loginUser);
router.post('/register', registerUser);

export default router;