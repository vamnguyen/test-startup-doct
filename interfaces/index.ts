export interface InputStateForm {
  firstName?: { isError: boolean; errorMessage: string; value: string };
  lastName?: { isError: boolean; errorMessage: string; value: string };
  email?: { isError: boolean; errorMessage: string; value: string };
  password?: { isError: boolean; errorMessage: string; value: string };
  confirmPassword?: { isError: boolean; errorMessage: string; value: string };
  phoneNumber?: { isError: boolean; errorMessage: string; value: string };
  address?: { isError: boolean; errorMessage: string; value: string };
}
