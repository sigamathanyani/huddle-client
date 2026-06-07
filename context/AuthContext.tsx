import { deleteToken, getToken, saveToken } from "@/storage/tokenStorage";
import { User } from "@/types/user";
import { createContext, useContext, useEffect, useState } from "react";
import { userAPI } from "@/api/userApi";
import { LoginRequest } from "@/types/auth";
import { loginUser } from "@/services/authService";
import { me } from "@/services/userService";

type AuthContextType = {
    currentUser: User | null
    login: (data: LoginRequest) => void
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
        // Gett the token
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
            setCurrentUser(null);

        }
    }

    const logout = async () => {
        await deleteToken();
        setCurrentUser(null);
    }

    const login = async (data: LoginRequest) => {
        const u = await loginUser(data);
        await saveToken(u.access_token);
    }

    return (
        <AuthContext.Provider value={{ isAuthLoading, login, logout, currentUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuth = async () => {
    const ctx = useContext(AuthContext)
    if(!ctx){
        throw new Error("Use this hook in a child of this hook");
    }
    return ctx
}