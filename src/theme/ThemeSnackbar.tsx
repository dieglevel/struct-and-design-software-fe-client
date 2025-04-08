'use client'
import React from 'react'
import { SnackbarProvider } from 'notistack'

type Props = {
  children: React.ReactNode
}

export const ThemeSnackBarProvider = ({ children }: Props) => {
  return (
    <SnackbarProvider maxSnack={5} autoHideDuration={2000} anchorOrigin={{ vertical: 'top', horizontal: 'left' }}>
      {children}
    </SnackbarProvider>
  )
}
