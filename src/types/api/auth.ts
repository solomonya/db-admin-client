export interface IAuthData {
  username: string;
  password: string;
}

export interface IAuthResponse {
  access_token: string;
  token_type: 'bearer';
}
