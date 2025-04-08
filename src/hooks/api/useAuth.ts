
import { RootState } from '@/redux/store';
import { useSnackbar } from 'notistack'
import { useDispatch, useSelector } from 'react-redux';
import { redirect, useRouter } from 'next/navigation';
import authService from '@/services/Auth.service';
import { LoginRequestType } from '@/types/entities/Auth';
import { setMe } from '@/redux/slice/user.slice';

function useAuth() {
    const userStore = useSelector((state: RootState) => state.userSlice)
    const dispatch = useDispatch();
    const router = useRouter();
    const { enqueueSnackbar } = useSnackbar();

    //TODO: [LOGIN]
    const handleLogin = async ({ username, password }: LoginRequestType) => {
        try {
            const res = await authService.login({ username, password })
            console.log("💲💲💲 ~ handleLogin ~ res:", res)

            if (!res.token) {
                enqueueSnackbar({ variant: "error", message: "Login failed, try again" })
                return
            }
            const item = {
                token: res.token,
            }
            dispatch(setMe(res.user))
            console.log("💲💲💲 ~ handleLogin ~ res.user:", res.user)
            localStorage.setItem('token', JSON.stringify(item))
            enqueueSnackbar({ variant: "success", message: "Login success" })
            router.push("/home")
        } catch (error) {
            enqueueSnackbar({ variant: "error", message: "Login failed, try again" })
        }

    }

    const handleGetMe = async () => {

    }
    const handleRegister = async () => {

    }
    const handleLogout = async () => {

    }
    return {
        handleLogin,
        handleGetMe,
        handleRegister,
        handleLogout
    }
}

export default useAuth