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
    
}

export default QuestionsHandler;