import { configureStore } from '@reduxjs/toolkit'
import useUserSlice from './slice/user.slice'
import useAppSlice from './slice/app.slice'

export const store = configureStore({
  reducer: {
    // sidebar: SideBarReducer,
    userSlice: useUserSlice,
    appSlice: useAppSlice,
  },
})

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
