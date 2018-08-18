import express from 'express';
import questionsClass from '../controllers/QuestionsHandler';
import QuestionsValidator from '../middlewares/QuestionsValidator';

const { getAllQuestions, getQuestion } = questionsClass;
const { getQuestionValidator } = QuestionsValidator;


const router = express.Router();

router.get('/questions', getAllQuestions);
router.get('/questions/:questionId', getQuestionValidator,getQuestion);

router.get('/', (request, response) => {
    response.status(200)
      .json({
        message: 'This is stackOverflow-lite. Post questions, view questions, post answers, and view answers to question'
      });
  });

export default router;