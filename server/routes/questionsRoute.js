import express from 'express';
import questionsClass from '../controllers/QuestionsHandler';
import QuestionsValidator from '../middlewares/QuestionsValidator';

const { getAllQuestions, getQuestion, postQuestion, postAnswer, deleteQuestion } = questionsClass;
const { getQuestionValidator, postQuestionValidator, postAnswerValidator,  } = QuestionsValidator;


const router = express.Router();

router.get('/questions', getAllQuestions);
router.get('/questions/:questionId', getQuestionValidator, getQuestion);
router.post('/questions', postQuestionValidator, postQuestion);
router.post('/questions/:questionId/answers', getQuestionValidator, postAnswerValidator, postAnswer);
router.delete('/questions/:questionId', getQuestionValidator, deleteQuestion);

router.get('/', (request, response) => {
    response.status(200)
      .json({
        message: 'This is stackOverflow-lite. Post questions, view questions, post answers, and view answers to question'
      });
  });

export default router;