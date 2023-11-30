export interface InputStateForm {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  phoneNumber?: string;
  address?: string;
}

export interface UserCredentials {
  email: string;
  password: string;
}
