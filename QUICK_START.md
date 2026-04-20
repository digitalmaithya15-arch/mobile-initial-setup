# Quick Start Guide - Logiline Auth Setup

## What's New?

A complete authentication system with login, password reset, and homepage has been implemented with a structured directory layout.

## Quick Demo

### 1. Start the App
```bash
npm install
npm start
```

### 2. Login
Use one of these credentials:
- **ID**: `user123` | **Password**: `password123`
- **ID**: `admin456` | **Password**: `admin123`
- **ID**: `test789` | **Password**: `test123`

### 3. Features to Try
- ✅ Login with valid credentials
- ✅ Try invalid credentials (see error messages)
- ✅ Test form validation (leave fields empty)
- ✅ Click "Forgot Password?" and reset
- ✅ View your profile on home screen
- ✅ Logout and see return to login

## File Structure

```
src/features/
├── auth/              ← Authentication feature
│   ├── components/    ← Reusable form components
│   ├── hooks/         ← useAuth custom hook
│   ├── screens/       ← Full screens
│   ├── services/      ← Auth logic & mock data
│   └── types/         ← TypeScript definitions
└── home/              ← Homepage feature
    ├── components/    ← UI components
    └── screens/       ← Home screen
```

## Key Files to Know

| File | Purpose |
|------|---------|
| `src/features/auth/hooks/useAuth.ts` | Main auth state management |
| `src/features/auth/services/authService.ts` | Login/reset logic & mock users |
| `src/services/storageService.ts` | Data persistence (AsyncStorage) |
| `src/app/_layout.tsx` | Navigation routing based on auth |

## Core Functionality

### Check Auth Status
```typescript
const { isLoggedIn, user } = useAuth();
```

### Login
```typescript
const { login } = useAuth();
await login({ id: 'user123', password: 'password123' });
```

### Logout
```typescript
const { logout } = useAuth();
await logout();
```

### Reset Password
```typescript
const { resetPassword } = useAuth();
const result = await resetPassword({ id: 'user123' });
```

## Demo Credentials

| User | ID | Password |
|------|----|----|
| John Doe | user123 | password123 |
| Admin | admin456 | admin123 |
| Test User | test789 | test123 |

## What's Included

✅ **Login System**
- ID + Password authentication
- Form validation
- Error handling

✅ **Password Reset**
- Reset by user ID
- Success/error feedback
- Demo password generation

✅ **Data Persistence**
- AsyncStorage integration
- Auto-login on app restart
- Secure token storage

✅ **Navigation**
- Conditional routing based on auth
- Smooth transitions
- Stack-based navigation

✅ **UI Components**
- LoginForm with validation
- PasswordResetForm
- HomeScreen with user info
- Error/success messages

✅ **TypeScript**
- Full type safety
- Interface definitions
- Type checking

## Next Steps

### For Development
1. Customize mock users in `authService.ts`
2. Modify validation rules in form components
3. Update styling in component files
4. Add more features to home screen

### For Production
1. Replace `authService.ts` with real API calls
2. Update token management
3. Add biometric authentication
4. Implement refresh token logic
5. Add real password reset email flow

## Customization Examples

### Change Demo User Credentials
Edit `src/features/auth/services/authService.ts`:
```typescript
const MOCK_USERS = {
  'yourID': { id: 'yourID', name: 'Your Name', password: 'yourPassword' }
};
```

### Modify Validation Rules
Edit `src/features/auth/components/LoginForm.tsx`:
```typescript
if (password.length < 8) {  // Change minimum length
  setValidationError('Password must be at least 8 characters');
}
```

### Change UI Styling
Edit component StyleSheet sections:
```typescript
const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: '#FF6B00',  // Change color
  },
});
```

## Troubleshooting

**"Cannot find module" error?**
- Run `npm install` again
- Clear node_modules: `rm -rf node_modules && npm install`

**AsyncStorage not working?**
- Install: `npm install @react-native-async-storage/async-storage`
- Restart the dev server

**Navigation showing blank screen?**
- Check that all imports are correct
- Verify Stack Navigator setup in `_layout.tsx`
- Clear app cache

## Learn More

See `AUTH_SETUP.md` for comprehensive documentation including:
- Detailed architecture
- Component API reference
- Advanced setup
- Future enhancements

---

**Happy coding! 🚀**
