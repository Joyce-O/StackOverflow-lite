# StackOverflow-lite

[![Build Status](https://travis-ci.org/Joyce-O/StackOverflow-lite.svg?branch=dev)](https://travis-ci.org/Joyce-O/StackOverflow-lite) [![Coverage Status](https://coveralls.io/repos/github/Joyce-O/StackOverflow-lite/badge.svg?branch=dev)](https://coveralls.io/github/Joyce-O/StackOverflow-lite?branch=dev)  [![Maintainability](https://api.codeclimate.com/v1/badges/244e7769d7f70afe94a3/maintainability)](https://codeclimate.com/github/Joyce-O/StackOverflow-lite/maintainability)

## Description
StackOverflow-lite is a platform where people can ask questions and provide answers.
<br><b>UI:</b> https://joyce-o.github.io/StackOverflow-lite/UI
<br><b>hosted API endpoints: </b>https://stackoverflow-lite-joyce-app
/api/v1/

## Table of contents
- [Features] (# features)
- [Technologies] (# technologies)
- [Installation] (# installation)
- [Start the App] (# start-stackoverflow-lite-app)
- [Testing] (# testing)
- [API EndPoints] (# api -end-points)

## Features
See features below:

- Post question <br>
```
    {
      title: 
      content:
      tag:
    }
```
- Post answer <br>
```
    {
        newAnswer:
    }
```
- Get all questions <br>
- Get a specific question <br>
- Delete a question <br>

## Technologies

NodeJS: visit [here](https://nodejs.org/en/) for more information
ExpressJS: visit [here](https://expressjs.com) for more information
ES6: visit [here](https://en.wikipedia.org/wiki/ECMASCRIPT) for more information
Airbnb style guide:  visit [here](https://github.com/airbnb/javascript) for more information

## Installation
- clone the repo <br>
- npm install <br> 

## start stackoverflow-lite app
- npm start <br>
- Use postman to test enpoints

## Testing

- npm test

## API EndPoints
<table>
<tr><th>HTTP VERB</th><th>ENDPOINTS</th><th>FUNCTION</th></tr>

<tr><td>POST</td> <td>/questions</td> <td>Post a question</td></tr>

<tr><td>POST</td> <td>/questions/:questionId/answer</td> <td>Post answer</td></tr>

<tr><td>GET</td> <td>/questions</td> <td>Get all questions</td></tr>

<tr><td>GET</td> <td>/questions/:questionId/</td> <td>Get a speci question</td></tr>

<tr><td>DELETE</td> <td>/questions/:questionId</td> <td>Delete a speci question</td></tr>

</table>