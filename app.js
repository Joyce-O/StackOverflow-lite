import express from 'express';
import bodyParser from 'body-parser';
import router from './server/routes/questionsRoute';


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1', router);

const port = process.env.PORT || 3300;

app.listen(port, () => console.log(`App is listening on port ${port}`));
