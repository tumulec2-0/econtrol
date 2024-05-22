import { Router } from 'express';
import { registerUser, loginUser } from '../controllers/userController';
import { protect } from '../middleware/authMiddleware';

const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

export { router as userRoutes };
