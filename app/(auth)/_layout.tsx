import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { AuthProvider } from '@/context/AuthContext'

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='register' />
      <Stack.Screen name='login' />
      <Stack.Screen name='complete' />
    </Stack>
  )
}