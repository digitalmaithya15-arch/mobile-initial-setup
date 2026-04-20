import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { PasswordResetForm } from '../components/PasswordResetForm';
import { useAuth } from '../hooks/useAuth';

interface PasswordResetScreenProps {
  onBack?: () => void;
}

export const PasswordResetScreen: React.FC<PasswordResetScreenProps> = ({ onBack }) => {
  const auth = useAuth();

  const handleSubmit = async (request: any) => {
    return await auth.resetPassword(request);
  };

  return (
    <View style={styles.container}>
      <PasswordResetForm
        onSubmit={handleSubmit}
        isLoading={auth.isLoading}
        onBack={onBack || (() => {})}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
