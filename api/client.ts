const BASE_URL = 'http://192.168.101.4:8000';

export default async function apiRequest(endpoint: string, options: RequestInit) {
    const response = await fetch(`${BASE_URL}${endpoint}`,options);
    if(!response.ok){
        const error = await response.json();
        throw new Error(error.detail);
    }
    return response.json()
}