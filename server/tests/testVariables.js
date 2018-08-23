const { expect } = chai;

chai.use(chaiHttp);

const correctQuestion = {
    title: 'How to merge to git',
    content: 'How do I merge two different git branches to master?',
    tag: 'git'
};

const undefinedTitle = {
    content: 'How do I merge two different git branches to master?',
    tag: 'git'
};

const undefinedContent = {
    title: 'How to merge to git',
    tag: 'git'
};

const undefinedTag = {
    title: 'How to merge to git',
    content: 'How do I merge two different git branches to master?'
};

const emptyTitle = {
    title: '',
    content: 'How do I merge two different git branches to master?',
    tag: 'git',
};

const emptyContent = {
    title: 'How to merge to git',
    content: '',
    tag: 'git',
};

const emptyTag = {
    title: 'How to merge to git',
    content: 'How do I merge two different git branches to master?',
    tag: '',
};

const titleLength = {
    title: 'ow',
    content: 'How do I merge two different git branches to master?',
    tag: 'git',
};

const contentLength = {
    title: 'How to merge to git',
    content: 'How',
    tag: 'git',
};

const tagLenght = {
    title: 'How to merge to git',
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

const { getAllQuestions, getQuestion, correctAnswer, undefinedAnswer, emptyAnswer answerLength;