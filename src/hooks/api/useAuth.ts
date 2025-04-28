import { RootState } from '@/redux/store'
import { useSnackbar } from 'notistack'
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import authService from '@/services/Auth.service';
import { LoginRequestType } from '@/types/entities/Auth';
import { setMe } from '@/redux/slice/user.slice';
import userService from '@/services/User.service'

function useAuth() {
  const userStore = useSelector((state: RootState) => state.userSlice)
  const dispatch = useDispatch()
  const router = useRouter()
  const { me } = userStore
  const { enqueueSnackbar } = useSnackbar()


  //TODO: [LOGIN]
  const handleLogin = async ({ username, password }: LoginRequestType) => {
    try {
      const res = await authService.login({ username, password })

      if (!res.token) {
        enqueueSnackbar({ variant: 'error', message: 'Login failed, try again' })
        return
      }
      const item = {
        token: res.token,
      }
      dispatch(setMe(res.user))
      localStorage.setItem('token', JSON.stringify(item))
      enqueueSnackbar({ variant: 'success', message: 'Login success' })
      router.push('/home')
    } catch (error) {
      enqueueSnackbar({ variant: 'error', message: 'Login failed, try again' })
    }
  }

  const handleLoginGoogle = async () => {
    try {
      const res = await authService.loginGoogle()

      if (!res.token) {
        enqueueSnackbar({ variant: 'error', message: 'Login failed, try again' })
        return
      }
      const item = {
        token: res.token,
      }
      dispatch(setMe(res.user))
      localStorage.setItem('token', JSON.stringify(item))
      enqueueSnackbar({ variant: 'success', message: 'Login success' })
      router.push('/home')
    } catch (error) {
      enqueueSnackbar({ variant: 'error', message: 'Login failed, try again' })
    }
  }

  const handleLoginGitHub = async () => {
    try {
      const res = await authService.loginGitHub()
      console.log("💲💲💲 ~ handleLoginGitHub ~ res:", res)

      if (!res.token) {
        enqueueSnackbar({ variant: 'error', message: 'Login failed, try again' })
        return
      }
      const item = {
        token: res.token,
      }
      dispatch(setMe(res.user))
      localStorage.setItem('token', JSON.stringify(item))
      enqueueSnackbar({ variant: 'success', message: 'Login success' })
      router.push('/home')
    } catch (error) {
      enqueueSnackbar({ variant: 'error', message: 'Login failed, try again' })
    }
  }
  const handleNavigateAccount = async () => {
    const tokenItem = localStorage.getItem('token')
    return tokenItem ? redirect('/profile/information') : redirect('/login')
  }

  const handleLogout = async () => {
    localStorage.clear()
    dispatch(setMe({}))
    redirect("/login")
  }

  const handleGetMe = async () => {
    try {
      const tokenItem = localStorage.getItem('token')
      if (!tokenItem) return

      const response = await userService.getMe()
      dispatch(setMe(response.data))
    } catch (error) {
      localStorage.removeItem('token')
    }
  }
  const handleRegister = async () => { }
  return { me, handleLogin, handleGetMe, handleRegister, handleLogout, handleNavigateAccount, handleLoginGoogle, handleLoginGitHub }
}

export default useAuth
