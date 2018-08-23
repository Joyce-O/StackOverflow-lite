import express from 'express';
import answerClass from '../controllers/answerHandler';
import answerValidator from '../middlewares/answerVallidator';
import QuestionsValidator from '../middlewares/QuestionsValidator';


const { postAnswer } = answerClass;
const { postAnswerValidator } = answerValidator;
const { getQuestionValidator } = QuestionsValidator;

const router = express.Router();

router.post('/questions/:questionId/answers', getQuestionValidator, postAnswerValidator, postAnswer);

export default router;