import React from 'react'
import { Form, useNavigation, useActionData } from 'react-router-dom'
import { type RegisterResponseData } from '../interfaces/userInterfaces'
import styles from './RegisterForm.module.css'

const RegisterForm: React.FC = () => {
  const navigation = useNavigation()
  const data = useActionData() as RegisterResponseData

  const isSubmitting = navigation.state === 'submitting'

  return (
    <div className={styles.registerContainer}>
      <h2>Register</h2>
      <Form method="POST" className={styles.form}>
        {data?.username !== undefined && (
          <ul className={styles.errorList}>
            {data.username.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        <p>
          <label className={styles.label} htmlFor="username">
            Username
          </label>
          <input id="username" type="text" name="username" required />
        </p>
        {data?.email !== undefined && (
          <ul className={styles.errorList}>
            {data.email.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        <p>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input id="email" type="email" name="email" required />
        </p>
        {data?.password !== undefined && (
          <ul className={styles.errorList}>
            {data.password.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        <p>
          <label className={styles.label} htmlFor="password1">
            Password
          </label>
          <input id="password1" type="password" name="password1" required />
        </p>
        {data?.password2 !== undefined && (
          <ul className={styles.errorList}>
            {data.password2.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        <p>
          <label className={styles.label} htmlFor="password2">
            Confirm Password
          </label>
          <input id="password2" type="password" name="password2" required />
        </p>
        <div className={styles.actions}>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Register'}
          </button>
        </div>
      </Form>
    </div>
  )
}

export default RegisterForm
