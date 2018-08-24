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

  static loginUser(request, response) {
    const { username, password } = request.body;

    const sqlQuery = 'select * from users where username = $1';
    const variable = [username];

    pool.query(sqlQuery, variable)
      .then((result) => {
        console.log('LOGIN RESULT', result);

        const userData = result.rows[0];
        if (result.rowCount === 1) {
          if (password !== userData.password) {
            return response.status(403)
              .json({
                status: 'Error',
                message: 'Incorrect password'
              });
          }
          return response.status(200)
            .json({
              message: `Welcome back ${userData.username}`
            });
        }
        return response.status(401)
          .json({
            message: 'User does not exist in database',
            status: 'Error'
          });
      })
      .catch((error) => {
        console.log('CATCH ERROR:', error.message);
      });
  }
}
export default UserHandler;