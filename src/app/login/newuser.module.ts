export interface NewUser{
  email: string,
  password: string,
  returnSecureToken?: string
}

export interface AuthResponse{
  idToken: string,
  email: string,
  refreshToken: string
  expiresIn:  any
  localId: string,
  registered?: boolean
}