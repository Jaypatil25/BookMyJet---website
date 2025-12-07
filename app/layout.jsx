import './globals.css'

export const metadata = {
  title: 'BookMyJet',
  description: 'Created by Jay',
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
