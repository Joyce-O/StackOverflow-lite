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
    
}

export default QuestionsHandler;