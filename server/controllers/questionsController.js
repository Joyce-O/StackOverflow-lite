import questions from '../sessionData/questionsObj';

class QuestionsHandler {
    static getAllQuestions (request, response) {
        response.status(200)
        .json ({
            message: 'List of all questions', questions
        });
    }
}