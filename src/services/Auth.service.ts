import api from "@/libs/axios/axios.config";
import { LoginRequestType, LoginResponseType, LogoutRequestType } from "@/types/entities/Auth";

class AuthService {
    private END_POINT = `${process.env.NEXT_PUBLIC_USER_SERVICE}/auth`

    async login({ username, password }: LoginRequestType): Promise<LoginResponseType> {
        const response = await api.post<LoginResponseType>(`${this.END_POINT}/token`, {
            username,
            password,
        });
        return response.data;
    }

    async sendTokenToServer(token:string,userId:string) {
         const response = await api.post<LoginResponseType>(`${this.END_POINT}/notification`, {
            token,
            userId
        });
        return response;
    }

    async loginGoogle() {
        const response = await api.get<LoginResponseType>(`${this.END_POINT}/google/login`);
        return response.data
    }
    async loginGitHub() {
        const response = await api.get<LoginResponseType>(`${this.END_POINT}/github/login`);
        return response.data
    }
    async logout({ token }: LogoutRequestType) {
        return await api.post(`${this.END_POINT}/logout`, { token })
    }
}

const authService = new AuthService();

export default authService;