export interface UserRegister {
  username: string
  email: string
  password1: string
  password2: string
}

export interface RegisterResponseData {
  email?: string[]
  username?: string[]
  password?: string[]
  password2?: string[]
}

export interface UserProps {
  email: string
  username: string
  date_joined: string
  last_login: string
}

export interface LoginResponseData {
  non_field_errors?: string[]
}
