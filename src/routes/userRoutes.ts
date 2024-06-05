import { Router } from 'express';
import { registerUser, loginUser, getUsers } from '../controllers/userController';
import { protect } from '../middleware/authMiddleware';
import { IReqAuth } from '../config/interface';

const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

router.get('/protected', protect, (req:IReqAuth, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});

router.get('/', protect, getUsers);

export { router as userRoutes };
