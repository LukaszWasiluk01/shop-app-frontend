import React, { useState } from 'react'
import { Form, useActionData } from 'react-router-dom'

import { type PasswordChangeResponseData } from '../interfaces/userInterfaces'

import styles from './PasswordChangeForm.module.css'

const PasswordChangeForm: React.FC = () => {
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')

  const data = useActionData() as PasswordChangeResponseData

  return (
    <div className={styles.loginContainer}>
      <h2>Change Password</h2>
      <Form method="POST" className={styles.form}>
        {data?.new_password2 !== undefined && (
          <ul>
            {data.new_password2.map((error) => (
              <li key={error} className={styles.error}>
                {error}
              </li>
            ))}
          </ul>
        )}
        <p>
          <label htmlFor="password1">New Password:</label>
          <input
            id="password1"
            type="password"
            name="password1"
            value={password1}
            onChange={(e) => {
              setPassword1(e.target.value)
            }}
            required
            className={styles.input}
          />
        </p>
        <p>
          <label htmlFor="password2">Confirm New Password:</label>
          <input
            id="password2"
            type="password"
            name="password2"
            value={password2}
            onChange={(e) => {
              setPassword2(e.target.value)
            }}
            required
            className={styles.input}
          />
        </p>
        <div className={styles.actions}>
          <button type="submit" className={styles.button}>
            Change
          </button>
        </div>
      </Form>
    </div>
  )
}

export default PasswordChangeForm
