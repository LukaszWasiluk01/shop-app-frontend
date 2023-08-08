import React, { useState } from 'react'
import { Form, useActionData } from 'react-router-dom'

import { type LoginResponseData } from '../interfaces/userInterfaces'

import styles from './LoginForm.module.css'

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const data = useActionData() as LoginResponseData

  return (
    <div className={styles.loginContainer}>
      <h2>Login</h2>
      <Form method="POST" className={styles.form}>
        {data?.non_field_errors !== undefined && (
          <ul>
            {data.non_field_errors.map((error) => (
              <li key={error} className={styles.error}>{error}</li>
            ))}
          </ul>
        )}
        <p>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            name="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value)
            }}
            required
            className={styles.input}
          />
        </p>
        <p>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            required
            className={styles.input}
          />
        </p>
        <div className={styles.actions}>
          <button type="submit" className={styles.button}>
            Login
          </button>
        </div>
      </Form>
    </div>
  )
}

export default LoginForm
