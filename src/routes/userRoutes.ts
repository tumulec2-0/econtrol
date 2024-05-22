import { Router } from 'express';
import { registerUser, loginUser } from '../controllers/userController';
import { protect } from '../middleware/authMiddleware';

const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

router.get('/protected', protect, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});

export { router as userRoutes };
