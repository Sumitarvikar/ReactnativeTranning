export interface LoginResponse {
  success: boolean;
  message?: string;
  token?: string;
}

export interface InitialValues {
  username?: string;
  password?: string;
}
