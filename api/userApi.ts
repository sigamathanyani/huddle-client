import { ENDPOINTS } from "@/endpoints/endpoints"
import apiRequest from "./client"
import { User } from "@/types/user"

export const userAPI = {
    me: async (token: string): Promise<User | null> => {
        return await apiRequest(ENDPOINTS.USER.ME, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    }
}