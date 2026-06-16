import { authAPI } from "@/api/authApi";
import { LoginRequest, LoginResponse, UserComleteProfile, UserRegister } from "@/types/auth";

export const registerUser = async (data: UserRegister) => {
    return await authAPI.register(data)
}

export const loginUser = async (data: LoginRequest): Promise<LoginResponse> => {
    return await authAPI.login(data)
}

export const completeUserProfile = async (data: UserComleteProfile) => {
    await authAPI.completeProfile(data)
}