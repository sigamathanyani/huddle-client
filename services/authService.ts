import { authAPI } from "@/api/authApi";
import { UserRegister } from "@/types/auth";

export const registerUser = async (data: UserRegister) => {
    await authAPI.register(data)
}