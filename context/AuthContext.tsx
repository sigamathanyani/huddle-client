import { deleteToken, getToken, saveToken } from "@/storage/tokenStorage";
import { User } from "@/types/user";
import { createContext, useContext, useEffect, useState } from "react";
import { LoginRequest, RegisterRequest } from "@/types/auth";
import { loginUser, registerUser } from "@/services/authService";
import { me } from "@/services/userService";

type AuthContextType = {
    currentUser: User | null
    loginU: (data: LoginRequest) => void
    registerU: (data: RegisterRequest) => void
    logout: () => void
    isAuthLoading: boolean
}

type Props = {
    children: React.ReactNode
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider(props: Props) {
    const [currentUser, setCurrentUser] = useState<User | null>(null)
    const [isAuthLoading, setIsAuthLoading] = useState<boolean>(false)

    useEffect(() => {
        authInit()
    }, [])

    const authInit = async () => {
        // Get the token
        try {
            setIsAuthLoading(true)
            const accessToken = await getToken();
            if (!accessToken) {
                setCurrentUser(null);
                return;
            }
            const user = await me(accessToken)
            setCurrentUser(user)

        } catch (error) {
            setCurrentUser(null);
            setIsAuthLoading(false);
            console.error(error);
        } finally {
            setIsAuthLoading(false);
        }
    }

    const logout = async () => {
        await deleteToken();
        setCurrentUser(null);
    }

    const loginU = async (data: LoginRequest) => {
        try {
            setIsAuthLoading(true)
            const u = await loginUser(data);
            await saveToken(u.access_token);
            const user = await me(u.access_token)
            setCurrentUser(user)
        } catch (error) {
            console.error(error);
        } finally {
            setIsAuthLoading(false)
        }
    }

    const registerU = async (data: RegisterRequest) => {
        try {
            setIsAuthLoading(true)
            const u = await registerUser(data);
            await saveToken(u.access_token);
            const user = await me(u.access_token)
            setCurrentUser(user)
        } catch (error) {
            console.error(error);
        } finally {
            setIsAuthLoading(false)
        }
    }

    return (
        <AuthContext.Provider value={{ isAuthLoading, loginU, registerU, logout, currentUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const ctx = useContext(AuthContext)
    if (!ctx) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return ctx
}