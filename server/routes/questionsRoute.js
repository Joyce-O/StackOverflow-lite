import express from 'express';
import questionsClass from '../controllers/QuestionsHandler';


const router = express.Router();

router.get('/questions', questionsClass.getAllQuestions);
router.get('/questions/:questionId', questionsClass.getQuestion);

export default router;