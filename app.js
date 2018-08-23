import express from 'express';
import bodyParser from 'body-parser';
import { questionsRouter, answerRouter } from './server/routes/index';
// import answerRouter from './server/routes/answerRoute';


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// console.log('HEREER');
app.use('/api/v1', questionsRouter);
app.use('/api/v1', answerRouter);

router.all('/*', (request, response) => {
    response.status(404)
      .json({
        status: 'Error',
        message: 'Page not found!'
      });
  });


const port = process.env.PORT || 3300;

app.listen(port, () => console.log(`App is listening on port ${port}`));


export default app;