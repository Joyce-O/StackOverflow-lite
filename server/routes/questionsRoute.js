import express from 'express';
import questionsClass from '../controllers/QuestionsHandler';
import QuestionsValidator from '../middlewares/QuestionsValidator';

const { getAllQuestions, getQuestion, postQuestion, postAnswer, deleteQuestion } = questionsClass;
const { getQuestionValidator, postQuestionValidator, postAnswerValidator,  } = QuestionsValidator;

const router = express.Router();

router.get('/questions', getAllQuestions);
router.get('/questions/:questionId', getQuestionValidator, getQuestion);
router.post('/questions', postQuestionValidator, postQuestion);
router.delete('/questions/:questionId', getQuestionValidator, deleteQuestion);


export default router;