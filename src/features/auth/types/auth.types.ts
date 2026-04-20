export interface User {
  id: string;
  email?: string;
  username?: string;
  name: string;
}

export interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface LoginCredentials {
  id: string;
  password: string;
}

export interface PasswordResetRequest {
  id: string;
}

export interface PasswordResetResponse {
  success: boolean;
  message: string;
}
