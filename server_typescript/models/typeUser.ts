export type CreateUserResponse = {
  success: boolean;
  errorMessage?: string;
};

export type User = {
  email: string;
  userId: string;
  authProvider: string;
  createdAt: Date;
  verified: boolean;
  tokenConfirmEmail: string;
  tokenReset: string;
};

export type UserLoginResponse = {
  status: string;
  user?: User;
  token?: string;
  errorMessage?: string;
};

export type CheckSessionResponse = {
  status: string;
  errorMessage?: string;
};

export type ResetPasswordResponse = {
  status: string;
  errorMessage?: string;
};

export type ResetPasswordConfirmResponse = {
  status: string;
  user?: User;
  errorMessage?: string;
};

export type ResendEmailConfirmationResponse = {
  status: string;
  errorMessage?: string;
};

export type EmailConfirmationResponse = {
  status: string;
  user?: User;
  errorMessage?: string;
};
