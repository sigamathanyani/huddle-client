import { ErrorCodes } from "@/errors/codes";
import { ApiError } from "@/helpers/error";

const BASE_URL = 'http://192.168.101.2:8000';

export default async function apiRequest(endpoint: string, options: RequestInit) {
    const response = await fetch(`${BASE_URL}${endpoint}`, options);

    if (!response.ok) {
        const error = await response.json();
        console.log(error);
        
        throw new ApiError(error.detail.message, error.detail.errorCode, error.status, error);
    }
    
    return response.json()
}