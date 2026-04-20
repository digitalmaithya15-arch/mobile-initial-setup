import { useState, useCallback, useEffect } from 'react';
import { AuthState, LoginCredentials, User, PasswordResetRequest } from '../types/auth.types';
import { authService } from '../services/authService';

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isLoggedIn: false,
    isLoading: false,
    error: null,
  });

  // Check auth status on mount
  useEffect(() => {
    const checkAuth = async () => {
      setAuthState((prev) => ({ ...prev, isLoading: true }));
      try {
        const user = await authService.checkAuthStatus();
        setAuthState((prev) => ({
          ...prev,
          user,
          isLoggedIn: !!user,
          isLoading: false,
          error: null,
        }));
      } catch (error) {
        setAuthState((prev) => ({
          ...prev,
          isLoading: false,
          error: error instanceof Error ? error.message : 'Failed to check auth status',
        }));
      }
    };

    checkAuth();
  }, []);

  const login = useCallback(async (credentials: LoginCredentials) => {
    setAuthState((prev) => ({ ...prev, isLoading: true, error: null }));
    try {
      const { user } = await authService.login(credentials);
      setAuthState((prev) => ({
        ...prev,
        user,
        isLoggedIn: true,
        isLoading: false,
        error: null,
      }));
      return { success: true };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Login failed';
      setAuthState((prev) => ({
        ...prev,
        isLoading: false,
        error: errorMessage,
      }));
      return { success: false, error: errorMessage };
    }
  }, []);

  const logout = useCallback(async () => {
    setAuthState((prev) => ({ ...prev, isLoading: true }));
    try {
      await authService.logout();
      setAuthState({
        user: null,
        isLoggedIn: false,
        isLoading: false,
        error: null,
      });
      return { success: true };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Logout failed';
      setAuthState((prev) => ({
        ...prev,
        isLoading: false,
        error: errorMessage,
      }));
      return { success: false, error: errorMessage };
    }
  }, []);

  const resetPassword = useCallback(async (request: PasswordResetRequest) => {
    setAuthState((prev) => ({ ...prev, isLoading: true, error: null }));
    try {
      const response = await authService.resetPassword(request);
      setAuthState((prev) => ({
        ...prev,
        isLoading: false,
        error: null,
      }));
      return { success: true, message: response.message };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Password reset failed';
      setAuthState((prev) => ({
        ...prev,
        isLoading: false,
        error: errorMessage,
      }));
      return { success: false, error: errorMessage };
    }
  }, []);

  const clearError = useCallback(() => {
    setAuthState((prev) => ({ ...prev, error: null }));
  }, []);

  return {
    ...authState,
    login,
    logout,
    resetPassword,
    clearError,
  };
};
