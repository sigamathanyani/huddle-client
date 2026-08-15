export class ApiError extends Error{
    errorCode: string;
    statusCode: number;
    data: any

    constructor(message: string, errorCode: string, statusCode: number, data?: any){
        super(message)
        this.data = data
        this.errorCode = errorCode
        this.statusCode = statusCode
    }
}