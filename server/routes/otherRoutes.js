import express from 'express';

const router = express.Router();

router.get('/api/v1', (request, response) => {
    response.status(200)
      .json({
        message: 'This is stackOverflow-lite. Post questions, view questions, post answers, and view answers to question'
      });
  });

  router.all('*', (request, response) => {
    response.status(404)
      .json({
        status: 'Error',
        message: 'Invalid URL'
      });
  });

export default router;