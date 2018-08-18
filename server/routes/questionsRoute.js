import express from 'express';
import questionsClass from '../controllers/QuestionsHandler';


const router = express.Router();

router.get('/questions', questionsClass.getAllQuestions);

export default router;