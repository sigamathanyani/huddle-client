
import * as SecureStore from 'expo-secure-store'

export async function saveToken(token: string): Promise<void>{
    await SecureStore.setItemAsync('access_token', token)
}

export async function getToken(): Promise<string | null>{
    return await SecureStore.getItemAsync('access_token')
}

export async function deleteToken(): Promise<void>{
    return await SecureStore.deleteItemAsync('access_token')
}