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
