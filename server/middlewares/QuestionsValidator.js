import questions from '../sessionData/questionsObj';


class QuestionsValidator {
//Validates questionId
    static getQuestionValidator (request, response, next) {
        const {questionsId} = request.params;
        const requestedQues = questions.find(question => question.id === parseInt(questionsId, 10));

        if (!requestedQues) {
            return response.status(404)
            .json ({
                status: 'Error',
                message: 'Invalid question ID'
            });
        }
        request.body.requestedQues = requestedQues;
        next();//End question validation
    }
}

export default QuestionsValidator;