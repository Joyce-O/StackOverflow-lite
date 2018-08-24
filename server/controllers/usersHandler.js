import pool from '../database/connection';

class UserHandler {
  static signupUser(request, response) {
    const { name, username, email, password } = request.body;
      
    const sqlQuery = 'insert into users (name, username, email, password) values ($1, $2, $3, $4) returning *';
    const variables = [name, username, email, password];
      //pool connects to database and queries
    pool.query(sqlQuery, variables)
    //A promise
      .then((result) => {
       
        console.log('SIGNUP RESULT', result);
        const userData = result.rows[0];
        response.status(201)
          .json({
            message: `Congratulations ${userData.username}, account created successfully`
          });
      })
      .catch((error) => {
        console.log('CATCH ERROR:', error.message);
      });
  }
}
export default UserHandler;