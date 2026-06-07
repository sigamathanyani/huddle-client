
export interface UserRegister {
    username: string
    email: string
    password: string
}

export interface LoginRequest {
    username: string
    email: string
    password: string
}
export interface LoginResponse {
    access_token: string
    email: string
}
export interface UserComleteProfile {
    fullName: string
    phoneNumber: string
    gender: string
}