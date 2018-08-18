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
});
        