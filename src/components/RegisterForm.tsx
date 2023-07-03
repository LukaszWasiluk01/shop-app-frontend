import React from 'react'
import { Form, useNavigation, useActionData } from 'react-router-dom'
import './RegisterModule.css'

export interface UserRegister {
  username: string
  email: string
  password1: string
  password2: string
}

interface RegisterResponseData {
  email?: string[]
  username?: string[]
  password?: string[]
  password2?: string[]
}

const RegisterForm: React.FC = () => {
  const navigation = useNavigation()
  const data = useActionData() as RegisterResponseData

  const isSubmitting = navigation.state === 'submitting'

  return (
    <div className="register-container">
      <h2>Register</h2>
      <Form method="POST" className="form">
        {data?.username !== undefined && (
          <ul className="error-list">
            {data.username.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        <p>
          <label className="label" htmlFor="username">
            Username
          </label>
          <input id="username" type="text" name="username" required />
        </p>
        {data?.email !== undefined && (
          <ul className="error-list">
            {data.email.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        <p>
          <label className="label" htmlFor="email">
            Email
          </label>
          <input id="email" type="email" name="email" required />
        </p>
        {data?.password !== undefined && (
          <ul className="error-list">
            {data.password.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        <p>
          <label className="label" htmlFor="password1">
            Password
          </label>
          <input id="password1" type="password" name="password1" required />
        </p>
        {data?.password2 !== undefined && (
          <ul className="error-list">
            {data.password2.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        <p>
          <label className="label" htmlFor="password2">
            Confirm Password
          </label>
          <input id="password2" type="password" name="password2" required />
        </p>
        <div className="actions">
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Register'}
          </button>
        </div>
      </Form>
    </div>
  )
}

export default RegisterForm
