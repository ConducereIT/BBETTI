/**
* This is an auto generated code. This code should not be modified since the file can be overwritten
* if new genezio commands are executed.
*/


export type User = {email: string, userId: string, authProvider: string, createdAt: Date, verified: boolean, tokenConfirmEmail: string, tokenReset: string, voteFata: boolean, voteBaiat: boolean};
export type UserLoginResponse = {status: string, user?: User, token?: string, errorMessage?: string};
export type CheckSessionResponse = {status: string, errorMessage?: string};
export type GetToken = {status: string, token?: string, errorMessage?: string};
export type ResetPasswordResponse = {status: string, errorMessage?: string};
export type ResetPasswordConfirmResponse = {status: string, user?: User, errorMessage?: string};
export type EmailConfirmationResponse = {status: string, user?: User, token?: string, errorMessage?: string};
export type ResendEmailConfirmationResponse = {status: string, errorMessage?: string};
export type VoteResponse = {status: string, errorMessage?: string};
export type CanVote = {status: string, statusF: boolean, statusB: boolean, errorMessage?: string};
