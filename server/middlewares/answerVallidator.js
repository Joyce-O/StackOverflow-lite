import questions from '../dummyData/questionsObj';


class AnswerValidator {
    static postAnswerValidator(request, response, next) {
        let { newAnswer } = request.body;
        if (newAnswer === undefined) {
          return response.status(400)
            .json({
              status: 'Error',
              message: 'Answer cannot be undefined'
            });
        }
        newAnswer = newAnswer.trim();
        if (newAnswer === '') {
          return response.status(400)
            .json({
              status: 'Error',
              message: 'Answer cannot be empty'
            });
        }
        if (newAnswer.length < 3 || newAnswer.length > 300) {
          return response.status(400)
            .json({
              status: 'Error',
              message: 'Answer should be 3 to 300 characters long'
            });
        }
        request.body.newAnswer = newAnswer;
        next();//End Answer validator 
      }
    
}

export default AnswerValidator;