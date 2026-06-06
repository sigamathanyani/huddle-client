import { UserRegister } from '@/types/auth'
import apiRequest from './client'
import { ENDPOINTS } from '@/endpoints/endpoints'

export const authAPI = {
    register: async (data: UserRegister) =>  {
        return await apiRequest(ENDPOINTS.AUTH.REGISTER, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: data.email,
                username: data.username,
                hashed_password: data.password
            })
        })
    }
}