import express from 'express';
import userClass from '../controllers/usersHandler';


const { signupUser } = userClass;

const router = express.Router();

router.post('/auth/signup', signupUser);

export default router;