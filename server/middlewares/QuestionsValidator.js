import questions from '../sessionData/questionsObj';


class QuestionsValidator {
//Validates questionId
    static getQuestionValidator (request, response, next) {
        const {questionId} = request.params;
        const requestedQues = questions.find(question => question.id === parseInt(questionId, 10));

        if (!requestedQues) {
            return response.status(404)
            .json ({
                status: 'Error',
                message: 'Invalid question ID'
            });
        }
        request.body.requestedQues = requestedQues;
        next();//End get question validation
    }

    static postQuestionValidator(request, response, next) {
        let { title, content, tag } = request.body;
        if (title === undefined) {
          return response.status(400)
            .json({
              status: 'Error',
              message: 'Title cannot be undefined'
            });
        }
        title = title.trim();
        if (title === '') {
          return response.status(400)
            .json({
              status: 'Error',
              message: 'Title cannot be empty'
            });
        }
        if (title.length < 4 || title.length > 20) {
          return response.status(400)
            .json({
              status: 'Error',
              message: 'Title should be 4 to 20 characters long'
            });
        } // End title validation
    
        if (content === undefined) {
          return response.status(400)
            .json({
              status: 'Error',
              message: 'Content cannot be undefined'
            });
        }
        content = content.trim();
        if (content === '') {
          return response.status(400)
            .json({
              status: 'Error',
              message: 'Content cannot be empty'
            });
        }
        if (content.length < 10 || content.length > 300) {
          return response.status(400)
            .json({
              status: 'Error',
              message: 'Content should be 10 to 300 characters long'
            });
        } // End content validation
    
        if (tag === undefined) {
          return response.status(400)
            .json({
              status: 'Error',
              message: 'tag cannot be undefined'
            });
        }
        tag = tag.trim();
        if (tag === '') {
          return response.status(400)
            .json({
              status: 'Error',
              message: 'tag cannot be empty'
            });
        }
        if (tag.length < 3 || tag.length > 20) {
          return response.status(400)
            .json({
              status: 'Error',
              message: 'Tag should be 3 to 20 characters long'
            });
        } // tag validation
        request.body.title = title;
        request.body.content = content;
        request.body.tag = tag;
        next();
      } // End post question Validation

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

export default QuestionsValidator;