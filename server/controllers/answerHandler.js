import questions from '../dummyData/questionsObj';

class AnswerHandler {

static postAnswer(request, response) {
    const { newAnswer, requestedQues } = request.body;
    const id = requestedQues.answer.length + 1;
    const submittedAnswer = {
      id,
      newAnswer
    };
    requestedQues.answer.push(submittedAnswer);
    requestedQues.answer.reverse();
    return response.status(201)
      .json({
        message: 'Thank you! Your answer was recorded',
        question: requestedQues
      });
  }
}

export default AnswerHandler;
