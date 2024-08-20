export interface LoginResponse {
  success: boolean;
  message?: string;
  token?: string;
}

export interface InitialValues {
  username?: string;
  password?: string;
}

export interface Iuser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface IuserListApiResponse {
  data: Iuser[];
}
