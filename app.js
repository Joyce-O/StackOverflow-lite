import express from 'express';
import bodyParser from 'body-parser';
import { questionRoutes, answerRoutes, otherRoutes } from './server/routes/index';
//  import answerRouter from './server/routes/answerRoute';


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// console.log('HEREER');
app.use('/api/v1', questionRoutes);
app.use('/api/v1', answerRoutes);
app.use('/', otherRoutes);

const port = process.env.PORT || 3300;

app.listen(port, () => console.log(`App is listening on port ${port}`));


export default app;