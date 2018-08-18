import questions from '../sessionData/questionsObj';

class QuestionsHandler {
    static getAllQuestions (request, response) {
        response.status(200)
        .json ({
            message: 'List of all questions', questions
        });
    }

    static getQuestion(request, response) {
        const {requestedQues} = request.body;
        response.status(200)
          .json({
            message: 'Request was successful',
            requestedQues
          });
      
    }

    static postQuestion(request, response) {
        const { title, content, tag } = request.body;
        const id = questions[questions.length - 1].id + 1;
        const newQuestion = {
          id,
          title,
          content,
          tag
        };
        questions.push(newQuestion);
        response.status(201)
          .json({
            message: 'Question has been recorded',
            newQuestion
          });
    }

    static getQuestion(request, response) {
      const { requestedQues } = request.body;
      response.status(200)
        .json({
          message: 'Request was successful',
          requestedQues
        });
    }
  
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
          requestedQues
        });
    }
    
    static deleteQuestion(request, response) {
      const { requestedQues } = request.body;
      questions.splice(requestedQues.id - 1, 1);
      return response.status(200)
        .json({
          message: `Question with title '${requestedQues.title}' has been deleted`,
          questions
        });
    }
    
}

export default QuestionsHandler;