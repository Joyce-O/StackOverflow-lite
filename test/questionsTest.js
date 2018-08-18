import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';
import questions from '../server/sessionData/questionsObj';

const { expect } = chai;

chai.use(chaiHttp);

const correctQuestion = {
    title: 'How to merge to git branches',
    content: 'How do I merge two different git branches to master?',
    tag: 'git'
};

const undefinedTitle = {
    content: 'How do I merge two different git branches to master?',
    tag: 'git'
};

const undefinedContent = {
    title: 'How to merge to git branches',
    tag: 'git'
};

const undefinedTag = {
    title: 'How to merge to git branches',
    content: 'How do I merge two different git branches to master?'
};

const emptyTitle = {
    title: '',
    content: 'How do I merge two different git branches to master?',
    tag: 'git',
};

const emptyContent = {
    title: 'How to merge to git branches',
    content: '',
    tag: 'git',
};

const emptyTag = {
    title: 'How to merge to git branches',
    content: 'How do I merge two different git branches to master?',
    tag: '',
};

const titleLength = {
    title: 'ow',
    content: 'How do I merge two different git branches to master?',
    tag: 'git',
};

const contentLength = {
    title: 'How to merge to git branches',
    content: 'How',
    tag: 'git',
};

const tagLenght = {
    title: 'How to merge to git branches',
    content: 'How do I merge two different git branches to master?',
    tag: 'it',
};

const correctAnswer = {
    newAnswer: 'Check link for answer'
};

const undefinedAnswer = {

};

const emptyAnswer = {
    newAnswer: ''
};

const answerLength = {
    newAnswer: 'ik'
};


describe("StackOverflow-lite", () => {

    describe("General test for wrong api endpoint", () => {
        describe('Test for Homepage', () => {
            it('It should return the specified welcome message and status 200', (done) => {
                chai.request(app)
                    .get('/api/v1')
                    .end((error, response) => {
                        expect(response).to.have.status(200);
                        expect(response.body.message).to.equal('This is stackOverflow-lite. Post questions, view questions, post answers, and view answers to question');
                        done();
                    });
            });
        });

        describe('Test for Undefined URL', () => {
            it('It should return status code 404', (done) => {
                chai.request(app)
                    .get('/api/v1/undefined')
                    .end((error, response) => {
                        expect(response).to.have.status(404);
                        done();
                    });
            });
        });

    });

    describe('Test for POST question', () => {
        it('Should return 400 for undefined Title', (done) => {
            chai.request(app)
                .post('/api/v1/questions')
                .send(undefinedTitle)
                .end((error, response) => {
                    expect(response).to.have.status(400);
                    expect(response.body.message).to.equal('Title can not be undefined');
                    done();
                });
        });
        it('Should return 400 for empty Title', (done) => {
            chai.request(app)
                .post('/api/v1/questions')
                .send(emptyTitle)
                .end((error, response) => {
                    expect(response).to.have.status(400);
                    expect(response.body.message).to.equal('Title can not be empty');
                    done();
                });
        });
        it('Should return 400 for Title with invalid length', (done) => {
            chai.request(app)
                .post('/api/v1/questions')
                .send(titleLength)
                .end((error, response) => {
                    expect(response).to.have.status(400);
                    expect(response.body.message).to.equal('Title should be 4 to 20 characters long');
                    done();
                });
        });

        it('Should return 400 for undefined Content', (done) => {
            chai.request(app)
                .post('/api/v1/questions')
                .send(undefinedContent)
                .end((error, response) => {
                    expect(response).to.have.status(400);
                    expect(response.body.message).to.equal('Content can not be undefined');
                    done();
                });
        });
        it('Should return 400 for empty Content', (done) => {
            chai.request(app)
                .post('/api/v1/questions')
                .send(emptyContent)
                .end((error, response) => {
                    expect(response).to.have.status(400);
                    expect(response.body.message).to.equal('Content can not be empty');
                    done();
                });
        });
        it('Should return 400 for invalid Content length', (done) => {
            chai.request(app)
                .post('/api/v1/questions')
                .send(contentLength)
                .end((error, response) => {
                    expect(response).to.have.status(400);
                    expect(response.body.message).to.equal('Content should be 10 to 300 characters long');
                    done();
                });
        });

        it('Should return 400 for undefined Tag', (done) => {
            chai.request(app)
                .post('/api/v1/questions')
                .send(undefinedTag)
                .end((error, response) => {
                    expect(response).to.have.status(400);
                    expect(response.body.message).to.equal('tag can not be undefined');
                    done();
                });
        });
        it('Should return 400 for empty Tag', (done) => {
            chai.request(app)
                .post('/api/v1/questions')
                .send(emptyTag)
                .end((error, response) => {
                    expect(response).to.have.status(400);
                    expect(response.body.message).to.equal('tag can not be empty');
                    done();
                });
        });
        it('Should return 400 for invalid Tag length', (done) => {
            chai.request(app)
                .post('/api/v1/questions')
                .send(tagLenght)
                .end((error, response) => {
                    expect(response).to.have.status(400);
                    expect(response.body.message).to.equal('Tag should be 3 to 20 characters long');
                    done();
                });
        });

        it('Should return 201 for successful post', (done) => {
            const newQuestionsLength = questions.length + 1;
            chai.request(app)
                .post('/api/v1/questions')
                .send(correctQuestion)
                .end((error, response) => {
                    expect(response).to.have.status(201);
                    expect(response.body.message).to.equal('Thank you! Your answer was recorded');
                    expect(questions).to.have.length(newQuestionsLength);
                    done();
                });
        });
    });

    describe('TEST for GET all questions', () => {
  it('should return 200 for sunccess', (done) => {
    chai.request(app)
      .get('/api/v1/questions')
      .end((error, response) => {
        expect(response).to.have.status(200);
        done();
      });
  });
});

describe('TEST for GET a specific question', () => {
  it('should return 404 for failure', (done) => {
    chai.request(app)
      .get('/api/v1/questions/100')
      .end((error, response) => {
        expect(response).to.have.status(404);
        expect(response.body.message).to.equal('Invalid question ID');
        done();
      });
  });
  it('should return 200 for success', (done) => {
    chai.request(app)
      .get('/api/v1/questions/1')
      .end((error, response) => {
        expect(response).to.have.status(200);
        expect(response.body.message).to.equal('Request was successful');
        done();
      });
  });
});

describe('TEST for POST answers', () => {
  it('should return 400 for undefined answer', (done) => {
    chai.request(app)
      .post('/api/v1/questions/1/answers')
      .send(undefinedAnswer)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Answer cannot be undefined');
        done();
      });
  });
  it('should return 400 for empty answer', (done) => {
    chai.request(app)
      .post('/api/v1/questions/1/answers')
      .send(emptyAnswer)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Answer cannot be empty');
        done();
      });
  });
  it('should return 400 for invalid answer length', (done) => {
    chai.request(app)
      .post('/api/v1/questions/1/answers')
      .send(answerLength)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Answer should be 3 to 300 characters long');
        done();
      });
  });
  it('should return 404 posting answer on non-existing Question ID', (done) => {
    chai.request(app)
      .post('/api/v1/questions/100/answers')
      .send(correctAnswer)
      .end((error, response) => {
        expect(response).to.have.status(404);
        expect(response.body.message).to.equal('Invalid question ID');
        done();
      });
  });
  it('should return 201 posting answer successfully', (done) => {
    chai.request(app)
      .post('/api/v1/questions/2/answers')
      .send(correctAnswer)
      .end((error, response) => {
        expect(response).to.have.status(201);
        expect(response.body.message).to.equal('Thank you! Your answer was recorded');
        done();
      });
  });
});

});
