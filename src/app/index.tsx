import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function IndexScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Logiline</Text>
        <Text style={styles.subtitle}>A modern login application built with Expo</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Features:</Text>
          <Text style={styles.featureText}>✓ Mock Authentication System</Text>
          <Text style={styles.featureText}>✓ Password Reset Functionality</Text>
          <Text style={styles.featureText}>✓ Form Validation</Text>
          <Text style={styles.featureText}>✓ Error Handling</Text>
          <Text style={styles.featureText}>✓ Loading States</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Demo Credentials:</Text>
          <Text style={styles.credentialText}>User ID: user123</Text>
          <Text style={styles.credentialText}>Password: password123</Text>
          <Text style={styles.divider}>or</Text>
          <Text style={styles.credentialText}>User ID: admin456</Text>
          <Text style={styles.credentialText}>Password: admin123</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  section: {
    marginVertical: 20,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  featureText: {
    fontSize: 14,
    color: '#555',
    marginVertical: 6,
    lineHeight: 22,
  },
  credentialText: {
    fontSize: 14,
    color: '#666',
    marginVertical: 4,
    fontFamily: 'monospace',
  },
  divider: {
    fontSize: 12,
    color: '#999',
    marginVertical: 8,
    textAlign: 'center',
  },
});
