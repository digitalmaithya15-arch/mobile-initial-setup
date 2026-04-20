import { LoginCredentials, User, PasswordResetResponse, PasswordResetRequest } from '../types/auth.types';
import { storageService } from '../../../services/storageService';

// Mock users database
const MOCK_USERS = {
  'user123': { id: 'user123', name: 'John Doe', password: 'password123' },
  'admin456': { id: 'admin456', name: 'Admin User', password: 'admin123' },
  'test789': { id: 'test789', name: 'Test User', password: 'test123' },
};

const MOCK_RESET_PASSWORDS = {
  'user123': 'newpassword123',
  'admin456': 'newadmin123',
  'test789': 'newtest123',
};

export const authService = {
  async login(credentials: LoginCredentials): Promise<{ user: User; token: string }> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const mockUser = MOCK_USERS[credentials.id as keyof typeof MOCK_USERS];

    if (!mockUser) {
      throw new Error('User not found');
    }

    if (mockUser.password !== credentials.password) {
      throw new Error('Invalid password');
    }

    const user: User = {
      id: mockUser.id,
      name: mockUser.name,
    };

    const token = `mock_token_${mockUser.id}_${Date.now()}`;

    await Promise.all([
      storageService.saveUser(user),
      storageService.saveToken(token),
      storageService.setLoggedIn(true),
    ]);

    return { user, token };
  },

  async logout(): Promise<void> {
    await storageService.clearAuthData();
  },

  async resetPassword(request: PasswordResetRequest): Promise<PasswordResetResponse> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const mockUser = MOCK_USERS[request.id as keyof typeof MOCK_USERS];

    if (!mockUser) {
      throw new Error('User not found');
    }

    const newPassword = MOCK_RESET_PASSWORDS[request.id as keyof typeof MOCK_RESET_PASSWORDS];
    
    if (newPassword) {
      MOCK_USERS[request.id as keyof typeof MOCK_USERS].password = newPassword;
    }

    return {
      success: true,
      message: `Password reset successful. Your new password is: ${newPassword}`,
    };
  },

  async checkAuthStatus(): Promise<User | null> {
    const isLoggedIn = await storageService.isLoggedIn();
    if (!isLoggedIn) {
      return null;
    }
    return await storageService.getUser();
  },

  // Get mock users for testing/demo purposes
  getMockUsers() {
    return Object.entries(MOCK_USERS).map(([id, user]) => ({
      id: user.id,
      name: user.name,
      password: user.password,
    }));
  },
};
