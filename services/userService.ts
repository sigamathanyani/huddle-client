import { userAPI } from "@/api/userApi"
import { User } from "@/types/user"

export const me = async (token :string): Promise<User | null> => { 
    return await userAPI.me(token)
}