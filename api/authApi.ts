import { LoginRequest, LoginResponse, UserComleteProfile, UserRegister } from '@/types/auth'
import apiRequest from './client'
import { ENDPOINTS } from '@/endpoints/endpoints'

export const authAPI = {
    register: async (data: UserRegister) => {
        return await apiRequest(ENDPOINTS.AUTH.REGISTER, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: data.email,
                username: data.username,
                hashed_password: data.password
            })
        })
    },

    login: async (data: LoginRequest): Promise<LoginResponse> => {
        return await apiRequest(ENDPOINTS.AUTH.LOGIN, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: data.email,
                username: data.username,
                hashed_password: data.password
            })
        })
    },

    completeProfile: async (data: UserComleteProfile) => {
        return apiRequest(ENDPOINTS.AUTH.COMPLETE_PROFILE, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: data.fullName.split(' ')[0] ?? '',
                surname: data.fullName.split(' ')[1] ?? '',
                phone_number: data.phoneNumber,
                gender: data.gender
            })
        })
    }
}