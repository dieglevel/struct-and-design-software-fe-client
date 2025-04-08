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
    async logout({ token }: LogoutRequestType) {
        return await api.post(`${this.END_POINT}/logout`, { token })
    }
}

const authService = new AuthService();

export default authService;