"use client"
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import GameContextProvider from './store/gameContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Memory Game',
  description: 'Apps',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GameContextProvider>
        <body className={inter.className}>{children}</body>
      </GameContextProvider>
    </html>
  )
}
