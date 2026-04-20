# Authentication & Homepage Setup Guide

## Overview
This document outlines the authentication and homepage setup for the Logiline mobile application.

## Project Structure

```
src/
├── features/
│   ├── auth/
│   │   ├── components/
│   │   │   ├── LoginForm.tsx          # Login form component with validation
│   │   │   └── PasswordResetForm.tsx   # Password reset form component
│   │   ├── hooks/
│   │   │   └── useAuth.ts              # Custom auth hook with state management
│   │   ├── screens/
│   │   │   ├── LoginScreen.tsx         # Login screen (handles modal between login/reset)
│   │   │   └── PasswordResetScreen.tsx # Password reset screen
│   │   ├── services/
│   │   │   └── authService.ts          # Mock authentication logic
│   │   └── types/
│   │       └── auth.types.ts           # TypeScript interfaces for auth
│   └── home/
│       ├── components/
│       └── screens/
│           └── HomeScreen.tsx          # Main home screen for authenticated users
├── services/
│   └── storageService.ts               # AsyncStorage wrapper for data persistence
└── app/
    ├── _layout.tsx                     # Root navigation with auth flow
    └── index.tsx                       # Welcome screen
```

## Features Implemented

### 1. Authentication System
- **Mock Authentication**: Demo users for testing without backend
- **ID + Password Login**: Simple credentials-based authentication
- **Form Validation**: Real-time validation with user feedback
- **Loading States**: Visual feedback during async operations
- **Error Handling**: Comprehensive error messages and recovery

### 2. Password Reset
- **Reset Request**: Users can request password reset by ID
- **Error Handling**: Proper error messages for invalid users
- **Success Messages**: Confirmation feedback with new temporary password

### 3. Data Persistence
- **AsyncStorage**: Secure local storage for:
  - User information
  - Authentication tokens
  - Login status
- **Auto Login**: Check auth status on app startup

### 4. Navigation Flow
- **Auth Stack**: Login and password reset screens for unauthenticated users
- **Main Stack**: Home screen and app tabs for authenticated users
- **Automatic Navigation**: Redirects based on auth state

## Mock Users for Testing

```
User 1:
  ID: user123
  Password: password123

User 2:
  ID: admin456
  Password: admin123

User 3:
  ID: test789
  Password: test123
```

## Key Components

### useAuth Hook
The `useAuth` hook provides complete auth state management:

```typescript
const {
  user,                    // Current user object
  isLoggedIn,              // Auth status
  isLoading,               // Loading indicator
  error,                   // Error message
  login,                   // Login function
  logout,                  // Logout function
  resetPassword,           // Password reset function
  clearError               // Clear error state
} = useAuth();
```

### AuthService
Handles all authentication logic:
- `login(credentials)`: Authenticate with credentials
- `logout()`: Clear auth data
- `resetPassword(request)`: Reset password
- `checkAuthStatus()`: Check if user is authenticated
- `getMockUsers()`: Get list of demo users

### StorageService
Manages data persistence:
- `saveUser(user)`: Save user info
- `getUser()`: Retrieve user info
- `saveToken(token)`: Save auth token
- `getToken()`: Retrieve auth token
- `clearAuthData()`: Clear all auth data

## UI/UX Features

### LoginForm Component
- Clean, intuitive interface
- Real-time form validation
- Error dismissal capability
- Demo credentials display
- Loading state with spinner
- Forgot password link

### PasswordResetForm Component
- Simple ID input
- Success/error messaging
- Confirmation display
- Back navigation

### HomeScreen Component
- User greeting with name
- User information display
- Quick action buttons
- Logout functionality
- Loading state handling

## Installation & Setup

### 1. Install Dependencies
```bash
cd logiline
npm install
```

This will install:
- `@react-native-async-storage/async-storage` - For data persistence
- `@react-navigation/native-stack` - For stack navigation
- All other required dependencies

### 2. Run the Application

#### iOS
```bash
npm run ios
```

#### Android
```bash
npm run android
```

#### Web
```bash
npm run web
```

#### Expo Go
```bash
npm start
```

## Authentication Flow

```
App Launch
    ↓
Check AuthStatus (useAuth hook)
    ↓
┌─────────────────────────┐
│ Is User Logged In?      │
└─────────────────────────┘
    ↙           ↘
  No           Yes
  ↓             ↓
Auth Stack    Main Stack
  ↓             ↓
LoginScreen  HomeScreen
  ↓           ↓
Enter ID+   View Profile
Password    AppTabs
  ↓
Reset?
  ↓
PasswordResetScreen
```

## State Management

The authentication state is managed using React hooks and Context-like patterns through the `useAuth` hook. State includes:

```typescript
interface AuthState {
  user: User | null;          // Current user
  isLoggedIn: boolean;        // Auth status
  isLoading: boolean;         // Async operations
  error: string | null;       // Error messages
}
```

## Type Definitions

All TypeScript types are defined in `src/features/auth/types/auth.types.ts`:

- `User`: User profile information
- `AuthState`: Complete auth state
- `LoginCredentials`: Login form data
- `PasswordResetRequest`: Reset request data
- `PasswordResetResponse`: Reset response data

## Testing

### Manual Testing with Mock Users
1. Run the app
2. Use any of the mock credentials provided
3. Test password reset functionality
4. Test form validation
5. Test logout and re-login

### Demo Features
- Invalid credentials error handling
- Network delay simulation (1.5s for login, 1s for reset)
- Form validation feedback
- Loading state visualization

## Future Enhancements

Potential improvements for production use:

1. **Real Backend Integration**
   - Replace mock auth service with API calls
   - Add JWT token management
   - Implement refresh token logic

2. **Advanced Security**
   - Biometric authentication
   - Two-factor authentication
   - OAuth/Social login

3. **Enhanced UX**
   - Splash screen customization
   - Animated transitions
   - Gesture-based navigation
   - Deep linking

4. **State Management**
   - Redux/Context API integration
   - Persistent auth state
   - Offline capabilities

5. **Additional Features**
   - Profile editing
   - Password change
   - Account recovery
   - Session management

## Troubleshooting

### AsyncStorage Issues
- Clear app cache and reinstall
- Check permissions for mobile platforms
- Verify AsyncStorage installation

### Navigation Issues
- Ensure `NavigationContainer` is properly configured
- Check Stack Navigator screen names
- Verify navigation parameters

### Form Validation Issues
- Check input field names
- Verify validation logic in components
- Test with different input values

## Support

For issues or questions:
1. Check the demo credentials
2. Review error messages
3. Check browser console/device logs
4. Verify all dependencies are installed

---

**Version**: 1.0.0  
**Last Updated**: April 2026
