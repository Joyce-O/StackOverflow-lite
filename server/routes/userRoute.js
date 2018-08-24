import express from 'express';
import userClass from '../controllers/usersHandler';


const { signupUser, loginUser } = userClass;

const router = express.Router();

router.post('/auth/signup', signupUser);
router.post('/auth/login', loginUser);

export default router;