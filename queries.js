
require('dotenv').config()
// console.log(process.env)


 const Pool = require('pg').Pool
  const pool = new Pool({
    user: process.env.user_id,
    host: process.env.host,
    database: process.env.database,
    password: process.env.password,
    port: process.env.db_port,
  })

  console.log(process.env.db_port)

  const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      console.log(results.rows)
      response.status(200).json(results.rows)
    })
  }
  
  const getUserById = (request, response) => {
  console.log(request.params.id)
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      console.log(results.rows)
      response.status(200).json(results.rows)
    })
  }
  
  const createUser = (request, response) => {
    const { name, email } = request.body
  
    pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
      if (error) {
        throw error
      }
      console.log(results.rows)
      response.status(201).send(`User added with ID: ${results.insertId}`)
    })
  }
  
  const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email } = request.body
  
    pool.query(
      'UPDATE users SET name = $1, email = $2 WHERE id = $3',
      [name, email, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
  }
  
  const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }
  
  module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  }