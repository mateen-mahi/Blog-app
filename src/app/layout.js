import { Inter } from 'next/font/google'
import { AuthProvider } from '@/components/providers/provider'
import { AppProvider } from '@/contextapi/ContextProvider'
import { ThemeProvider } from '@/components/providers/Themeprovider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Irfan Malik || Home',
  description: 'Xeven Solutions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <AppProvider>
            <ThemeProvider>
        <AuthProvider>
        <div className="body-div">
        {children}
        </div>
        </AuthProvider>
        </ThemeProvider>
          </AppProvider>
        </body>
    </html>
  )
}
