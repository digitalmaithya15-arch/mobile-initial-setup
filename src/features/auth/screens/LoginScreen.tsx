import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { LoginForm } from '../components/LoginForm';
import { PasswordResetForm } from '../components/PasswordResetForm';
import { useAuth } from '../hooks/useAuth';

type LoginScreenMode = 'login' | 'reset';

export const LoginScreen: React.FC = () => {
  const [mode, setMode] = useState<LoginScreenMode>('login');
  const auth = useAuth();

  const handleLoginSubmit = async (credentials: any) => {
    const result = await auth.login(credentials);
    if (!result.success) {
      // Error is displayed in the form
    }
  };

  const handleResetSubmit = async (request: any) => {
    return await auth.resetPassword(request);
  };

  return (
    <SafeAreaView style={styles.container}>
      {mode === 'login' ? (
        <LoginForm
          onSubmit={handleLoginSubmit}
          isLoading={auth.isLoading}
          error={auth.error}
          onForgotPassword={() => setMode('reset')}
          onClearError={auth.clearError}
        />
      ) : (
        <PasswordResetForm
          onSubmit={handleResetSubmit}
          isLoading={auth.isLoading}
          onBack={() => {
            setMode('login');
            auth.clearError();
          }}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
