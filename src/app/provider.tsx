'use client'

import { ThemeProvider } from '@/components/ui'
import { ThemeSnackBarProvider } from '@/theme/ThemeSnackbar'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
      forcedTheme="light"
    >
      <Provider store={store}>
        <ThemeSnackBarProvider>{children}</ThemeSnackBarProvider>
      </Provider>
    </ThemeProvider>
  )
}
